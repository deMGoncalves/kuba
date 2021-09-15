import h from '@kuba/h'
import Box from '@kuba/box'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (product) =>
  <Box className={style.shelf__product}>
    <Show when={product.image}>
      <source srcSet={product.image} slot='sources' />
    </Show>
    <text.Strong className={style.shelf__strong} slot='caption' master darker xxxs regular>{product.name}</text.Strong>
  </Box>
