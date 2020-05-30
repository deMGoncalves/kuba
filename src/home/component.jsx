import h from '@h'
import Benefits from './benefits'
import Custom from './custom'
import Jumbotron from './jumbotron'
import Kits from './kits'
import Main from '@main'
import Modificados from './modificados'
import Souvenier from './souvenier'

export default () =>
  <Main>
    <Jumbotron />
    <Benefits />
    <Custom />
    <Modificados />
    <Souvenier />
    <Kits />
  </Main>
