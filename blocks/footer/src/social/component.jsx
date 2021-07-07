import h from '@kuba/h'
import icon from '@kuba/icon'
import { urlFor } from '@kuba/router'
import style from './style.css'

export default (props) =>
  <div className={[style.social, props.className]}>
    <icon.Instagram className={style.social__icon} onClick={() => location.assign(urlFor('home'))} alt='instagram' large />
    <icon.Facebook className={style.social__icon} onClick={() => location.assign(urlFor('home'))} alt='facebook' large />
    <icon.Linkedin className={style.social__icon} onClick={() => location.assign(urlFor('home'))} alt='linkedin' large />
    <icon.Youtube className={style.social__icon} onClick={() => location.assign(urlFor('home'))} alt='youtube' large />
    <icon.Pinterest className={style.social__icon} onClick={() => location.assign(urlFor('home'))} alt='pinterest' large />
  </div>
