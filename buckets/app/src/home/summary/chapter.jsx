import h from '@kuba/h'
import * as f from '@kuba/f'
import { urlFor } from '@kuba/router'
import Box from '@kuba/box'
import text from '@kuba/text'
import style from './style.css'

export default (props, index) =>
  <Box className={style.summary__box} onClick={() => location.assign(urlFor(props.router))}>
    <text.Data className={style.summary__data} master darker medium>{f.inc(index)}</text.Data>
    <text.Strong className={style.summary__strong} master darker large>{props.title}</text.Strong>
    <text.P className={style.summary__p} master small>{props.description}</text.P>
  </Box>
