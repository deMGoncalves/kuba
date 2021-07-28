import h from '@kuba/h'
import Container from '@kuba/container'
import style from './style'

export default (props, children) =>
  <section {...props} className={[style.story, props.className]}>
    <Container className={style.container}>
      {children}
    </Container>
  </section>
