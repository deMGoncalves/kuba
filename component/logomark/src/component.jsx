import './style'
import { urlFor } from '@kuba/router'
import h from '@kuba/h'
import kuba from './kuba.svg'

function component () {
  return (
    <img slot='leading' className='logomark' src={kuba} alt='kuba autos' loading='auto' onClick={() => location.assign(urlFor('home'))} />
  )
}

export default component
