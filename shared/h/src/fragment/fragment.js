import * as f from '@rex/f'
import appendChildren from '@rex/h/src/h/appendChildren'
import extendAttributes from './extendAttributes'

export default async (props, children) =>
  Promise.resolve(appendChildren(f.flatten(await Promise.all(children)), extendAttributes(props, document.createDocumentFragment())))
