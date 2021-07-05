import h from '@kuba/h'
import button from '@kuba/button'
import Container from '@kuba/container'
import Picture from '@kuba/picture'
import Sources from '@kuba/sources'
import text from '@kuba/text'
import schema from './schema.json'
import style from './style.css'

export default (props) =>
  <section {...props} className={[style.banner, props.className]}>
    <Container className={style.banner__container}>
      <figure className={style.banner__figure}>
        <Picture className={style.banner__picture}>
          <Sources thumbnails={schema.thumbnails} slot='sources' />
        </Picture>
        <figcaption className={style.banner__figcaption}>
          <text.H2 className={style.banner__h2} slot='caption' master darker>{schema.title}</text.H2>
          <button.Master className={style.banner__button} slot='caption' master>Confira</button.Master>
        </figcaption>
      </figure>
    </Container>
  </section>
