import h from '@kuba/h'
import style from './style'
import button from '@kuba/button'
import Picture from '@kuba/picture'

export default (zoom) =>
  <section className={style.zoom} opened={zoom.opened}>
    <header className={style.zoom__header}>
      <button.icon.Close className={style.zoom__close} onClick={() => zoom.close()} />
    </header>
    <main className={style.zoom__main}>
      <Picture>
        <source srcSet={zoom.src} />
      </Picture>
    </main>
  </section>
