import * as f from '@kuba/f'

export default (shelf) =>
  shelf.query && (
    fetch(
      `${__settings.api.host}/report/search`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: shelf.query })
      }
    )
      .then(response => response.json())
      .then(f.prop('response'))
      .then(snapshot => shelf.change(snapshot))
  )
