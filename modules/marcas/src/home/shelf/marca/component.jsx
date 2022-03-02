import h from '@kuba/h'
import link from '@kuba/link'
import Picture from '@kuba/picture'
import Show from '@kuba/show'
import style from './style'

export default (marca) =>
  <section className={style.marca} onClick={() => marca.redirect()}>
    <Picture className={style.marca__picture} alt={marca.nome}>
      <Show when={marca.logo}>
        <source srcSet={marca.logo} />
      </Show>
    </Picture>
    <div className={style.marca__div}>
      <link.Master className={style.marca__link} href={marca.href} darker xxxs medium>{marca.nome}</link.Master>
    </div>
  </section>
