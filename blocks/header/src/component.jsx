import h from '@kuba/h'
import { urlFor } from '@kuba/router'
import button from '@kuba/button'
import container from '@kuba/container'
import link from '@kuba/link'
import Logo from '@kuba/logo'
import style from './style'

export default (header) =>
  <header className={[style.header, header.className]}>
    <container.Div className={style.header__container}>
      <Logo />
      <nav className={style.header__nav} opened:isTruthy={header.opened}>
        <link.Master href={urlFor('about')} darker medium xxs>sobre</link.Master>
        <link.Master href={urlFor('introduction')} darker medium xxs>introducao</link.Master>
        <link.Master href={urlFor('designSystem')} darker medium xxs>design system</link.Master>
        <link.Master href={urlFor('components')} darker medium xxs>componentes</link.Master>
        <link.Master href={urlFor('arquiteture')} darker medium xxs>arquitetura</link.Master>
      </nav>
      <button.icon.Menu className={style.header__button} onClick={() => header.toggle()} />
    </container.Div>
  </header>
