import h from '@kuba/h'
import Metro from '@kuba/metro'
import Repeat from '@kuba/repeat'
import Story from '@kuba/story'
import text from '@kuba/text'
import Category from './category'
import style from './style'

export default (navigation) =>
  <Story className={[style.navigation, navigation.className]}>
    <text.H2 className={style.inspiration__h2} master darker sm medium>{navigation.title}</text.H2>
    <Metro className={style.exploration__metro}>
      <Repeat iterator={navigation.categories} component={Category} />
    </Metro>
  </Story>
