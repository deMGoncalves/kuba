import media from '@kuba/media'
import middleware from '@kuba/middleware'

const resize = (nav) =>
  media('(min-width: 648px)')
    .in(() => nav.opened && nav.close())

export default middleware(resize)
