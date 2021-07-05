import h, { Fragment } from '@kuba/h'
import Action from '@kuba/action'
import icon from '@kuba/icon'
import link from '@kuba/link'
import text from '@kuba/text'
import style from './style.css'

export default (props) =>
  <Action className={[style.bookmark, props.className]}>
    <icon.Bookmark className={style.bookmark__icon} slot='icon' larger />
    <text.P className={style.bookmark__p} slot='label' master ligth small>
      meus<br /><strong>Conteúdos</strong>
    </text.P>
    <text.Strong className={style.bookmark__strong} slot='header' master darker>Meus conteúdos</text.Strong>
    <Fragment slot='main'>
      <link.Master className={style.bookmark__link} href='//nova.usefashion.com/saved-content' master darker small>Contúdos</link.Master>
      <link.Master className={style.bookmark__link} href='//nova.usefashion.com/interests' master darker small>Interesse</link.Master>
    </Fragment>
  </Action>
