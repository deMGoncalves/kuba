import './style'
import { urlFor } from '@kuba/router'
import h from '@kuba/h'
import Link from '@kuba/link'
import text from '@kuba/text'

function component () {
  return (
    <text.Span className='createanaccount__logIn' master xxs>Already have an account? <Link href={urlFor('logIn')}>Log in</Link></text.Span>
  )
}

export default component
