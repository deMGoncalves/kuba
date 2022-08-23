import * as f from '@kuba/f'
import h from '@kuba/h'
import i18n from './i18n'
import icon from '@kuba/icon'
import link from '@kuba/link'
import style from './style'

const valid = f.dunder('valid')

const component = (footer) =>
  <footer className={style.footer} valid:isTruthy={valid(footer)}>
    <link.Master className={style.footer__link} href={footer.href} onClick={() => footer.redirect()} darker xxxs bold>
      {i18n.text}
      <icon.ArrowLongRight />
    </link.Master>
  </footer>

f.assign(component, {
  valid: f.dunder.valid
})

export default component
