import h from '@kuba/h'
import Box from '@kuba/box'
import Show from '@kuba/show'
import Sources from '@kuba/sources'
import text from '@kuba/text'
import style from './style'

export default (departament) =>
  <Box className={style.exploration__box} alt={departament.title} onClick={() => location.assign(departament.url)}>
    <Show when={departament.thumbnails}>
      <Sources thumbnails={departament.thumbnails} slot='sources' />
    </Show>
    <text.Strong className={style.exploration__strong} slot='caption' master dark xxxs>{departament.title}</text.Strong>
  </Box>
