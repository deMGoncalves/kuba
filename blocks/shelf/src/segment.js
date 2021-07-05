import * as f from '@kuba/f'

export default (shelf) =>
  shelf.segment && (
    fetch(
      `${__settings.api.host}/report/property`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page: 0, segment: shelf.segment })
      }
    )
      .then(response => response.json())
      .then(f.prop('response'))
      .then(snapshot => shelf.change(snapshot))
  )
