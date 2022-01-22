import h from '@kuba/h'
import icon from '@kuba/icon'
import link from '@kuba/link'
import style from './style'

export default (props) =>
  <footer className={style.footer} valid={props.valid}>
    <link.Master className={style.footer__link} onClick={props.onClick} darker xxs medium>
      Ver comparação
      <icon.ArrowLongRight />
    </link.Master>
  </footer>
