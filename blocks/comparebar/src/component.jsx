import h from '@kuba/h'
import container from '@kuba/container'
import button from '@kuba/button'
import Header from '@kuba/header'
import Side from '@kuba/side'
import Shelf from './shelf'
import style from './style'
import Title from './title'

export default (comparebar) =>
  <Side onClose={() => comparebar.close()} opened={comparebar.opened}>
    <Header className={style.comparebar__header} fixed>
      <button.icon.ArrowLeft onClick={() => comparebar.close()} />
    </Header>
    <Title />
    <Shelf />
    {/*
    <footer className={style.comparebar__footer}>
      <container.Div className={style.comparebar__div}>
        <button.naked.Master className={style.comparebar__button} onClick={() => comparebar.redirect()} darker medium>Comparar</button.naked.Master>
      </container.Div>
    </footer>
    */}
  </Side>
