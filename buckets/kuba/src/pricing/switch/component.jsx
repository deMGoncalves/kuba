import h from '@rex/h'
import style from './style.css'

// const toggle = () => {
//   const markup = document.querySelector('[data-pricing]')

//   return (markup.dataset.pricing === 'month')
//     ? markup.setAttribute('data-pricing', 'year')
//     : markup.setAttribute('data-pricing', 'month')
// }

export default ({ onChange }) =>
  <label className={style.switch__label}>
    <input className={style.switch__check} type='checkbox' onChange={onChange} />
    <span className={style.switch__slider} />
  </label>
