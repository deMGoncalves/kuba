import h from '@kuba/h'
import Container from '@kuba/container'
import button from '@kuba/button'
import Picture from '@kuba/picture'
import Sources from '@kuba/sources'
import text from '@kuba/text'
import schema from './schema'
import style from './style.css'

export default (props) =>
  <section {...props} className={[style.hero, props.className]}>
    <Container className={style.hero__container}>
      <figure className={style.hero__figure}>
        <Picture className={style.hero__picture} alt={schema.title}>
          <Sources thumbnails={schema.thumbnails} />
        </Picture>
        <figcaption className={style.hero__figcaption}>
          <hgroup className={style.hero__hgroup}>
            <text.H1 className={style.hero__text} master darker large>{schema.title}</text.H1>
            <text.P className={style.hero__text} master small>{schema.description}</text.P>
          </hgroup>
          <button.Master className={style.hero__button} master>confira</button.Master>
        </figcaption>
      </figure>
    </Container>
  </section>
