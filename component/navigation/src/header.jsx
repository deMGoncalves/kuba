import './style'
import Close from '@kuba/close'
import h from '@kuba/h'
import Navigation from './navigation'

function component () {
  return (
    <header className='navigation__header'>
      <Close onClick={() => Navigation.close()} />
    </header>
  )
}

export default component
