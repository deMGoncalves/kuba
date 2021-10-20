import h, { Fragment } from '@kuba/h'
import Cover from '@kuba/cover'
import Sandbox from '@kuba/sandbox'
import Site from '@kuba/site'
import Splash from '@kuba/splash'
import style from './style'

export default () =>
  <Site className={style.home}>
    <Fragment slot='hot'>
      <Splash className={style.home__splash} />
      <Cover className={style.home__cover} />

      {/**
       * TODO: Teste do projeto Sandbox, cada bloco de
       * layout deve ser executado em seu Web Worker
       */}
      <Sandbox require={() => new Worker(new URL('@kuba/cover', import.meta.url /* WebpackChunckName: 'cover' */))} />
    </Fragment>
  </Site>
