import h, { Fragment } from '@kuba/h'
import container from '@kuba/container'
import Help from '@kuba/help'
import story from '@kuba/story'
import text from '@kuba/text'
import schema from './schema'
import style from './style'

export default (shelf) =>
  <story.Section>
    <section className={style.shelf__section}>
      <container.Div className={style.shelf__vs}>
        <text.Span lightest>VS</text.Span>
      </container.Div>
      <container.Div className={style.shelf__thumb}>
        {shelf.marca}
        {shelf.modelo}
        {shelf.thumbnail}
      </container.Div>
    </section>
    <section className={[style.shelf__section, style.especificacao]}>
      <container.Div className={style.shelf__label}>
        <text.Span master darkest medium xxxs>Tamanho</text.Span>
        <Help text={schema.tamanho} />
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.tamanho}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darkest medium xxxs>Wheelbase</text.Span>
        <Help text={schema.wheelbase} />
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.wheelbase}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darkest medium xxxs>Nose</text.Span>
        <Help text={schema.nose} />
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.nose}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darkest medium xxxs>Tail</text.Span>
        <Help text={schema.tail} />
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.tail}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darkest medium xxxs>Concave</text.Span>
        <Help text={schema.concave} />
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.concave}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darkest medium xxxs>Lixa</text.Span>
        <Help text={schema.lixa} />
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.lixa}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darkest medium xxxs>Laminas</text.Span>
        <Help text={schema.laminas} />
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.laminas}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darkest medium xxxs>Material</text.Span>
        <Help text={schema.material} />
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.material}
      </container.Div>
    </section>
  </story.Section>
