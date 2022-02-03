import h from '@kuba/h'
import Side from '@kuba/side'
import Back from './back'
import Footer from './footer'
import Header from './header'
import Shelf from './shelf'
import style from './style'

export default (comparebar) =>
  <Side className={style.comparebar} onClose={() => comparebar.close()} opened={comparebar.opened}>
    <Back onClick={() => comparebar.close()} />
    <Header />
    <Shelf />
    <Footer />
  </Side>
