import h from '@kuba/h'
import link from '@kuba/link'
import style from './style.css'

export default (props) =>
  <darlings {...props} className={[style.darlings, props.className]}>
    <link.Master className={style.darlings__link} href='//blogusefashion.wpcomstaging.com/blog' master small>Blog</link.Master>
  </darlings>
