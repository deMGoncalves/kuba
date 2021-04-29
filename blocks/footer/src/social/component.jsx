import h from '@kuba/h'
import icon from '@kuba/icon'
import style from './style.css'

export default (props) =>
  <div className={[style.social, props.className]}>
    <icon.Facebook className={style.social__icon} alt='facebook' large />
    <icon.Github className={style.social__icon} alt='github' large />
    <icon.Instagram className={style.social__icon} alt='instagram' large />
    <icon.Linkedin className={style.social__icon} alt='linkedin' large />
    <icon.Twitter className={style.social__icon} alt='twitter' large />
    <icon.Youtube className={style.social__icon} alt='youtube' large />
  </div>
