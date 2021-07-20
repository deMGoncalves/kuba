import h from '@kuba/h'
import Box from '@kuba/box'
import text from '@kuba/text'
import style from './style.css'

export default (props) =>
  <Box className={style.exploration__box} alt={props.title} onClick={() => location.assign(props.url)}>
    <source srcSet={props.thumbnail} slot='sources' />
    <text.Strong className={style.exploration__strong} slot='caption' master dark small>{props.title}</text.Strong>
  </Box>
