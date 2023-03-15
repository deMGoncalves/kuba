import './style'
import { setTitle } from '@kuba/title'
import h from '@kuba/h'
import text from '@kuba/text'

function component () {
  setTitle(component.title)
  return (
    <text.H1 className='checkYourEmail__title' master darker highlight md bold>{component.title}</text.H1>
  )
}

Object.assign(component, {
  title: 'Check your email'
})

export default component
