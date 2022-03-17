import * as f from '@kuba/f'
import h, { Fragment } from '@kuba/h'
import link from '@kuba/link'
import Show from '@kuba/show'
import style from './style'
import text from '@kuba/text'

export default (path) =>
  <>
    <Show when={f.isTruthy(path.index)}>
      <text.Span master xxxs bold>/</text.Span>
    </Show>
    <link.Master className={style.path} onClick={() => path.redirect()} href={path.href} xxxs>{path.title}</link.Master>
  </>
