// Loads Google's Maps JavaScript API into the page, once.

const CALLBACK = '__googleMapsReady'
let loading: Promise<void> | null = null

// The address of Google's script for this key. `loading=async` is Google's current way of loading it; the
// libraries are then asked for with importLibrary() (see MapView.tsx).
export function mapsScriptUrl(key: string): string {
  const params = new URLSearchParams({ key, v: 'weekly', loading: 'async', language: 'ko', callback: CALLBACK })
  return `https://maps.googleapis.com/maps/api/js?${params.toString()}`
}

// Resolves when the script is loaded. Rejects if it cannot be reached. A key that Google refuses (wrong key, this
// site not allowed, no billing) does not stop the script from loading: Google calls `onAuthFailure` for that.
export function loadGoogleMaps(key: string, onAuthFailure: () => void): Promise<void> {
  const w = window as unknown as Record<string, unknown>
  w.gm_authFailure = onAuthFailure // Google's own name for the function it calls when it refuses a key
  if (loading) return loading
  loading = new Promise<void>((resolve, reject) => {
    w[CALLBACK] = () => resolve()
    const script = document.createElement('script')
    script.src = mapsScriptUrl(key)
    script.async = true
    script.onerror = () => {
      loading = null // a later visit to the page may try again
      script.remove()
      reject(new Error('The Google Maps script could not be loaded'))
    }
    document.head.appendChild(script)
  })
  return loading
}
