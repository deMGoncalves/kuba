import h, { Fragment } from '@rex/h'
import * as c from '@components'
import Story from './story'
import style from './style.css'

export default () =>
  <main className={style.home}>
    <c.Header className={style.home__header} />
    <Story
      title='Create and share your photo stories'
      description='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'
      url='/'
    >
      <source srcSet='/assets/create-and-share.mobile.jpg' media='(max-width: 767px)' />
      <source srcSet='/assets/create-and-share.tablet.jpg' media='(min-width: 768px) and (max-width: 959px)' />
      <source srcSet='/assets/create-and-share.desktop.jpg' media='(min-width: 960px)' />
    </Story>
  </main>
