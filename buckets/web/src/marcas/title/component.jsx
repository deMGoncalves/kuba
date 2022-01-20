import h from '@kuba/h'
import container from '@kuba/container'
import story from '@kuba/story'
import text from '@kuba/text'
import style from './style'

export default () =>
  <story.Section>
    <container.Div className={style.title__div}>
      <text.Span className={style.title__span} master xxxs darker medium>Esta com duvida?</text.Span>
      <text.H1 className={style.title__h1} master darker md bold>Descubra novas marcas no kuba</text.H1>
    </container.Div>
  </story.Section>
