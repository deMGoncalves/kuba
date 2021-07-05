import h from '@kuba/h'
import { urlFor } from '@kuba/router'
import Box from '@kuba/box'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'
import estrategia from './estrategia.jpg'
import inspiracao from './inspiracao.jpg'
import produto from './produto.jpg'
import venda from './venda.jpg'

export default (props, children) =>
  <Story {...props} className={[style.exploration, props.className]}>
    {children.title}
    <div className={style.exploration__main}>
      <Box className={style.exploration__box} onClick={() => location.assign(urlFor('estrategia'))}>
        <source srcSet={estrategia} slot='sources' />
        <text.H3 className={style.exploration__h3} slot='caption' master darker>Estratégia</text.H3>
      </Box>
      <Box className={style.exploration__box} onClick={() => location.assign(urlFor('inspiracao'))}>
        <source srcSet={inspiracao} slot='sources' />
        <text.H3 className={style.exploration__h3} slot='caption' master darker>Inspiração</text.H3>
      </Box>
      <Box className={style.exploration__box} onClick={() => location.assign(urlFor('produto'))}>
        <source srcSet={produto} slot='sources' />
        <text.H3 className={style.exploration__h3} slot='caption' master darker>Produto</text.H3>
      </Box>
      <Box className={style.exploration__box} onClick={() => location.assign(urlFor('venda'))}>
        <source srcSet={venda} slot='sources' />
        <text.H3 className={style.exploration__h3} slot='caption' master darker>Venda</text.H3>
      </Box>
    </div>
  </Story>
