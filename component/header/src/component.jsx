import './style'
import h from '@kuba/h'
import Logomark from '@kuba/logomark'
import TopBar, { Headline, Leading } from '@kuba/topbar'

function component () {
  return (
    <TopBar className='header' large>
      <Leading>
        <Logomark />
      </Leading>
      <Headline />
    </TopBar>
  )
}

export default component
