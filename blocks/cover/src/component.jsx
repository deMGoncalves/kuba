import h from '@kuba/h'
import * as f from '@kuba/f'
import button from '@kuba/button'
import icon from '@kuba/icon'
import Modal from '@kuba/modal'
import Picture from '@kuba/picture'
import Show from '@kuba/show'
import Sources from '@kuba/sources'
import text from '@kuba/text'
import style from './style'

export default (splash) =>
  <Modal className={[style.splash, splash.className]} opened={splash.opened} onClose={() => splash.close()}>
    <icon.Close className={style.splash__icon} alt='close' onClick={() => splash.close()} larger />
    <figure className={style.splash__figure}>
      <Picture className={style.splash__picture} alt={splash.title}>
        <Show when={f.len(splash.thumbnails)}>
          <Sources thumbnails={splash.thumbnails} />
        </Show>
      </Picture>
      <figcaption className={style.splash__figcaption}>
        <hgroup className={style.splash__hgroup}>
          <text.H1 className={style.splash__text} master darker sm medium>{splash.title}</text.H1>
          <text.P className={style.splash__text} master dark xxxs>{splash.description}</text.P>
        </hgroup>
        <button.Master className={style.splash__button} onClick:stop={() => splash.redirect()}>{splash.cta}</button.Master>
      </figcaption>
    </figure>
  </Modal>
