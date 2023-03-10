import './style'
import { setDescription } from '../../../.prelude/pixel/description/src'
import h from '@kuba/h'
import Email from './email'
import text from '@kuba/text'

function component () {
  setDescription(component.description)
  return (
    <text.H2 className='checkYourEmail__description' master dark xxs>
      {component.description}<br />
      <Email />
    </text.H2>
  )
}

Object.assign(component, {
  description: 'We sent a password reset link to'
})

export default component
