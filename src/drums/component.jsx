import h from '@h'
import style from './style.css'

const rack = Symbol('rack')

const component = () =>
  <div className={style.keys}>
    <div data-key='65' className={style.key}>
      <kbd>A</kbd>
      <span className={style.sound}>clap</span>
    </div>
    <div data-key='83' className={style.key}>
      <kbd>S</kbd>
      <span className={style.sound}>hihat</span>
    </div>
    <div data-key='68' className={style.key}>
      <kbd>D</kbd>
      <span className={style.sound}>kick</span>
    </div>
    <div data-key='70' className={style.key}>
      <kbd>F</kbd>
      <span className={style.sound}>openhat</span>
    </div>
    <div data-key='71' className={style.key}>
      <kbd>G</kbd>
      <span className={style.sound}>boom</span>
    </div>
    <div data-key='72' className={style.key}>
      <kbd>H</kbd>
      <span className={style.sound}>ride</span>
    </div>
    <div data-key='74' className={style.key}>
      <kbd>J</kbd>
      <span className={style.sound}>snare</span>
    </div>
    <div data-key='75' className={style.key}>
      <kbd>K</kbd>
      <span className={style.sound}>tom</span>
    </div>
    <div data-key='76' className={style.key}>
      <kbd>L</kbd>
      <span className={style.sound}>tink</span>
    </div>
  </div>

export default component
export {
  rack
}
