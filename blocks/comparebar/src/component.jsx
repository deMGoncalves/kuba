import h from '@kuba/h'
import container from '@kuba/container'
import button from '@kuba/button'
import Header from '@kuba/header'
import Side from '@kuba/side'
import Shelf from './shelf'
import style from './style'

export default (comparebar) =>
  <Side onClose={() => comparebar.close()} opened={comparebar.opened}>
    <Header fixed>
      <button.icon.ArrowLeft onClick={() => comparebar.close()} />
    </Header>
    <Shelf />
    <footer className={style.comparebar__footer}>
      <container.Div className={style.comparebar__div}>
        <button.naked.Master className={style.comparebar__button} darker medium>Comparar</button.naked.Master>
      </container.Div>
    </footer>
  </Side>
