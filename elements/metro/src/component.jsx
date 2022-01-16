import h from '@kuba/h'
import style from './style'

export default (props, children) =>
  <div className={[style.metro, props.className]}>
    <div className={style.metro__container}>
      {children}
    </div>
  </div>
