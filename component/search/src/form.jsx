import './style'
import h from '@kuba/h'
import Input from './input'

function component (props) {
  return (
    <form className={['search__form', props.className]}>
      <Input />
    </form>
  )
}

export default component
