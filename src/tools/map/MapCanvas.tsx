import { useEffect, useRef, useState } from 'react'
import { MAX_LAT, MIN_ZOOM, wrapLongitude, type LatLng, type Place } from './places'
import type { View } from './shareLink'

export type MarkerSpec = {
  id: string
  position: LatLng
  kind: 'pin' | 'dot'
  color: string
  glyph?: string // a short text inside a pin
  title: string
}

export type LineSpec = {
  id: string
  path: LatLng[]
  closed: boolean // a closed one is a shape with an inside, not just a line
  color: string
  dashed?: boolean
}

export type Jump = { place: Place; nonce: number }

type Props = {
  dark: boolean
  initial: View
  restoreType: string // the map type the player chose, to go back to when the map is unlocked
  locked: boolean // locked (the quiz): satellite photos only, which have no names on them, and no zooming in close
  onView: (view: View) => void
  onClick: (point: LatLng) => void
  markers: MarkerSpec[]
  lines: LineSpec[]
  jump: Jump | null
  onJumped: () => void
}

type Libraries = {
  AdvancedMarkerElement: typeof google.maps.marker.AdvancedMarkerElement
  PinElement: typeof google.maps.marker.PinElement
}

const LOCKED_MAX_ZOOM = 5

// Google's map, with what the page wants drawn on it (pins, dots, lines and shapes). It is made again when the site's
// theme changes (Google fixes the colour scheme when a map is made); `initial` is where the old one was.
export default function MapCanvas({ dark, initial, restoreType, locked, onView, onClick, markers, lines, jump, onJumped }: Props) {
  const box = useRef<HTMLDivElement>(null)
  const map = useRef<google.maps.Map | null>(null)
  const libs = useRef<Libraries | null>(null)
  const wasLocked = useRef(false)
  const beforeLock = useRef<{ center: google.maps.LatLng | null | undefined; zoom: number | undefined } | null>(null)
  const [ready, setReady] = useState(false)
  // The handlers outlive a render, so they read the latest callbacks from here.
  const callbacks = useRef({ onView, onClick, onJumped })
  callbacks.current = { onView, onClick, onJumped }

  useEffect(() => {
    let cancelled = false
    const element = box.current
    async function start() {
      const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary
      const marker = (await google.maps.importLibrary('marker')) as google.maps.MarkerLibrary
      if (cancelled || !element) return
      libs.current = { AdvancedMarkerElement: marker.AdvancedMarkerElement, PinElement: marker.PinElement }
      const made = new Map(element, {
        center: initial.center,
        zoom: initial.zoom,
        mapTypeId: initial.mapTypeId,
        minZoom: MIN_ZOOM,
        mapId: 'DEMO_MAP_ID', // needed for the markers; Google's map id for trying things out
        colorScheme: dark ? google.maps.ColorScheme.DARK : google.maps.ColorScheme.LIGHT,
        restriction: { latLngBounds: { north: MAX_LAT, south: -MAX_LAT, west: -180, east: 180 }, strictBounds: true },
        streetViewControl: false,
        mapTypeControl: true,
        fullscreenControl: true,
      })
      made.addListener('click', (event: google.maps.MapMouseEvent) => {
        if (event.latLng) callbacks.current.onClick({ lat: event.latLng.lat(), lng: wrapLongitude(event.latLng.lng()) })
      })
      made.addListener('idle', () => {
        const center = made.getCenter()
        if (center) {
          callbacks.current.onView({
            center: { lat: center.lat(), lng: center.lng() },
            zoom: made.getZoom() ?? initial.zoom,
            mapTypeId: made.getMapTypeId() ?? initial.mapTypeId,
          })
        }
      })
      map.current = made
      setReady(true)
    }
    void start()
    return () => {
      cancelled = true
      if (map.current) google.maps.event.clearInstanceListeners(map.current)
      map.current = null
      libs.current = null
      if (element) element.innerHTML = ''
    }
    // The map is made once for this component; a new theme makes a new component.
  }, [])

  // The quiz locks the map: satellite photos have no names on them (the roadmap would give the answers away), and
  // zooming in close would let the player recognise a city. Unlocking gives back the type the player had chosen and
  // the place they were looking at.
  useEffect(() => {
    const current = map.current
    if (!ready || !current || locked === wasLocked.current) return
    wasLocked.current = locked
    if (locked) {
      beforeLock.current = { center: current.getCenter(), zoom: current.getZoom() }
      current.setOptions({ mapTypeId: 'satellite', mapTypeControl: false, maxZoom: LOCKED_MAX_ZOOM })
    } else {
      current.setOptions({ mapTypeId: restoreType, mapTypeControl: true, maxZoom: null })
      const saved = beforeLock.current
      beforeLock.current = null
      if (saved?.center) current.setCenter(saved.center)
      if (saved?.zoom !== undefined) current.setZoom(saved.zoom)
    }
  }, [locked, ready, restoreType])

  // What is drawn on the map follows the lists given: they are drawn again whenever they change.
  useEffect(() => {
    const current = map.current
    const lib = libs.current
    if (!ready || !current || !lib) return
    const pins = markers.map((spec) => {
      let content: HTMLElement
      if (spec.kind === 'pin') {
        content = new lib.PinElement({
          background: spec.color,
          borderColor: '#ffffff',
          glyphColor: '#ffffff',
          glyph: spec.glyph,
        }).element
      } else {
        const dot = document.createElement('div')
        dot.className = 'h-3.5 w-3.5 rounded-full border-2 border-white shadow'
        dot.style.background = spec.color
        dot.style.transform = 'translateY(50%)' // markers sit on their point by their bottom edge: a dot is centred on it
        content = dot
      }
      return new lib.AdvancedMarkerElement({ map: current, position: spec.position, title: spec.title, content })
    })
    const shapes = lines
      .filter((spec) => spec.path.length >= 2)
      .map((spec) => {
        if (spec.closed && spec.path.length >= 3) {
          return new google.maps.Polygon({
            map: current,
            paths: spec.path,
            geodesic: true,
            strokeColor: spec.color,
            strokeWeight: 3,
            fillColor: spec.color,
            fillOpacity: 0.18,
          })
        }
        return new google.maps.Polyline({
          map: current,
          path: spec.path,
          geodesic: true,
          strokeColor: spec.color,
          strokeWeight: 3,
          ...(spec.dashed
            ? {
                strokeOpacity: 0,
                icons: [{ icon: { path: 'M 0,-1 0,1', strokeOpacity: 1, scale: 3 }, offset: '0', repeat: '14px' }],
              }
            : {}),
        })
      })
    return () => {
      for (const pin of pins) pin.map = null
      for (const shape of shapes) shape.setMap(null)
    }
  }, [markers, lines, ready])

  // A place chosen from the list.
  useEffect(() => {
    if (!ready || !map.current || !jump) return
    map.current.panTo({ lat: jump.place.lat, lng: jump.place.lng })
    map.current.setZoom(jump.place.zoom)
    callbacks.current.onJumped() // done: a new map (after a theme change) must not repeat it
  }, [jump, ready])

  return <div ref={box} className="h-[65vh] min-h-[22rem] w-full overflow-hidden rounded-lg border border-border bg-surface" />
}
