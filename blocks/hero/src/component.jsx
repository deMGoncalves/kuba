import h from '@kuba/h'
import Container from '@kuba/container'
import button from '@kuba/button'
import Picture from '@kuba/picture'
import Sources from '@kuba/sources'
import text from '@kuba/text'
import style from './style'

export default (hero) =>
  <section className={[style.hero, hero.className]}>
    <Container className={style.hero__container}>
      <figure className={style.hero__figure}>
        <Picture className={style.hero__picture} alt={hero.title}>
          <Sources thumbnails={hero.thumbnails} />
        </Picture>
        <figcaption className={style.hero__figcaption}>
          <hgroup className={style.hero__hgroup}>
            <text.H1 className={style.hero__text} master darker sm medium>{hero.title}</text.H1>
            <text.P className={style.hero__text} master xxxs>{hero.description}</text.P>
          </hgroup>
          <button.Master className={style.hero__button}>{hero.cta}</button.Master>
        </figcaption>
      </figure>
    </Container>
  </section>
