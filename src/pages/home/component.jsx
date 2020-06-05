import h from '@h'
import * as s from '@share'
import AspirationThreeBanners from './aspiration-three-banners'
import HighlightBanner from './highlight-banner'
import HighlightBenefits from './highlight-benefits'
import HighlightHalfBanner from './highlight-half-banner'
import Kits from './kits'
import Modificados from './modificados'
import NavigationBubbles from './navigation-bubbles'
import Souvenier from './souvenier'

export default () =>
  <s.Template>
    <HighlightBanner />
    <HighlightBenefits />
    <HighlightHalfBanner />
    <NavigationBubbles />
    <AspirationThreeBanners />
    <Modificados />
    <Souvenier />
    <Kits />
  </s.Template>
