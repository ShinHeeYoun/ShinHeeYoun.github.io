// Writes server/scores/fixtures/records.json. Run it after the rules of the game change:
//
//   npx vite-node server/scores/fixtures/generate.ts
//
// (src/tools/yacht/fixtures.test.ts fails until the file on disk matches what build.ts makes.)

import { writeFileSync } from 'node:fs'
import { buildFixtures } from './build'

const file = new URL('./records.json', import.meta.url)
const lines = buildFixtures().map((fixture) => '  ' + JSON.stringify(fixture))
writeFileSync(file, '[\n' + lines.join(',\n') + '\n]\n', 'utf8')
console.log(`wrote ${lines.length} cases to ${file.pathname}`)
