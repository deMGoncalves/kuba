import h from '@kuba/h'
import icon from '@kuba/icon'
import link from '@kuba/link'
import Picture from '@kuba/picture'
import style from './style'

export default (thumbnail) =>
  <section className={style.thumbnail} onClick={() => thumbnail.redirect()}>
    <Picture className={style.thumbnail__picture} alt={thumbnail.nome}>
      <source srcSet={thumbnail.logo} />
    </Picture>
    <div className={style.thumbnail__div}>
      <link.Master className={style.thumbnail__link} href={thumbnail.site} target='_black' dark xxxs medium>
        Site oficial
        <icon.ArrowLongRight />
      </link.Master>
    </div>
  </section>
