import { after } from '@kuba/middleware'
import echo from '@kuba/echo'

const change = (key) =>
  after(function (output) {
    echo.emit('filter:change', {
      key,
      value: this.selected
    })
    return [output]
  })

export default {
  change
}
