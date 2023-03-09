import './style'
import { urlFor } from '@kuba/router'
import h from '@kuba/h'

function component () {
  return (
    <a slot='trailing' className='sendToSettings material-symbols-rounded' href={urlFor('settings')}>settings</a>
  )
}

export default component
