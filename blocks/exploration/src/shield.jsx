import h from '@kuba/h'
import Picture from '@kuba/picture'
import Sources from '@kuba/sources'
import text from '@kuba/text'
import style from './style'

export default (shield) =>
  <figure className={style.exploration__figure} alt={shield.title}>
    <Picture className={style.exploration__picture}>
      <Sources thumbnails={shield.thumbnails} />
    </Picture>
    <figcaption className={style.exploration__figcaption}>
      <text.P className={style.exploration__p} master xxxs>
        <text.Strong className={style.exploration__strong} master dark xxxs medium>{shield.title}</text.Strong>
        {shield.description}
      </text.P>
    </figcaption>
  </figure>
