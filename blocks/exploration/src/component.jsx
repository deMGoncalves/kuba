import h from '@kuba/h'
import Repeat from '@kuba/repeat'
import Story from '@kuba/story'
import text from '@kuba/text'
import Departament from './departament'
import style from './style'

export default (exploration) =>
  <Story className={[style.exploration, exploration.className]}>
    <text.H2 className={style.exploration__h2} master darker sm medium>{exploration.title}</text.H2>
    <div className={style.exploration__div}>
      <Repeat iterator={exploration.departaments} component={Departament} />
    </div>
  </Story>
