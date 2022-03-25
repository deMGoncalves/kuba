import { push } from '@kuba/jsonld'

export default (price, priceCurrency, url) =>
  price && (
    push({
      '@id': '#offers',
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      price,
      priceCurrency,
      url
    })
  )
