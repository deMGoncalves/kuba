import h from '@kuba/h'
import icon from '@kuba/icon'
import style from './style'

export default (props) =>
  <form className={[style.form, props.className]} action={props.action}>
    <input className={style.form__input} autocomplete='off' name='q' placeholder={props.placeholder} type='search' />
    <button className={style.form__button}>
      <icon.Search className={style.form__icon} alt='search' />
    </button>
  </form>
