import * as f from '@kuba/f'
import h, { Fragment } from '@kuba/h'

export default ({ thumbnails: [mobile, tablet, desktop] = [], slot }) =>
  <Fragment slot={slot}>
    <source srcSet={f.or(mobile, tablet, desktop)} media='(max-width: 768px)' />
    <source srcSet={f.or(tablet, mobile, desktop)} media='(min-width: 769px) and (max-width: 960px)' />
    <source srcSet={f.or(desktop, tablet, mobile)} media='(min-width: 961px)' />
  </Fragment>
