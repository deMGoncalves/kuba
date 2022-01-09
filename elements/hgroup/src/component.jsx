import h from '@kuba/h'
import * as f from '@kuba/f'
import Hide from '@kuba/hide'
import text from '@kuba/text'
import style from './style'

export default (props, children) =>
  <section {...props} className={[style.hgroup, props.className]}>
    <Hide when={f.isEmpty(children.title)}>
      <text.H1 className={style.hgroup__h1} highlight master dark bold>{children.title}</text.H1>
    </Hide>
    <Hide when={f.isEmpty(children.description)}>
      <text.P className={style.hgroup__p} master xxxs>{children.description}</text.P>
    </Hide>
  </section>
