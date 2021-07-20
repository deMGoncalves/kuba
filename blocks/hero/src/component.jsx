import h from '@kuba/h'
import Container from '@kuba/container'
import button from '@kuba/button'
import Picture from '@kuba/picture'
import Sources from '@kuba/sources'
import text from '@kuba/text'
import style from './style.css'

export default (props) =>
  <section className={[style.hero, props.className]}>
    <Container className={style.hero__container}>
      <figure className={style.hero__figure}>
        <Picture className={style.hero__picture} alt={props.title}>
          <Sources thumbnails={props.thumbnails} />
        </Picture>
        <figcaption className={style.hero__figcaption}>
          <hgroup className={style.hero__hgroup}>
            <text.H1 className={style.hero__text} master darker large>{props.title}</text.H1>
            <text.P className={style.hero__text} master small>{props.description}</text.P>
          </hgroup>
          <button.Master className={style.hero__button} master>{props.cta}</button.Master>
        </figcaption>
      </figure>
    </Container>
  </section>
