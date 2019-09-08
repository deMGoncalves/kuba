import h from '@h'
import Back from '@/back'
import Container from '@/container'
import Link from '@/link'
import style from './style.css'

const component = () =>
  <main>
    <Back />
    <Container type='fit'>
      <Link className={style.contact__email}>cleber.engineer@hotmail.com</Link>
    </Container>
  </main>

export default component
