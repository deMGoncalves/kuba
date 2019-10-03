import h from '@h'
import style from './style.css'

const rack = Symbol('rack')

const component = (drums) =>
  <main className={style.drums}>
    { drums[rack] }
  </main >

export default component
export {
  rack
}
