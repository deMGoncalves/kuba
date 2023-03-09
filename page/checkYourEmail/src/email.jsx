import { args } from '@kuba/router'
import h from '@kuba/h'
import text from '@kuba/text'

function component () {
  return (
    <text.Strong master dark xxs medium>{args.email}</text.Strong>
  )
}

export default component
