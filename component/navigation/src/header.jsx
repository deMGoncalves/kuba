import './style'
import Close from '@kuba/close'
import h from '@kuba/h'
import Logomark from '@kuba/logomark'
import Navigation from './navigation'

function component () {
  return (
    <header className='navigation__header'>
      <Logomark />
      <Close onClick={() => Navigation.close()} />
    </header>
  )
}

export default component
