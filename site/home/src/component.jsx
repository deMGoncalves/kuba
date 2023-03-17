import './style'
import h from '@kuba/h'
import Logomark from '@kuba/logomark'
import TopBar, { Leading } from '@kuba/topbar'

function component () {
  return (
    <TopBar>
      <Leading>
        <Logomark />
      </Leading>
    </TopBar>
  )
}

export default component
