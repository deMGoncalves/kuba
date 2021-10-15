import h from '@kuba/h'
import style from './style'

export default (cover) =>
  <section className={[style.cover, cover.className]} />
