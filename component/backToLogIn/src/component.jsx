import './style'
import { urlFor } from '@kuba/router'
import h from '@kuba/h'
import Icon from '@kuba/icon'
import text from '@kuba/text'

function component () {
  return (
    <text.A className='backToLogIn' master dark xxs medium href={urlFor('logIn')}>
      <Icon>keyboard_backspace</Icon> Back to log in
    </text.A>
  )
}

export default component
