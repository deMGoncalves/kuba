import h, { Fragment } from '@kuba/h'
import icon from '@kuba/icon'
import style from './style.css'

export default (child) =>
  <>
    <icon.AngleRight className={style.breadcrumb__icon} />
    {child}
  </>
