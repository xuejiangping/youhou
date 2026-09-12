import { readFileSync } from "node:fs"
import { Plugin } from "vite"

export function preserveUserscriptHeader(entry: string): Plugin {
  const source = readFileSync(entry, 'utf8')
  const userscriptHeader =
    source.match(/^\/\/\s*==UserScript==[\s\S]*?^\/\/\s*==\/UserScript==\s*/m)?.[0] ?? ''

  return {
    name: 'preserve-userscript-header',
    generateBundle(_, bundle) {
      for (const output of Object.values(bundle)) {
        if (output.type === 'chunk') {
          if (!output.code.startsWith('// ==UserScript==')) output.code = userscriptHeader + output.code
        }
      }
    },
  }
}

export function preserveHotReload(entry: string): Plugin {
  const hotReloadCode = `
    import { HotReload } from '../../utils/HotReload.js';
    const hr = new HotReload({ ws_url: 'wss://localhost:1234' })
  `
  return {
    name: 'preserve-hot-reload-script',
    transform(code, id) {
      if (id.endsWith(entry)) {
        return {
          code: `
        ${hotReloadCode}
        ${code}`,
          map: null
        }
      }
    },
  }
}