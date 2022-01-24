import h, { Fragment } from '@kuba/h'
import container from '@kuba/container'
import story from '@kuba/story'
import text from '@kuba/text'
import style from './style'

export default (shelf) =>
  <story.Section>
    <section className={style.shelf__section}>
      <container.Div className={style.shelf__div}>
        {shelf.thumbnail}
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.descricao}
      </container.Div>
    </section>
    <section className={[style.shelf__section, style.especificacao]}>
      <container.Div className={style.shelf__label}>
        <text.Span master darker medium sm>Tamanho</text.Span>
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.tamanho}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darker medium sm>Wheelbase</text.Span>
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.wheelbase}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darker medium sm>Nose</text.Span>
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.nose}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darker medium sm>Tail</text.Span>
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.tail}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darker medium sm>Concave</text.Span>
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.concave}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darker medium sm>Lixa</text.Span>
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.lixa}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darker medium sm>Laminas</text.Span>
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.laminas}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darker medium sm>Material</text.Span>
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.material}
      </container.Div>
    </section>
  </story.Section>
