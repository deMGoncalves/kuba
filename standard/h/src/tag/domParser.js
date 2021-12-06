import * as f from '@kuba/f'

export default (element) =>
  f.is(DocumentFragment, element)
    ? [...element.childNodes]
    : [element]
