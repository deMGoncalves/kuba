import * as f from '@f'

export default (page) => ({
  '@context': 'http://schema.org/',
  '@type': 'Product',
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Memoria',
      unitCode: 'M34',
      unitText: 'GB',
      value: '64'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '3.5',
    reviewCount: '11'
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
  description: f.or(page.description, ''),
  image: 'https://cea.vteximg.com.br/arquivos/ids/10849279/Smartphone-Samsung-A307GT-Galaxy-A30S-64GB-Branco-9868849-Branco_1.jpg',
  model: 'SM-A307GT/DS',
  mpn: '9868849-Branco',
  name: f.or(page.title, 'Zuen'),
  offers: {
    '@type': 'AggregateOffer',
    highPrice: '1399.00',
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
          price: '1399.00',
          priceCurrency: 'BRL'
        },
        priceValidUntil: '2040-06-01',
        seller: {
          '@type': 'Organization',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.7',
            reviewCount: '1840'
          },
          logo: 'https://res.cloudinary.com/djzuqd5ir/image/upload/f_auto,q_auto/v1580463533/header/logo_cea_V3_branco_kjzbp1.png',
          name: 'C&A',
          url: 'https://www.cea.com.br'
        },
        url: 'https://www.cea.com.br/smartphone-samsung-a307gt-galaxy-a30s-64gb-branco-9868849-branco/p'
      }
    ],
    offerCount: '2',
    priceCurrency: 'BRL'
  },
  productID: '2268118',
  review: [
    {
      '@type': 'Review',
      author: 'Ellie',
      datePublished: '2011-04-01',
      description: 'The lamp burned out and now I have to replace it.',
      name: 'Not a happy camper',
      reviewRating: {
        '@type': 'Rating',
        bestRating: '5',
        ratingValue: '1',
        worstRating: '1'
      }
    },
    {
      '@type': 'Review',
      author: 'Lucas',
      datePublished: '2011-03-25',
      description: 'Great microwave for the price. It is small and fits in my apartment.',
      name: 'Value purchase',
      reviewRating: {
        '@type': 'Rating',
        bestRating: '5',
        ratingValue: '4',
        worstRating: '1'
      }
    }
  ],
  sameAs: 'https://www.samsung.com/br/smartphones/galaxy-a30s-a307/SM-A307GZKBZTO',
  sku: '2648093',
  url: 'https://www.cea.com.br/smartphone-samsung-a307gt-galaxy-a30s-64gb-branco-9868849-branco/p'
})
