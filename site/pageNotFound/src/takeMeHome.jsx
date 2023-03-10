import './style'
import { urlFor } from '@kuba/router'
import Button from '@kuba/button'
import h from '@kuba/h'

function component () {
  return (
    <Button className='pageNotFound__takeMeHome' onClick={() => location.assign(urlFor('home'))}>Take me home</Button>
  )
}

export default component
