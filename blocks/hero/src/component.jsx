import h from '@kuba/h'
import * as f from '@kuba/f'
import Container from '@kuba/container'
import button from '@kuba/button'
import Picture from '@kuba/picture'
import Show from '@kuba/show'
import Sources from '@kuba/sources'
import text from '@kuba/text'
import style from './style'

export default (hero) =>
  <section className={[style.hero, hero.className]}>
    <Container className={style.hero__container}>
      <figure className={style.hero__figure}>
        <Picture className={style.hero__picture} alt={hero.title}>
          <Show when={f.len(hero.thumbnails)}>
            <Sources thumbnails={hero.thumbnails} />
          </Show>
        </Picture>
        <figcaption className={style.hero__figcaption}>
          <hgroup className={style.hero__hgroup}>
            <text.H1 className={style.hero__text} master darker sm medium>{hero.title}</text.H1>
            <text.P className={style.hero__text} master dark xxxs>{hero.description}</text.P>
          </hgroup>
          <button.Primary className={style.hero__button} onClick:stop={() => hero.redirect()}>{hero.cta}</button.Primary>
        </figcaption>
      </figure>
    </Container>
  </section>
