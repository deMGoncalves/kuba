import h from '@kuba/h'
import Box from '@kuba/box'
import Picture from '@kuba/picture'
import Sources from '@kuba/sources'
import Story from '@kuba/story'
import text from '@kuba/text'
import schema from './schema.json'
import style from './style.css'

export default (props) =>
  <Story {...props} className={[style.inspiration, props.className]}>
    <text.H2 className={style.inspiration__h2} slot='title' master darker>{schema.title}</text.H2>
    <div className={style.inspiration__main}>
      <Picture className={style.inspiration__picture}>
        <Sources thumbnails={schema.thumbnails} />
      </Picture>
      <Box className={style.inspiracao__box}>
        <Sources thumbnails={schema.estrategia.thumbnails} slot='sources' />
        <text.H3 className={style.inspiration__h3} slot='caption' master darker>{schema.estrategia.title}</text.H3>
      </Box>
      <Box className={style.inspiracao__box}>
        <Sources thumbnails={schema.inspiracao.thumbnails} slot='sources' />
        <text.H3 className={style.inspiration__h3} slot='caption' master darker>{schema.inspiracao.title}</text.H3>
      </Box>
      <Box className={style.inspiracao__box}>
        <Sources thumbnails={schema.produto.thumbnails} slot='sources' />
        <text.H3 className={style.inspiration__h3} slot='caption' master darker>{schema.produto.title}</text.H3>
      </Box>
      <Box className={style.inspiracao__box}>
        <Sources thumbnails={schema.venda.thumbnails} slot='sources' />
        <text.H3 className={style.inspiration__h3} slot='caption' master darker>{schema.venda.title}</text.H3>
      </Box>
    </div>
  </Story>
