import h from '@kuba/h'
import Banner from '@kuba/banner'
import style from './style'

export default (props) =>
  <Banner className={[style.banner, props.className]} />
