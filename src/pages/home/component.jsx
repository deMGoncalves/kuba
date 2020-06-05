import h from '@h'
import * as s from '@share'
import AspirationThreeBanners from './aspiration-three-banners'
import DisplayProducts from './display-products'
import HighlightBanner from './highlight-banner'
import HighlightBenefits from './highlight-benefits'
import HighlightHalfBanner from './highlight-half-banner'
import NavigationBubbles from './navigation-bubbles'

export default () =>
  <s.Template>
    <HighlightBanner />
    <HighlightBenefits />
    <HighlightHalfBanner />
    <NavigationBubbles />
    <AspirationThreeBanners />
    <DisplayProducts />
  </s.Template>
