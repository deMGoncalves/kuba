import media from '@kuba/media'
import schedule from '@kuba/schedule'

const resize = (search) =>
  media('(min-width: 769px)').in(() => search.close())

export default schedule(resize)
