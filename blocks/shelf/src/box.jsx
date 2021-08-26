import h from '@kuba/h'
import Box from '@kuba/box'
import text from '@kuba/text'
import style from './style'

export default (props) =>
  <Box className={style.shelf__box}>
    <source srcSet={props.thumbnail} slot='sources' />
    <text.Strong className={style.shelf__strong} slot='caption' master darker xxxs regular>{props.name}</text.Strong>
  </Box>
