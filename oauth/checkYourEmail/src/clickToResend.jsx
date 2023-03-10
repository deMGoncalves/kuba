import './style'
import { urlFor } from '@kuba/router'
import h from '@kuba/h'
import Link from '@kuba/link'
import text from '@kuba/text'

function component () {
  return (
    <text.Span className='checkYourEmail__clickToResend' master dark xxs>Didn't receive the email? <Link href={urlFor('checkYourEmail')}>Click to resend</Link></text.Span>
  )
}

export default component
