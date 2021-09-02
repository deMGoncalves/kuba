import h from '@kuba/h'
import * as f from '@kuba/f'
import button from '@kuba/button'
import Picture from '@kuba/picture'
import Repeat from '@kuba/repeat'
import Show from '@kuba/show'
import Sources from '@kuba/sources'
import Story from '@kuba/story'
import text from '@kuba/text'
import Departament from './departament'
import style from './style'

export default (inspiration) =>
  <Story className={[style.inspiration, inspiration.className]}>
    <text.H2 className={style.inspiration__h2} master darker sm medium>{inspiration.title}</text.H2>
    <div className={style.inspiration__main}>
      <figure className={style.inspiration__figure}>
        <Picture className={style.inspiration__picture}>
          <Show when={f.len(inspiration.thumbnails)}>
            <Sources thumbnails={inspiration.thumbnails} />
          </Show>
        </Picture>
        <figcaption className={style.inspiration__figcaption}>
          <hgroup className={style.inspiration__hgroup}>
            <text.H1 className={style.inspiration__text} master darker sm medium>{inspiration.subtitle}</text.H1>
            <text.P className={style.inspiration__text} master dark xxxs>{inspiration.description}</text.P>
          </hgroup>
          <button.Master className={style.inspiration__button} onClick:stop={() => inspiration.redirect()}>{inspiration.cta}</button.Master>
        </figcaption>
      </figure>
      <Repeat iterator={inspiration.departaments} component={Departament} />
    </div>
  </Story>
