import './style'
import { urlFor } from '@kuba/router'
import h from '@kuba/h'

function component () {
  return (
    <a slot='leading' className='backToHome material-symbols-rounded' href={urlFor('home')}>keyboard_backspace</a>
  )
}

export default component
