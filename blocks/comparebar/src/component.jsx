import * as f from '@kuba/f'
import Back from './back'
import Footer from './footer'
import h from '@kuba/h'
import Header from './header'
import Shelf from './shelf'
import Side from '@kuba/side'
import style from './style'

const opened = f.dunder('opened')

const component = (comparebar) =>
  <Side className={style.comparebar} onClose={() => comparebar.close()} opened={opened(comparebar)}>
    <Back onClick={() => comparebar.close()} />
    <Header />
    <Shelf />
    <Footer />
  </Side>

f.assign(component, {
  opened: f.dunder.opened
})

export default component
