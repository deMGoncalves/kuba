import h from '@kuba/h'
import style from './style'

export default (_props, children) =>
  <div className={style.metro}>
    <div className={style.metro__container}>
      {children}
    </div>
  </div>
