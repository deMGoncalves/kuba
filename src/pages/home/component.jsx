import h from '@h'
import * as s from '@share'
import Banner from './highlight-banner'
import Benefits from './benefits'
import Custom from './custom'
import Kits from './kits'
import Modificados from './modificados'
import Souvenier from './souvenier'

export default () =>
  <s.Template>
    <Banner />
    <Benefits />
    <Custom />
    <Modificados />
    <Souvenier />
    <Kits />
  </s.Template>
