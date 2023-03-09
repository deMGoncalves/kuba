import './style'
import { urlFor } from '@kuba/router'
import h from '@kuba/h'
import Link from '@kuba/link'

function component () {
  return (
    <Link className='login__forgotPassword' href={urlFor('forgotPassword')}>Forgot password</Link>
  )
}

export default component
