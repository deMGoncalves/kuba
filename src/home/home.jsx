import h from '@h'
import RexJS from '../favicon.png'
import style from './style.css'

const component = () =>
  <main className={style.home} itemScope itemType='https://schema.org/Organization'>
    <a className={style.home__link} href='/' itemProp='url'>
      <img className={style.home__logo} src={RexJS} alt='Rex.JS' itemProp='logo' />
      <h1 itemProp='name'>Rex.JS</h1>
      <p itemProp='description'>Simples, pequeno e imperfeito. Uma visão além da programação</p>
    </a>
  </main>

export default component
