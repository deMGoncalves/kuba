import './style'
import h from '@kuba/h'

function component () {
  return (
    <a slot='leading' className='historyBack material-symbols-rounded' onClick={() => history.back()}>keyboard_backspace</a>
  )
}

export default component
