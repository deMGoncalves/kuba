import h from '@h'
import * as s from '@pages/share'
import PromoThreeBanners from './promo-three-banners'

export default () =>
  <s.Main>
    <s.HighlightBanner />
    <s.HighlightBenefits />
    <s.HighlightHalfBanner />
    <s.NavigationBubbles />
    <s.AspirationThreeBanners />
    <s.DisplayProducts />
    <PromoThreeBanners />
  </s.Main>
