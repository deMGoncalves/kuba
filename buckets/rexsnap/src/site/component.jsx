import h from '@rex/h'
import * as ui from '@ui'
import style from './style.css'

export default (site, children) =>
  <main className={[style.template, site.className]}>
    <ui.Header />
    {children}
    <ui.Footer />
  </main>
