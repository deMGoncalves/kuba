import './style'
import { setDescription } from '@kuba/description'
import h from '@kuba/h'
import text from '@kuba/text'

function component () {
  setDescription(component.description)
  return (
    <text.H2 className='forgotPassword__description' master dark xxs>{component.description}</text.H2>
  )
}

Object.assign(component, {
  description: 'No worries, we\'ll send you reset instructions'
})

export default component
