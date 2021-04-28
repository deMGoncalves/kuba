import h from '@kuba/h'
import Link from '@kuba/link'
import { urlFor } from '@kuba/router'
import style from './style.css'

export default (props) =>
  <nav className={[style.nav, props.className]}>
    <Link className={style.nav__link} href={urlFor('home')}>Home</Link>
    <Link className={style.nav__link} href={urlFor('mindset')}>Mindset</Link>
    <Link className={style.nav__link} href={urlFor('patterns')}>Patterns</Link>
    <Link className={style.nav__link} href={urlFor('structure')}>Structure</Link>
    <Link className={style.nav__link} href={urlFor('components')}>Components</Link>
  </nav>
