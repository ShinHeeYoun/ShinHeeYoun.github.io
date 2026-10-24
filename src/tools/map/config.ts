// The Google Maps API key.
//
// A key for the Maps JavaScript API cannot be kept secret: the browser has to send it to Google, so it is in the page
// for anyone to read. What protects it is the limits set on it in Google Cloud: only this site's address may use it,
// only the Maps JavaScript API, and a daily cap on map loads (see README.md).
//
// While developing, put the key in a file named .env.local in the project folder (it is not committed):
//   VITE_GOOGLE_MAPS_KEY=...
// For the published site, a key that has those limits goes in PUBLISHED_KEY below. A Maps Demo Key is for testing
// only and is not meant to be published, so it stays out of the repository: without a key the page says so.
//
// The key below is limited to https://shinheeyoun.github.io/* and to the Maps JavaScript API, so it does not work
// from localhost: development uses the key in .env.local, which takes the place of this one.
const PUBLISHED_KEY = 'AIzaSyB5pTwlj3fIO2dQ6AOt8UvoDHDk-VAcT8I'

export const GOOGLE_MAPS_KEY: string =
  ((import.meta.env.VITE_GOOGLE_MAPS_KEY as string | undefined) ?? '').trim() || PUBLISHED_KEY
