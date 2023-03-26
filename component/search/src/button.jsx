import './style'
import h from '@kuba/h'
import Icon from '@kuba/icon'
import Search from './search'

function component (props) {
  return (
    <button className={['search__button', props.className]} onClick={() => Search.open()}>
      <Icon>search</Icon>
    </button>
  )
}

export default component
