import './style'
import h from '@kuba/h'
import Hello from './hello'
import SendToNewServiceOrder from '@kuba/sendtonewserviceorder'
import SendToServiceOrders from '@kuba/sendtoserviceorders'
import SendToSettings from '@kuba/sendtosettings'
import TopBar, { Leading, Trailing } from '@kuba/topbar'

function component () {
  return (
    <TopBar>
      <Leading>
        <Hello />
      </Leading>
      <Trailing>
        <SendToServiceOrders />
        <SendToSettings />
        <SendToNewServiceOrder />
      </Trailing>
    </TopBar>
  )
}

export default component
