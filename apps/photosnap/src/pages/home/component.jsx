import h, { Fragment } from '@rex/h'
import * as c from '@components'
import Story from './story'
import style from './style.css'

import createAndShareMobile from './create-and-share.mobile.jpg'
import createAndShareTablet from './create-and-share.tablet.jpg'
import createAndShareDesktop from './create-and-share.desktop.jpg'

export default () =>
  <main className={style.home}>
    <c.Header className={style.home__header} />
    <Story
      title='Create and share your photo stories'
      description='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'
      url='/'
    >
      <source srcSet={createAndShareMobile} media='(max-width: 767px)' />
      <source srcSet={createAndShareTablet} media='(min-width: 768px) and (max-width: 959px)' />
      <source srcSet={createAndShareDesktop} media='(min-width: 960px)' />
    </Story>
  </main>
