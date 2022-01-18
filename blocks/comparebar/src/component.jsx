import h from '@kuba/h'
import Side from '@kuba/side'
import Footer from './footer'
import Header from './header'
import Shelf from './shelf'
import Title from './title'

export default (comparebar) =>
  <Side onClose={() => comparebar.close()} opened={comparebar.opened}>
    <Header onClick={() => comparebar.close()} />
    <Title />
    <Shelf />
    <Footer />
  </Side>
