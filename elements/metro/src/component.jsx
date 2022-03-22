import h from '@kuba/h'
import style from './style'

export default (metro, children) =>
  <div className={[style.metro, metro.className]}>
    <div className={style.metro__container}>
      {children}
    </div>
  </div>
