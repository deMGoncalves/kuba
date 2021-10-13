import h from '@kuba/h'
import Picture from '@kuba/picture'
import text from '@kuba/text'
import style from './style'

export default (shield) =>
  <figure className={style.report__figure} alt={shield.title}>
    <Picture className={style.report__picture} circular>
      <source srcSet={shield.thumbnail} />
    </Picture>
    <figcaption className={style.report__figcaption}>
      <text.P className={style.report__p} master xxxs>
        <text.Strong className={style.report__strong} master dark xxxs medium>{shield.title}</text.Strong><br />
        {shield.description}
      </text.P>
    </figcaption>
  </figure>
