import h from '@kuba/h'
import Box from '@kuba/box'
import Sources from '@kuba/sources'
import text from '@kuba/text'
import style from './style.css'

export default (product) =>
  <Box className={style.inspiracao__box}>
    <Sources thumbnails={product.thumbnails} slot='sources' />
    <text.Strong className={style.inspiration__strong} slot='caption' master dark small>{product.title}</text.Strong>
  </Box>

