import h, { Fragment } from '@kuba/h'
import * as f from '@kuba/f'
import { urlFor } from '@kuba/router'
import link from '@kuba/link'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (path) =>
  <>
    <Show when={f.isTruthy(path.index)}>
      <text.Span master xxxs bold>/</text.Span>
    </Show>
    <link.Master className={style.path} href={urlFor(path.page, path.params)} xxxs>{path.title}</link.Master>
  </>
