import { component } from '@kuba/marionette'
import Back from './back'
import Footer from './footer'
import h from '@kuba/h'
import Header from './header'
import Shelf from './shelf'
import Side from '@kuba/side'
import style from './style'

export default component((comparebar) => (
  <Side className={style.comparebar} onClose={() => comparebar.close()} opened={comparebar.opened()}>
    <Back onClick={() => comparebar.close()} />
    <Header />
    <Shelf />
    <Footer />
  </Side>
))
