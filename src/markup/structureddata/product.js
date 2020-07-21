import organization from './organization'
import review from './review'
import webpage from './webpage'

export default (sku, page) => ({
  '@context': 'http://schema.org/',
  '@id': `${location.href}#produto`,
  '@type': 'Product',
  additionalProperty: page.specification.map(s => ({ '@type': 'PropertyValue', ...s })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: page.rating.value,
    reviewCount: page.rating.count
  },
  audience: {
    '@type': 'PeopleAudience',
    suggestedGender: page.audience
  },
  brand: {
    '@type': 'Brand',
    name: page.brand
  },
  color: sku.color,
  description: page.description,
  depth: {
    '@type': 'QuantitativeValue',
    value: page.depth
  },
  gtin8: page.gtin8,
  height: {
    '@type': 'QuantitativeValue',
    value: page.height
  },
  image: {
    '@type': 'ImageObject',
    '@id': `${page.image}#image`,
    caption: page.name,
    url: page.image
  },
  mainEntityOfPage: webpage(page),
  model: 'SM-A307GT/DS',
  name: page.title,
  offers: {
    '@type': 'AggregateOffer',
    highPrice: '1599.00',
    lowPrice: '1329.05',
    offers: [
      {
        '@type': 'Offer',
        acceptedPaymentMethod: [
          {
            '@type': 'PaymentMethod',
            name: 'VISA'
          },
          {
            '@type': 'PaymentMethod',
            name: 'MasterCard'
          }
        ],
        availability: 'InStock',
        itemCondition: 'NewCondition',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '1599.00',
          priceCurrency: 'BRL'
        },
        priceValidUntil: '2040-06-01',
        seller: organization,
        url: location.href
      },
      {
        '@type': 'Offer',
        acceptedPaymentMethod: [
          {
            '@type': 'PaymentMethod',
            name: 'Boleto'
          }
        ],
        availability: 'InStock',
        itemCondition: 'NewCondition',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '1329.05',
          priceCurrency: 'BRL'
        },
        priceValidUntil: '2040-06-01',
        seller: organization,
        url: location.href
      }

    ],
    offerCount: '2',
    price: '1329.05',
    priceCurrency: 'BRL'
  },
  productID: page.id,
  review,
  sameAs: 'https://www.apple.com/br/shop/buy-iphone/iphone-xr',
  sku: '000000',
  url: location.href,
  weight: {
    '@type': 'QuantitativeValue',
    value: page.weight
  },
  width: {
    '@type': 'QuantitativeValue',
    value: page.width
  }
})
