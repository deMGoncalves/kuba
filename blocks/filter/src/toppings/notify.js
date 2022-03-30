import echo from '@kuba/echo'

export default (key, topping) =>
  echo.emit('filter:change', {
    key,
    value: topping.selected
  })
