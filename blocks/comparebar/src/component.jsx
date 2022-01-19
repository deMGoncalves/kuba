import h from '@kuba/h'
import Side from '@kuba/side'
import Back from './back'
import Footer from './footer'
import Header from './header'
import Shelf from './shelf'

export default (comparebar) =>
  <Side onClose={() => comparebar.close()} opened={comparebar.opened}>
    <Back onClick={() => comparebar.close()} />
    <Header />
    <Shelf />
    <Footer />
  </Side>
