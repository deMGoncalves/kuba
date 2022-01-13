import h from '@kuba/h'
import container from '@kuba/container'
import text from '@kuba/text'
import story from '@kuba/story'
import style from './style'

export default (shapes) =>
  <container.Div>
    <text.Strong medium master darkest xxs>Produtos da marca:</text.Strong>
    <story.Div className={style.shapes__grid}>
      {shapes.snapshot}
    </story.Div>
  </container.Div>
