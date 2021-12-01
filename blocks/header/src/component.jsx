import h from '@kuba/h'
import { urlFor } from '@kuba/router'
import button from '@kuba/button'
import container from '@kuba/container'
import Hide from '@kuba/hide'
import link from '@kuba/link'
import Logo from '@kuba/logo'
import Show from '@kuba/show'
import style from './style'

export default (header) =>
  <header className={[style.header, header.className]}>
    <container.Div className={style.header__container}>
      <Logo />
      <nav className={style.header__nav} opened:isTruthy={header.opened}>
        <link.Master className={style.header__link} href={urlFor('about')} darker medium>sobre</link.Master>
        <link.Master className={style.header__link} href={urlFor('introduction')} darker medium>introducao</link.Master>
        <link.Master className={style.header__link} href={urlFor('designSystem')} darker medium>design system</link.Master>
        <link.Master className={style.header__link} href={urlFor('components')} darker medium>componentes</link.Master>
        <link.Master className={style.header__link} href={urlFor('arquiteture')} darker medium>arquitetura</link.Master>
      </nav>
      <Hide when={header.opened}>
        <button.icon.Menu className={style.header__button} onClick={() => header.open()} />
      </Hide>
      <Show when={header.opened}>
        <button.icon.Close className={style.header__button} onClick={() => header.close()} />
      </Show>
    </container.Div>
  </header>
