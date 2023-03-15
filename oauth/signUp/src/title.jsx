import './style'
import { setTitle } from '@kuba/title'
import h from '@kuba/h'
import text from '@kuba/text'

function component () {
  setTitle(component.title)
  return (
    <text.H1 className='createanaccount__title' master dark highlight md bold>{component.title}</text.H1>
  )
}

Object.assign(component, {
  title: 'Create an account'
})

export default component
