import h from '@h'
import * as s from '@pages/share'
import HighlightBenefits from './highlight-benefits'
import HighlightHalfBanner from './highlight-half-banner'
import NavigationBubbles from './navigation-bubbles'
import PromoThreeBanners from './promo-three-banners'

export default () =>
  <s.Main>
    <s.HighlightBanner />
    <HighlightBenefits />
    <HighlightHalfBanner />
    <NavigationBubbles />
    <s.AspirationThreeBanners />
    <s.DisplayProducts />
    <PromoThreeBanners />
  </s.Main>
