import additionalProperty from './additionalProperty'
import organization from './organization'
import review from './review'
import webpage from './webpage'

export default (page) => ({
  '@context': 'http://schema.org/',
  '@id': `${location.href}#produto`,
  '@type': 'Product',
  additionalProperty: additionalProperty(page),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    reviewCount: '2'
  },
  audience: {
    '@type': 'PeopleAudience',
    suggestedGender: 'unisex'
  },
  brand: {
    '@type': 'Brand',
    name: 'Samsung',
    url: 'https://www.samsung.com/br'
  },
  color: 'Branco',
  description: page.description,
  depth: {
    '@type': 'QuantitativeValue',
    value: page.depth
  },
  gtin8: '7892509112437',
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
