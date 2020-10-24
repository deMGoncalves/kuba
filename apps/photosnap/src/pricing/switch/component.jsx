import h from '@rex/h'
import style from './style.css'

const toggle = () => {
  const markup = document.querySelector('[data-pricing]')

  return (markup.dataset.pricing === 'month')
    ? markup.setAttribute('data-pricing', 'year')
    : markup.setAttribute('data-pricing', 'month')
}

export default (props) =>
  <header className={[style.switch, props.className]}>
    <data value='Monthly' className={style.switch__monthly}>Monthly</data>
    <label className={style.switch__label}>
      <input className={style.switch__check} type='checkbox' onChange={() => toggle()} />
      <span className={style.switch__slider} />
    </label>
    <data value='Yearly' className={style.switch__yearly}>Yearly</data>
  </header>
