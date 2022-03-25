import container from '@kuba/container'
import h from '@kuba/h'
import Marca from './marca'
import Origem from './origem'
import Pro from './pro'
import style from './style'
import text from '@kuba/text'
import View from './view'

export default (modelo) =>
  <container.Section className={style.modelo}>
    <Marca />
    <text.H1 className={style.modelo__h1} master darker md bold>{modelo.valor}</text.H1>
    <div className={style.modelo__div}>
      <Pro />
      <Origem />
      <View />
    </div>
  </container.Section>
