import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'
import './cron'

export default (lazy) =>
  <Fragment slot={lazy.slot}>
    <Show when={lazy.component}><lazy.component { ...lazy.props } /></Show>
    <Hide when={lazy.component}><div is='lazy-cron' data-channel={lazy.channel} /></Hide>
  </Fragment>
