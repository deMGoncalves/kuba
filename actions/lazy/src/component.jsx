import h, { Fragment, Hide, Show } from '@kuba/h'
import './cron'

export default (lazy) =>
  <Fragment slot={lazy.slot}>
    <Show if={lazy.component}><lazy.component { ...lazy.props } /></Show>
    <Hide if={lazy.component}><div is='lazy-cron' data-channel={lazy.channel} /></Hide>
  </Fragment>
