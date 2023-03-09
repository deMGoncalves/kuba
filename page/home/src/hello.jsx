import './style'
import h from '@kuba/h'
import HGroup from '@kuba/hgroup'
import text from '@kuba/text'

function component () {
  return (
    <HGroup slot='leading'>
      <text.H1 className='home__h1' master dark xxxs>Hello!</text.H1>
      <text.H2 className='home__h2' master dark lg highlight bold>Cleber</text.H2>
    </HGroup>
  )
}

export default component
