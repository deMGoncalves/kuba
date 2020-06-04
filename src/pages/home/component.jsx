import h from '@h'
import * as s from '@share'
import Banner from './highlight-banner'
import Benefits from './benefits'
import HalfBanner from './highlight-half-banner'
import Kits from './kits'
import Modificados from './modificados'
import Navigation from './navigation'
import Souvenier from './souvenier'

export default () =>
  <s.Template>
    <Banner />
    <Benefits />
    <HalfBanner />
    <Navigation />
    <Modificados />
    <Souvenier />
    <Kits />
  </s.Template>
