import h from '@kuba/h'
import Container from '@kuba/container'
import text from '@kuba/text'
import style from './style'

export default (props, children) =>
  <section {...props} className={[style.title, props.className]}>
    <Container className={style.title__container}>
      <text.H1 className={style.title__h1} master darker bold>{children}</text.H1>
    </Container>
  </section>
