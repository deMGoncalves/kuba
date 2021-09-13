import * as f from '@kuba/f'
import media from '@kuba/media'
import schedule from '@kuba/schedule'
import * as settings from '@kuba/settings'

const getData = (nav) =>
  media('(max-width: 960px)')
    .in(f.once(() =>
      fetch(`${settings.api.host}/blocks/header`)
        .then(response => response.json())
        .then(data => nav.change(data))
    ))

export default schedule(getData)
