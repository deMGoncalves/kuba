import h from '@h'
import * as s from '@pages/share'
import carousel from './carousel'
import style from './style.css'

const banner = 'https://dummyimage.com/132x132/1a1a1a/1a1a1a'

export default carousel(() =>
  <section className={style.bubble}>
    <s.Container className={style.bubble__container}>
      <s.Title>navegue pelo mundo JRMod</s.Title>
      <nav className={style.bubble__nav}>
        <div className={style.bubble__div}>
          <s.Image className={style.bubble__image}>
            <source srcSet={banner} />
          </s.Image>
          <a className={style.bubble__a} href='/custom-shop/distortion-overdrive-fuzz'>navigation</a>
        </div>
        <div className={style.bubble__div}>
          <s.Image className={style.bubble__image}>
            <source srcSet={banner} />
          </s.Image>
          <a className={style.bubble__a} href='custom-shop/compressor-limiter'>navigation</a>
        </div>
        <div className={style.bubble__div}>
          <s.Image className={style.bubble__image}>
            <source srcSet={banner} />
          </s.Image>
          <a className={style.bubble__a} href='custom-shop/equalizer'>navigation</a>
        </div>
        <div className={style.bubble__div}>
          <s.Image className={style.bubble__image}>
            <source srcSet={banner} />
          </s.Image>
          <a className={style.bubble__a} href='custom-shop/preamp'>navigation</a>
        </div>
        <div className={style.bubble__div}>
          <s.Image className={style.bubble__image}>
            <source srcSet={banner} />
          </s.Image>
          <a className={style.bubble__a} href='custom-shop/expression-wah'>navigation</a>
        </div>
        <div className={style.bubble__div}>
          <s.Image className={style.bubble__image}>
            <source srcSet={banner} />
          </s.Image>
          <a className={style.bubble__a} href='custom-shop/modulacao'>navigation</a>
        </div>
        <div className={style.bubble__div}>
          <s.Image className={style.bubble__image}>
            <source srcSet={banner} />
          </s.Image>
          <a className={style.bubble__a} href='kits/overdrive'>navigation</a>
        </div>
        <div className={style.bubble__div}>
          <s.Image className={style.bubble__image}>
            <source srcSet={banner} />
          </s.Image>
          <a className={style.bubble__a} href='kits/distortion'>navigation</a>
        </div>
      </nav>
    </s.Container>
  </section>
)
