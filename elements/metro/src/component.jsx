import h from '@kuba/h'
import style from './style.css'

export default (props, children) =>
  <div {...props} className={[style.metro, props.className]}>
    <div className={style.metro__container}>
      {children}
    </div>
  </div>
