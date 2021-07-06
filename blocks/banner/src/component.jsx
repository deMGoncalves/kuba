import h from '@kuba/h'
import button from '@kuba/button'
import Container from '@kuba/container'
import Picture from '@kuba/picture'
import Sources from '@kuba/sources'
import text from '@kuba/text'
import schema from './schema'
import style from './style.css'

export default (props) =>
  <section {...props} className={[style.banner, props.className]}>
    <Container className={style.banner__container}>
      <figure className={style.banner__figure}>
        <Picture className={style.banner__picture} alt={schema.title}>
          <Sources thumbnails={schema.thumbnails} />
        </Picture>
        <figcaption className={style.banner__figcaption}>
          <hgroup className={style.banner__hgroup}>
            <text.H2 className={style.banner__text} master darker large>{schema.title}</text.H2>
            <text.P className={style.banner__text} master small>{schema.description}</text.P>
          </hgroup>
          <button.Master className={style.banner__button} master>Confira</button.Master>
        </figcaption>
      </figure>
    </Container>
  </section>
