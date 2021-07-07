import h from '@kuba/h'
import Box from '@kuba/box'
import text from '@kuba/text'
import style from './style.css'

export default (departament) =>
  <Box className={style.exploration__box} onClick={() => location.assign(departament.url)}>
    <source srcSet={departament.thumbnail} slot='sources' />
    <text.Strong className={style.exploration__strong} slot='caption' master dark small>{departament.title}</text.Strong>
  </Box>
