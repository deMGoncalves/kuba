import h from '@kuba/h'
import style from './style'

export default (splash) =>
  <iframe className={[style.splash, splash.className]} src={splash.url} />
