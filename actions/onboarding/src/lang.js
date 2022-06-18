import * as f from '@start/f'
import { args } from '@start/router'
import lang, { key } from '@start/lang'

const langNotDefined = () => (
  f.and(args.lang, f.not(localStorage.getItem(key)))
)

export default (next) => (
  langNotDefined() && (
    lang.changeTo(lang.value)
  ),

  next()
)
