import h from '@kuba/h'
import icon from '@kuba/icon'
import style from './style.css'

export default (props) =>
  <nav className={[style.social, props.className]}>
    <icon.Facebook className={style.social__icon} large />
    <icon.Github className={style.social__icon} large />
    <icon.Instagram className={style.social__icon} large />
    <icon.Linkedin className={style.social__icon} large />
    <icon.Twitter className={style.social__icon} large />
    <icon.Youtube className={style.social__icon} large />
  </nav>
