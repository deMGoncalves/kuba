import h from '@rex/h'
import style from './style.css'

export default (home) =>
  <main className={style.home}>
    {home.navigation}

    <section className={style.home__content}>
      <header className={style.home__header}>
        <hgroup>
          <h4>Shared</h4>
          <h5>F</h5>
        </hgroup>
      </header>

      <div className={style.home__box}>teste bloco de texto</div>
    </section>
  </main>
