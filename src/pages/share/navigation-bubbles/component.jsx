import h from '@h'
import * as s from '@pages/share'
import carousel from './carousel'
import style from './style.css'

export default carousel(() =>
  <section className={style.bubble}>
    <s.Container className={style.bubble__container}>
      <s.Title>navegue pelo mundo JRMod</s.Title>
      <nav className={style.bubble__nav}>
        <div className={style.bubble__div}>
          <picture className={style.bubble__picture}>
            <img className={style.bubble__img} src='https://dummyimage.com/130x130/1a1a1a/1a1a1a' loading='lazy' alt='navigation' />
          </picture>
          <a className={style.bubble__a}>navigation</a>
        </div>
        <div className={style.bubble__div}>
          <picture className={style.bubble__picture}>
            <img className={style.bubble__img} src='https://dummyimage.com/130x130/1a1a1a/1a1a1a' loading='lazy' alt='navigation' />
          </picture>
          <a className={style.bubble__a}>navigation</a>
        </div>
        <div className={style.bubble__div}>
          <picture className={style.bubble__picture}>
            <img className={style.bubble__img} src='https://dummyimage.com/130x130/1a1a1a/1a1a1a' loading='lazy' alt='navigation' />
          </picture>
          <a className={style.bubble__a}>navigation</a>
        </div>
        <div className={style.bubble__div}>
          <picture className={style.bubble__picture}>
            <img className={style.bubble__img} src='https://dummyimage.com/130x130/1a1a1a/1a1a1a' loading='lazy' alt='navigation' />
          </picture>
          <a className={style.bubble__a}>navigation</a>
        </div>
        <div className={style.bubble__div}>
          <picture className={style.bubble__picture}>
            <img className={style.bubble__img} src='https://dummyimage.com/130x130/1a1a1a/1a1a1a' loading='lazy' alt='navigation' />
          </picture>
          <a className={style.bubble__a}>navigation</a>
        </div>
        <div className={style.bubble__div}>
          <picture className={style.bubble__picture}>
            <img className={style.bubble__img} src='https://dummyimage.com/130x130/1a1a1a/1a1a1a' loading='lazy' alt='navigation' />
          </picture>
          <a className={style.bubble__a}>navigation</a>
        </div>
        <div className={style.bubble__div}>
          <picture className={style.bubble__picture}>
            <img className={style.bubble__img} src='https://dummyimage.com/130x130/1a1a1a/1a1a1a' loading='lazy' alt='navigation' />
          </picture>
          <a className={style.bubble__a}>navigation</a>
        </div>
        <div className={style.bubble__div}>
          <picture className={style.bubble__picture}>
            <img className={style.bubble__img} src='https://dummyimage.com/130x130/1a1a1a/1a1a1a' loading='lazy' alt='navigation' />
          </picture>
          <a className={style.bubble__a}>navigation</a>
        </div>
      </nav>
    </s.Container>
  </section>
)
