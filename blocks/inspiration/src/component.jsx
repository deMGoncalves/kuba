import h from '@kuba/h'
import Box from '@kuba/box'
import Picture from '@kuba/picture'
import Sources from '@kuba/sources'
import Story from '@kuba/story'
import text from '@kuba/text'
import schema from './schema'
import style from './style.css'

export default (props) =>
  <Story {...props} className={[style.inspiration, props.className]}>
    <text.H2 className={style.inspiration__h2} master darker large>{schema.title}</text.H2>
    <div className={style.inspiration__main}>
      <Picture className={style.inspiration__picture}>
        <Sources thumbnails={schema.thumbnails} />
      </Picture>
      <Box className={style.inspiracao__box}>
        <Sources thumbnails={schema.estrategia.thumbnails} slot='sources' />
        <text.Strong className={style.inspiration__strong} slot='caption' master dark small>{schema.estrategia.title}</text.Strong>
      </Box>
      <Box className={style.inspiracao__box}>
        <Sources thumbnails={schema.inspiracao.thumbnails} slot='sources' />
        <text.Strong className={style.inspiration__strong} slot='caption' master dark small>{schema.inspiracao.title}</text.Strong>
      </Box>
      <Box className={style.inspiracao__box}>
        <Sources thumbnails={schema.produto.thumbnails} slot='sources' />
        <text.Strong className={style.inspiration__strong} slot='caption' master dark small>{schema.produto.title}</text.Strong>
      </Box>
      <Box className={style.inspiracao__box}>
        <Sources thumbnails={schema.venda.thumbnails} slot='sources' />
        <text.Strong className={style.inspiration__strong} slot='caption' master dark small>{schema.venda.title}</text.Strong>
      </Box>
    </div>
  </Story>
