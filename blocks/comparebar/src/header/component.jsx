import h from '@kuba/h'
import button from '@kuba/button'
import Header from '@kuba/header'
import style from './style'

export default (props) =>
  <Header className={style.header} fixed>
    <button.icon.ArrowLeft onClick={props.onClick} />
  </Header>
