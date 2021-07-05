import h from '@kuba/h'
import icon from '@kuba/icon'
import style from './style.css'

export default (props) =>
  <div className={[style.social, props.className]}>
    <icon.Instagram className={style.social__icon} onClick={() => location.assign('//www.instagram.com/usefashion/?hl=pt-br')} alt='instagram' large />
    <icon.Facebook className={style.social__icon} onClick={() => location.assign('//www.facebook.com/PortalUseFashion/?ref=bookmarks')} alt='facebook' large />
    <icon.Linkedin className={style.social__icon} onClick={() => location.assign('//www.linkedin.com/company/usefashion/')} alt='linkedin' large />
    <icon.Youtube className={style.social__icon} onClick={() => location.assign('//www.youtube.com/channel/UC7vIxxBw-iRSQ0nQBsvf-wg')} alt='youtube' large />
    <icon.Pinterest className={style.social__icon} onClick={() => location.assign('//br.pinterest.com/usefashion/')} alt='pinterest' large />
  </div>
