import h from '@h'
import * as s from '@share'
import Benefits from './benefits'
import Custom from './custom'
import Jumbotron from './jumbotron'
import Kits from './kits'
import Modificados from './modificados'
import Souvenier from './souvenier'

export default () =>
  <s.Main>
    <Jumbotron />
    <Benefits />
    <Custom />
    <Modificados />
    <Souvenier />
    <Kits />
  </s.Main>
