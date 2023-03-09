import './style'
import { urlFor } from '@kuba/router'
import h from '@kuba/h'

function component () {
  return (
    <a slot='trailing' className='sendToServiceOrders material-symbols-rounded' href={urlFor('serviceOrders')}>layers</a>
  )
}

export default component
