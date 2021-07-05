import * as f from '@kuba/f'

export default (shelf) =>
  f.and(
    f.isNil(shelf.query),
    f.isNil(shelf.universe),
    f.isNil(shelf.category),
    f.isNil(shelf.segment)
  ) && (
    fetch(`${__settings.api.host}/report/recent`)
      .then(response => response.json())
      .then(f.prop('response'))
      .then(snapshot => shelf.change(snapshot))
  )
