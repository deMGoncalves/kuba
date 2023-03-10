import './style'
import { setDescription } from '../../../.prelude/pixel/description/src'
import h from '@kuba/h'
import text from '@kuba/text'

function component () {
  setDescription(component.description)
  return (
    <text.H2 className='login__description' master dark xxs>{component.description}</text.H2>
  )
}

Object.assign(component, {
  description: 'Welcome back! Please enter your details'
})

export default component
