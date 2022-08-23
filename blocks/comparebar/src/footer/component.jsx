import * as f from '@kuba/f'
import h from '@kuba/h'
import i18n from './i18n'
import icon from '@kuba/icon'
import link from '@kuba/link'
import style from './style'

const href = f.dunder('href')
const valid = f.dunder('valid')

const component = (footer) =>
  <footer className={style.footer} valid:isTruthy={valid(footer)}>
    <link.Master className={style.footer__link} href={href(footer)} onClick={() => footer.redirect()} darker xxxs bold>
      {i18n.text}
      <icon.ArrowLongRight />
    </link.Master>
  </footer>

f.assign(component, {
  href: f.dunder.href,
  valid: f.dunder.valid
})

export default component
