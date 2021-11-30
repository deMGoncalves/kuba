import h from '@kuba/h'
import button from '@kuba/button'
import container from '@kuba/container'
import icon from '@kuba/icon'
import Logo from '@kuba/logo'
import style from './style'

export default (props) =>
  <header className={[style.header, props.className]}>
    <container.Div className={style.header__container}>
      <Logo />
      <button.Icon>
        <icon.Menu />
      </button.Icon>
    </container.Div>
  </header>
