import './cron'
import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'

export default (lazy) =>
  <>
    <Show when={lazy.component}><lazy.component /></Show>
    <Hide when={lazy.component}><div is='lazy-cron' data-channel={lazy.channel} /></Hide>
  </>
