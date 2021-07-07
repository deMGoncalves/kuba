import h from '@kuba/h'
import { urlFor } from '@kuba/router'
import Box from '@kuba/box'
import Metro from '@kuba/metro'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'
import cadeiras from './cadeiras.jpg'
import sofas from './sofas.jpg'
import acessorios from './acessorios.jpg'

export default (props) =>
  <Story {...props} className={[style.exploration, props.className]}>
    <text.H2 className={style.exploration__h2} master darker large>navegue pode departamentos</text.H2>
    <Metro className={style.exploration__main}>
      <Box className={style.exploration__box} onClick={() => location.assign(urlFor('cadeiras'))}>
        <source srcSet={cadeiras} slot='sources' />
        <text.Strong className={style.exploration__strong} slot='caption' master small>cadeiras</text.Strong>
      </Box>
      <Box className={style.exploration__box} onClick={() => location.assign(urlFor('sofas'))}>
        <source srcSet={sofas} slot='sources' />
        <text.Strong className={style.exploration__strong} slot='caption' master small>sofás</text.Strong>
      </Box>
      <Box className={style.exploration__box} onClick={() => location.assign(urlFor('acessorios'))}>
        <source srcSet={acessorios} slot='sources' />
        <text.Strong className={style.exploration__strong} slot='caption' master small>acessórios</text.Strong>
      </Box>
    </Metro>
  </Story>
