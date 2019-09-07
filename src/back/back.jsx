import h from '@h'
import Container from '@/container'
import style from './style.css'

const component = () =>
  <header className={style.back}>
    <Container>
      <a className={style.back__link} href='/'>
        <i className={[style.back__icon, 'material-icons']}>keyboard_backspace</i> Home
      </a>
    </Container>
  </header>

export default component
