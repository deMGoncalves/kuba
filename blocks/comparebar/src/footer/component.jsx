// import * as f from '@kuba/f'
import { component } from '@kuba/marionette'
import h from '@kuba/h'
import i18n from './i18n'
import icon from '@kuba/icon'
import link from '@kuba/link'
import style from './style'

// const href = f.dunder('href')
// const valid = f.dunder('valid')

// const component = (footer) =>
export default component((footer) => (
  <footer className={style.footer} valid={footer.valid}>
    <link.Master className={style.footer__link} onClick={() => footer.redirect()} darker xxxs bold>
      {i18n.text}
      <icon.ArrowLongRight />
    </link.Master>
  </footer>
))

// f.assign(component, {
//   href: f.dunder.href,
//   valid: f.dunder.valid
// })

// export default component
