import './style'
import h from '@kuba/h'
import Icon from '@kuba/icon'
import Navigation from './navigation'

function component (props) {
  return (
    <button className={['navigation__menu', props.className]} onClick={() => Navigation.open()}>
      <Icon>menu</Icon>
    </button>
  )
}

export default component
