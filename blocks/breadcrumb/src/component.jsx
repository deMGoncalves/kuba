import h, { Repeat } from '@kuba/h'
import { urlFor } from '@kuba/router'
import Container from '@kuba/container'
import link from '@kuba/link'
import Metro from '@kuba/metro'
import Path from './path'
import style from './style.css'

export default (props, children) =>
  <section className={[style.breadcrumb, props.className]}>
    <Container className={style.breadcrumb__container}>
      <Metro className={style.breadcrumb__metro}>
        <div className={style.breadcrumb__div}>
          <link.Master className={style.breadcrumb__link} href={urlFor('home')} small>Home</link.Master>
          <Repeat iterator={children} component={Path} />
        </div>
      </Metro>
    </Container>
  </section>
