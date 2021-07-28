import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (control) =>
  <div className={[style.control, control.className]}>
    <text.Label className={style.control__label} for={control.id} master darker small>{control.label}</text.Label>
    <input className={style.control__input} id={control.id} name={control.name} type={control.type} />
  </div>
