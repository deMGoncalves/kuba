import h from '@kuba/h'
import button from '@kuba/button'
import Header from '@kuba/header'
import Side from '@kuba/side'
import style from './style'

export default (comparebar) =>
  <Side className={style.comparebar} onClose={() => comparebar.close()} opened={comparebar.opened}>
    <Header>
      <button.icon.ArrowLeft onClick={() => comparebar.close()} />
    </Header>
  </Side>
