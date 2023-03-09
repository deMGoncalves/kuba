import './style'
import { setDescription } from '@kuba/description'
import h from '@kuba/h'
import text from '@kuba/text'

function component () {
  setDescription(component.description)
  return (
    <text.H2 className='createanaccount__description' master dark xxs>{component.description}</text.H2>
  )
}

Object.assign(component, {
  description: 'Start your 30-day free trial'
})

export default component
