import h from '@kuba/h'
import Banner from '@kuba/banner'
import schema from './schema'
import style from './style.css'

export default (props) =>
  <Banner {...schema} className={[style.banner, props.className]} />
