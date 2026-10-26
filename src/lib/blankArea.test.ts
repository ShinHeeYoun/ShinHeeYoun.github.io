import { describe, expect, it } from 'vitest'
import { isBlankArea, isPainted, type ElementLike, type StyleLike } from './blankArea'

const CLEAR: StyleLike = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  backgroundImage: 'none',
  borderTopWidth: '0px',
  borderRightWidth: '0px',
  borderBottomWidth: '0px',
  borderLeftWidth: '0px',
}

type Spec = { tag?: string; text?: string; attrs?: Record<string, string>; style?: Partial<StyleLike> }

// A small tree of fake elements, from the outermost (listed first) to the clicked one (listed last).
function chain(...specs: Spec[]) {
  const styles = new Map<ElementLike, StyleLike>()
  let parent: ElementLike | null = null
  for (const spec of specs) {
    const attrs = spec.attrs ?? {}
    const element: ElementLike = {
      tagName: spec.tag ?? 'DIV',
      parentElement: parent,
      childNodes: spec.text === undefined ? [] : [{ nodeType: 3, textContent: spec.text }],
      getAttribute: (name) => (name in attrs ? attrs[name] : null),
    }
    styles.set(element, { ...CLEAR, ...spec.style })
    parent = element
  }
  return { target: parent as ElementLike, styleOf: (element: ElementLike) => styles.get(element) as StyleLike }
}

const blank = (...specs: Spec[]) => {
  const { target, styleOf } = chain(...specs)
  return isBlankArea(target, styleOf)
}

describe('isPainted', () => {
  it('knows a clear box from a drawn one', () => {
    expect(isPainted(CLEAR)).toBe(false)
    expect(isPainted({ ...CLEAR, backgroundColor: 'rgb(255, 255, 255)' })).toBe(true)
    expect(isPainted({ ...CLEAR, backgroundColor: 'rgba(0, 8, 20, 0.4)' })).toBe(true)
    expect(isPainted({ ...CLEAR, backgroundColor: 'transparent' })).toBe(false)
    expect(isPainted({ ...CLEAR, backgroundColor: 'rgb(0 0 0 / 0)' })).toBe(false)
    expect(isPainted({ ...CLEAR, backgroundImage: 'linear-gradient(red, blue)' })).toBe(true)
    expect(isPainted({ ...CLEAR, borderBottomWidth: '1px' })).toBe(true)
  })
})

describe('isBlankArea', () => {
  it('is blank for empty wrappers all the way up to the page', () => {
    expect(blank({ tag: 'HTML' }, { tag: 'BODY', style: { backgroundColor: 'rgb(0, 8, 20)' } }, {}, {})).toBe(true)
  })

  it('is blank for a layout box with only whitespace', () => {
    expect(blank({ tag: 'BODY' }, { tag: 'MAIN', text: '\n   ' })).toBe(true)
  })

  it.each(['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'IMG', 'svg', 'CANVAS', 'IFRAME', 'LABEL'])('is not blank on a %s', (tag) => {
    expect(blank({ tag: 'BODY' }, {}, { tag })).toBe(false)
  })

  it('is not blank inside a link or button, however deep', () => {
    expect(blank({ tag: 'BODY' }, { tag: 'A' }, {}, { tag: 'SPAN' })).toBe(false)
    expect(blank({ tag: 'BODY' }, { tag: 'BUTTON' }, { tag: 'path' })).toBe(false)
  })

  it('is not blank on text', () => {
    expect(blank({ tag: 'BODY' }, {}, { tag: 'P', text: 'Hello' })).toBe(false)
  })

  it('is not blank on a card, or in a gap inside it', () => {
    const card = { style: { backgroundColor: 'rgb(0, 29, 61)', borderTopWidth: '1px' } }
    expect(blank({ tag: 'BODY' }, {}, card)).toBe(false)
    expect(blank({ tag: 'BODY' }, {}, card, {}, {})).toBe(false)
  })

  it('is not blank on the sticky bar or the footer, which are painted', () => {
    expect(blank({ tag: 'BODY' }, {}, { tag: 'HEADER', style: { backgroundColor: 'rgba(255, 255, 255, 0.8)' } })).toBe(false)
    expect(blank({ tag: 'BODY' }, {}, { tag: 'FOOTER', style: { borderTopWidth: '1px' } })).toBe(false)
  })

  it('is not blank on something with a role, a tab stop or editable text', () => {
    expect(blank({ tag: 'BODY' }, {}, { attrs: { role: 'dialog' } })).toBe(false)
    expect(blank({ tag: 'BODY' }, {}, { attrs: { tabindex: '0' } })).toBe(false)
    expect(blank({ tag: 'BODY' }, {}, { attrs: { contenteditable: 'true' } })).toBe(false)
  })

  it('treats role="presentation" as a plain box', () => {
    expect(blank({ tag: 'BODY' }, {}, { attrs: { role: 'presentation' } })).toBe(true)
  })

  it('is not blank on a full-screen overlay (a dialog backdrop), which is painted', () => {
    expect(blank({ tag: 'BODY' }, { style: { backgroundColor: 'rgba(0, 0, 0, 0.8)' } })).toBe(false)
  })
})
