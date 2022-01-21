import h from '@kuba/h'
import container from '@kuba/container'
import text from '@kuba/text'
import Origem from './origem'
import Marca from './marca'
import style from './style'

export default (modelo) =>
  <container.Section className={style.modelo}>
    <Marca />
    <text.H1 className={style.modelo__h1} master darker md bold>{modelo.valor}</text.H1>
    <div className={style.modelo__div}>
      <Origem />
    </div>
  </container.Section>
