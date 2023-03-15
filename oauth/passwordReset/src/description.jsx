import './style'
import { setDescription } from '@kuba/description'
import h from '@kuba/h'
import text from '@kuba/text'

function component () {
  setDescription(component.description)
  return (
    <text.H2 className='passwordReset__description' master dark xxs>{component.description}</text.H2>
  )
}

Object.assign(component, {
  description: 'Your password has been successfully reset. Click below to log in magically'
})

export default component
