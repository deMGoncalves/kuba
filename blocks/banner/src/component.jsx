import h from '@kuba/h'
import * as f from '@kuba/f'
import button from '@kuba/button'
import Container from '@kuba/container'
import Picture from '@kuba/picture'
import Show from '@kuba/show'
import Sources from '@kuba/sources'
import text from '@kuba/text'
import style from './style'

export default (banner) =>
  <section className={[style.banner, banner.className]}>
    <Container className={style.banner__container}>
      <figure className={style.banner__figure}>
        <Picture className={style.banner__picture} alt={banner.title}>
          <Show when={f.len(banner.thumbnails)}>
            <Sources thumbnails={banner.thumbnails} />
          </Show>
        </Picture>
        <figcaption className={style.banner__figcaption}>
          <hgroup className={style.banner__hgroup}>
            <text.H2 className={style.banner__text} master darker sm medium>{banner.title}</text.H2>
            <text.P className={style.banner__text} master xxxs>{banner.description}</text.P>
          </hgroup>
          <button.Master className={style.banner__button} onClick:stop={() => banner.redirect()} master>{banner.cta}</button.Master>
        </figcaption>
      </figure>
    </Container>
  </section>
