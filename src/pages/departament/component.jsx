import h from '@h'
import * as s from '@pages/share'

export default (page) =>
  <s.Main>
    <s.HighlightTitle>{ page.title }</s.HighlightTitle>
    <s.HighlightHalfBanner />
    <s.NavigationBubbles />
    <s.AspirationThreeBanners />
    <s.DisplayProducts />
    <s.PromoThreeBanners />
  </s.Main>
