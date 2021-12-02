import media from '@kuba/media'
import middleware from '@kuba/middleware'

const resize = (header) =>
  media('(min-width: 648px)')
    .in(() => header.opened && header.close())

export default middleware(resize)
