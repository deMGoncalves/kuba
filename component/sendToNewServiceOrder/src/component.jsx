import './style'
import { urlFor } from '@kuba/router'
import h from '@kuba/h'

function component () {
  return (
    <a slot='trailing' className='sendToNewServiceOrder material-symbols-rounded' href={urlFor('newServiceOrder')}>add</a>
  )
}

export default component
