import * as f from '@kuba/f'
import h from '@kuba/h'
import style from './style'
import text from '@kuba/text'

const visible = f.dunder('visible')

const component = (more) =>
  <text.Button
    className={style.more}
    onClick={() => more.onClick()}
    visible={visible(more)}
    master
    darker
    xxxs
    bold>
    {more.text}
  </text.Button>

f.assign(component, {
  visible: f.dunder.visible
})

export default component
