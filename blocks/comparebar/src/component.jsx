import h from '@kuba/h'
import button from '@kuba/button'
import Header from '@kuba/header'
import Side from '@kuba/side'
import Footer from './footer'
import Shelf from './shelf'
import style from './style'
import Title from './title'

export default (comparebar) =>
  <Side className={style.comparebar} onClose={() => comparebar.close()} opened={comparebar.opened}>
    <Header className={style.comparebar__header} fixed>
      <button.icon.ArrowLeft onClick={() => comparebar.close()} />
    </Header>
    <Title />
    <Shelf />
    <Footer />
  </Side>
