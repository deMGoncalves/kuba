import h from '@h'
import Container from '@/container'
import Link from '@/link'
import style from './style.css'

const component = () =>
  <header className={style.back}>
    <Container>
      <Link href='/'>
        <i className={[style.back__icon, 'material-icons']}>keyboard_backspace</i> Home
      </Link>
    </Container>
  </header>

export default component
