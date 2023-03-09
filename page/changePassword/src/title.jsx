import './style'
import { setTitle } from '@kuba/title'
import h from '@kuba/h'
import text from '@kuba/text'

function component () {
  setTitle(component.title)
  return (
    <text.H1 master dark md highlight bold>{component.title}</text.H1>
  )
}

Object.assign(component, {
  title: 'Password'
})

export default component
