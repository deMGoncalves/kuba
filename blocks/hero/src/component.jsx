import h from '@kuba/h'
import Container from '@kuba/container'
import button from '@kuba/button'
import Picture from '@kuba/picture'
import Sources from '@kuba/sources'
import text from '@kuba/text'
import schema from './schema.json'
import style from './style.css'

export default (props) =>
  <section {...props} className={[style.hero, props.className]}>
    <Container className={style.hero__container}>
      <figure className={style.hero__figure}>
        <Picture className={style.hero__picture}>
          <Sources thumbnails={schema.thumbnails} slot='sources' />
        </Picture>
        <figcaption className={style.hero__figcaption}>
          <text.H1 className={style.hero__text} slot='caption' master darker>{schema.title}</text.H1>
          <button.Master className={style.hero__button} slot='caption' master>Confira</button.Master>
        </figcaption>
      </figure>
    </Container>
  </section>
