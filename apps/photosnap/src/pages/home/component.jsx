import h, { Fragment } from '@rex/h'
import * as c from '@components'
import Banner from './banner'
import style from './style.css'

export default () =>
  <main className={style.home}>
    <c.Header className={style.home__header} />
    <Banner
      color='inverse'
      description='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others'
      direction='reverse'
      title='Create and share your photo stories'
      url='/'
    >
      <source srcSet='/assets/create-and-share.mobile.jpg' media='(max-width: 767px)' />
      <source srcSet='/assets/create-and-share.tablet.jpg' media='(min-width: 768px) and (max-width: 959px)' />
      <source srcSet='/assets/create-and-share.desktop.jpg' media='(min-width: 960px)' />
    </Banner>
    <Banner
      description='We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone'
      title='Beautiful stories every time'
      url='/'
    >
      <source srcSet='/assets/beautiful-stories.mobile.jpg' media='(max-width: 767px)' />
      <source srcSet='/assets/beautiful-stories.tablet.jpg' media='(min-width: 768px) and (max-width: 959px)' />
      <source srcSet='/assets/beautiful-stories.desktop.jpg' media='(min-width: 960px)' />
    </Banner>
    <Banner
      description='Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it'
      direction='reverse'
      title='Designed for everyone'
      url='/'
    >
      <source srcSet='/assets/designed-for-everyone.mobile.jpg' media='(max-width: 767px)' />
      <source srcSet='/assets/designed-for-everyone.tablet.jpg' media='(min-width: 768px) and (max-width: 959px)' />
      <source srcSet='/assets/designed-for-everyone.desktop.jpg' media='(min-width: 960px)' />
    </Banner>

  </main>
