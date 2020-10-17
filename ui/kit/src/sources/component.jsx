import h, { Fragment } from '@rex/h'
import * as f from '@rex/f'

export default (props) =>
  <Fragment slot={props.slot}>
    <source srcSet={f.prop('[0]', props.thumbnails)} media='(max-width: 767px)' />
    <source srcSet={f.prop('[1]', props.thumbnails)} media='(min-width: 768px) and (max-width: 959px)' />
    <source srcSet={f.prop('[2]', props.thumbnails)} media='(min-width: 960px)' />
  </Fragment>
