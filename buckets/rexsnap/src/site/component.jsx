import h from '@rex/h'
import * as ui from '@ui'

export default (site, children) =>
  <ui.Template className={site.className}>
    {children}
  </ui.Template>
