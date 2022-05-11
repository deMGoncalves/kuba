import * as f from '@kuba/f'
import { args } from '@kuba/router'
import lang, { key } from '@kuba/lang'

f.and(
  args.lang,
  f.not(localStorage.getItem(key))
) && (
  lang.changeTo(lang.value)
)
