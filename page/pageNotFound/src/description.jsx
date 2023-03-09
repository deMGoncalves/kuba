import './style'
import { setDescription } from '@kuba/description'
import h from '@kuba/h'
import text from '@kuba/text'

function component () {
  setDescription(component.description)
  return (
    <text.H2 className='pageNotFound__description' master dark xxs>{component.description}</text.H2>
  )
}

Object.assign(component, {
  description: '404 error'
})

export default component
