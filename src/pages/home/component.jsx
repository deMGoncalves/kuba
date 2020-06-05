import h from '@h'
import * as s from '@share'
import Banner from './highlight-banner'
import Benefits from './highlight-benefits'
import HalfBanner from './highlight-half-banner'
import Kits from './kits'
import Modificados from './modificados'
import Bubbles from './navigation-bubbles'
import Souvenier from './souvenier'

export default () =>
  <s.Template>
    <Banner />
    <Benefits />
    <HalfBanner />
    <Bubbles />
    <Modificados />
    <Souvenier />
    <Kits />
  </s.Template>
