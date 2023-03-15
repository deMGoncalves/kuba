import './style'
import { urlFor } from '@kuba/router'
import h from '@kuba/h'
import Link from '@kuba/link'
import text from '@kuba/text'

function component () {
  return (
    <text.Span className='login__signUp' master xxs>Don&apos;t have an account? <Link href={urlFor('signUp')}>Sign up</Link></text.Span>
  )
}

export default component
