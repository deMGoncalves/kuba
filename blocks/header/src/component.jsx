import h from '@kuba/h'
import container from '@kuba/container'
import Logo from '@kuba/logo'
import style from './style'

export default (props) =>
  <header className={[style.header, props.className]}>
    <container.Div className={style.header__container}>
      <Logo />
    </container.Div>
  </header>
