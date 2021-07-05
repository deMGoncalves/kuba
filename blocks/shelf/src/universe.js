import * as f from '@kuba/f'

export default (shelf) =>
  f.gte(shelf.universe, 0) && (
    fetch(
      `${__settings.api.host}/report/property`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page: 0, topic: shelf.universe })
      }
    )
      .then(response => response.json())
      .then(f.prop('response'))
      .then(snapshot => shelf.change(snapshot))
  )
