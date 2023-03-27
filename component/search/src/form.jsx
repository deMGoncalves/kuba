import './style'
import h from '@kuba/h'
import Icon from '@kuba/icon'
import Input from './input'

function component (props) {
  return (
    <form className={['search__form', props.className]}>
      <Input />
      <Icon className='search__icon'>search</Icon>
    </form>
  )
}

export default component
