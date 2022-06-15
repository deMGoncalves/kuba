import * as f from '@kuba/f'
import h, { Fragment } from '@kuba/h'
import link from '@kuba/link'
import Show from '@kuba/show'
import style from './style'
import text from '@kuba/text'

const showPrefix = f.dunder('showPrefix')

const component = (path) =>
  <>
    <Show when={showPrefix(path)}>
      <text.Span master xxxs bold>/</text.Span>
    </Show>
    <link.Master className={style.path} onClick={() => path.redirect()} href={path.href} xxxs>{path.title}</link.Master>
  </>

f.assign(component, {
  showPrefix: f.dunder.showPrefix
})

export default component
