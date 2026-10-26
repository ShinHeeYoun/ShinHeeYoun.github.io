// Whether a click landed on the bare background of the page, as opposed to on something the reader can use or read.
// A click on a link, a button, a picture, text, a card (anything with a color or a border of its own) is the
// reader's business; only a click on nothing at all is free to be played with. The page margins on a wide screen,
// and the gaps between things on a narrow one, are such places.

export type NodeLike = { nodeType: number; textContent: string | null }
export type ElementLike = {
  tagName: string
  parentElement: ElementLike | null
  childNodes: ArrayLike<NodeLike>
  getAttribute(name: string): string | null
}
export type StyleLike = {
  backgroundColor: string
  backgroundImage: string
  borderTopWidth: string
  borderRightWidth: string
  borderBottomWidth: string
  borderLeftWidth: string
}

// Things that do something, or show something, whatever their style.
const CONTENT_TAGS = new Set([
  'A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'OPTION', 'LABEL', 'SUMMARY', 'DETAILS',
  'IMG', 'SVG', 'CANVAS', 'VIDEO', 'AUDIO', 'IFRAME', 'OBJECT', 'EMBED', 'TABLE', 'PRE',
])
const TEXT_NODE = 3

const isClear = (color: string) => color === '' || color === 'transparent' || /,\s*0\)$/.test(color) || /\/\s*0\)$/.test(color)
const hasWidth = (width: string) => parseFloat(width) > 0

// A box that is drawn: it has a background color or picture, or a border.
export function isPainted(style: StyleLike): boolean {
  return (
    !isClear(style.backgroundColor) ||
    (style.backgroundImage !== '' && style.backgroundImage !== 'none') ||
    hasWidth(style.borderTopWidth) ||
    hasWidth(style.borderRightWidth) ||
    hasWidth(style.borderBottomWidth) ||
    hasWidth(style.borderLeftWidth)
  )
}

function hasOwnText(element: ElementLike): boolean {
  for (let i = 0; i < element.childNodes.length; i += 1) {
    const node = element.childNodes[i]
    if (node.nodeType === TEXT_NODE && (node.textContent ?? '').trim() !== '') return true
  }
  return false
}

// True when nothing from the clicked element up to the page is content. The page itself (<html>, <body>) is the
// background, so it is not looked at.
export function isBlankArea(target: ElementLike, styleOf: (element: ElementLike) => StyleLike): boolean {
  for (let element: ElementLike | null = target; element; element = element.parentElement) {
    const tag = element.tagName.toUpperCase()
    if (tag === 'BODY' || tag === 'HTML') break
    if (CONTENT_TAGS.has(tag)) return false
    const role = element.getAttribute('role')
    if (role && role !== 'presentation' && role !== 'none') return false
    if (element.getAttribute('tabindex') !== null || element.getAttribute('contenteditable') !== null) return false
    if (hasOwnText(element)) return false
    if (isPainted(styleOf(element))) return false
  }
  return true
}
