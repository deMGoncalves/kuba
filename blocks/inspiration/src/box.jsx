import h from '@kuba/h'
import Box from '@kuba/box'
import Sources from '@kuba/sources'
import text from '@kuba/text'
import style from './style'

export default (props) =>
  <Box className={style.inspiration__box} onClick={() => location.assign(props.url)}>
    <Sources thumbnails={props.thumbnails} slot='sources' />
    <text.Strong className={style.inspiration__strong} slot='caption' master dark small>{props.title}</text.Strong>
  </Box>
