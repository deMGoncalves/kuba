import './style'
import { setTitle } from '../../../.prelude/pixel/title/src'
import h from '@kuba/h'
import text from '@kuba/text'

function component () {
  setTitle(component.title)
  return (
    <text.H1 className='login__title' master dark highlight md bold>{component.title}</text.H1>
  )
}

Object.assign(component, {
  title: 'Log in to your account'
})

export default component
