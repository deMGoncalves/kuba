import h from '@kuba/h'
import Container from '@kuba/container'
import text from '@kuba/text'
import schema from './schema.json'
import style from './style'

export default (props) =>
  <header className={[style.header, props.className]}>
    <Container className={style.header__container}>
      <text.H1 className={style.header__h1} master dark display medium>{schema.title}</text.H1>
    </Container>
  </header>
