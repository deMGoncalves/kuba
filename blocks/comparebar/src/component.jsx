import h from '@kuba/h'
import button from '@kuba/button'
import Header from '@kuba/header'
import Side from '@kuba/side'
import Shelf from './shelf'
import style from './style'

export default (comparebar) =>
  <Side className={style.comparebar} onClose={() => comparebar.close()} opened={comparebar.opened}>
    <Header fixed>
      <button.icon.ArrowLeft onClick={() => comparebar.close()} />
    </Header>
    <Shelf />
  </Side>
