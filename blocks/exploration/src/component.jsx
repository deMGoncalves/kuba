import h, { Repeat } from '@kuba/h'
import Metro from '@kuba/metro'
import Story from '@kuba/story'
import text from '@kuba/text'
import Departament from './departament'
import schema from './schema'
import style from './style.css'

export default (props) =>
  <Story {...props} className={[style.exploration, props.className]}>
    <text.H2 className={style.exploration__h2} master darker large>{schema.title}</text.H2>
    <Metro className={style.exploration__main}>
      <Repeat iterator={schema.departaments} component={Departament} />
    </Metro>
  </Story>
