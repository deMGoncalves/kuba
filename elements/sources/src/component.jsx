import h, { Fragment } from '@rex/htmlparser'
import * as f from '@rex/f'

export default ({ thumbnails: [mobile, tablet, desktop] }) =>
  <>
    <source srcSet={f.or(mobile, tablet, desktop)} media='(max-width: 767px)' />
    <source srcSet={f.or(tablet, mobile, desktop)} media='(min-width: 768px) and (max-width: 959px)' />
    <source srcSet={f.or(desktop, tablet, mobile)} media='(min-width: 960px)' />
  </>
