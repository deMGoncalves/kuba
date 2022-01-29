import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import Origem from './origem'
import Marca from './marca'
import style from './style'

export default (modelo) =>
  <>
    <setion className={style.modelo}>
      <Marca master />
      <text.H1 className={style.modelo__h1} master darker sm bold>{modelo.master}</text.H1>
      <div className={style.modelo__div}>
        <Origem master />
      </div>
    </setion>
    <setion className={style.modelo}>
      <Marca />
      <text.H1 className={style.modelo__h1} master darker sm bold>{modelo.slave}</text.H1>
      <div className={style.modelo__div}>
        <Origem />
      </div>
    </setion>
  </>
