import h, { Fragment } from '@kuba/h'
import Picture from '@kuba/picture'
import style from './style'

export default (shape) =>
  <section className={style.shape} onClick={() => shape.redirect()}>
    <header className={style.shape__header}>
      {shape.marca}
    </header>
    <Picture className={style.shape__picture}>
      <source srcSet={shape.thumbnail} slot='sources' />
    </Picture>
    <main className={style.shape__main}>
      {shape.modelo}
      {shape.laminas}
      {shape.tamanho}
    </main>
    <footer className={style.shape__footer} />
  </section>
