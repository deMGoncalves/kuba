import h from '@kuba/h'
import Picture from '@kuba/picture'
import Repeat from '@kuba/repeat'
import Sources from '@kuba/sources'
import Story from '@kuba/story'
import text from '@kuba/text'
import Box from './box'
import style from './style'

export default (props) =>
  <Story className={[style.inspiration, props.className]}>
    <text.H2 className={style.inspiration__h2} master darker sm medium>{props.title}</text.H2>
    <div className={style.inspiration__main}>
      <Picture className={style.inspiration__picture}>
        <Sources thumbnails={props.thumbnails} />
      </Picture>
      <Repeat iterator={props.products} component={Box} />
    </div>
  </Story>
