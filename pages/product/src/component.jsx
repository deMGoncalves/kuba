import h, { Fragment } from '@kuba/h'
import Picture from '@kuba/picture'
import Site from '@kuba/site'
import Title from '@kuba/title'
import Breadcrumb from './breadcrumb'
import button from '@kuba/button'
import text from '@kuba/text'
import style from './style'

export default (product) =>
  <Site className={style.product}>
    <Fragment slot='hot'>
      <Title className={style.product__title}>{product.title}</Title>
      <Breadcrumb className={style.product__breadcrumb} />
      <div className={style.product__div}>
        <Picture className={style.product__picture} alt='imagem'>
          <source srcSet='kuba_48.png' />
        </Picture>
        <div>
          <text.P className={style.product__text} master darker sm medium>{product.description}</text.P>
          <button.Master className={style.banner__button} master>Comprar</button.Master>
        </div>
      </div>
    </Fragment>
  </Site>
