import h from '@h'
import manifest from './manifest.json'

export default () =>
  document.head.appendChild(<link href={manifest} rel='manifest' />)
