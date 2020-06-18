import * as f from '@f'
import organization from './organization'
import review from './review'

export default (page) => ({
  '@context': 'http://schema.org/',
  '@type': 'Product',
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'E-mail (convencional)',
      value: 'Sim'
    },
    {
      '@type': 'PropertyValue',
      name: 'Flash',
      value: 'Sim'
    },
    {
      '@type': 'PropertyValue',
      name: 'TV Digital',
      value: 'Sim'
    },
    {
      '@type': 'PropertyValue',
      name: 'Redes Sociais',
      value: 'Sim'
    },
    {
      '@type': 'PropertyValue',
      name: 'Rádio FM',
      value: 'Sim'
    },
    {
      '@type': 'PropertyValue',
      name: 'Wifi',
      value: 'Sim'
    },
    {
      '@type': 'PropertyValue',
      name: 'Cor',
      value: 'Branco'
    },
    {
      '@type': 'PropertyValue',
      name: 'Marca',
      value: 'Samsung'
    },
    {
      '@type': 'PropertyValue',
      name: 'Resolução Gravação de vídeo',
      value: 'FHD'
    },
    {
      '@type': 'PropertyValue',
      name: 'GPS/AGPS',
      value: 'Sim'
    },
    {
      '@type': 'PropertyValue',
      name: 'Resolução',
      value: '6,4"'
    },
    {
      '@type': 'PropertyValue',
      name: 'Resolução Display (Pixels)',
      value: '720 x 1560'
    },
    {
      '@type': 'PropertyValue',
      name: 'Banda',
      value: ['B1, B2, B3, B4, B5, B7, B8, B12, B13, B17, B20, B26, B28, B66']
    },
    {
      '@type': 'PropertyValue',
      name: 'EDGE',
      value: 'Sim'
    },
    {
      '@type': 'PropertyValue',
      name: 'Câmera Frontal',
      value: '16MP'
    },
    {
      '@type': 'PropertyValue',
      name: 'Câmera Traseira',
      value: '25MP + 5MP + 8MP Ultra Wide 123°'
    },
    {
      '@type': 'PropertyValue',
      name: 'Agenda Telefônica (número de contatos)',
      value: 'De acordo com a memória do aparelho'
    },
    {
      '@type': 'PropertyValue',
      name: 'Tecnologia',
      value: '4G'
    },
    {
      '@type': 'PropertyValue',
      name: 'Suporte a Cartão Micro SD',
      value: 'Até 512 GB'
    },
    {
      '@type': 'PropertyValue',
      name: 'Memória RAM',
      value: '4 GB'
    },
    {
      '@type': 'PropertyValue',
      name: 'Processador',
      value: 'OctaCore 1.8Ghz'
    },
    {
      '@type': 'PropertyValue',
      name: 'LTE (4G)',
      value: 'Sim'
    },
    {
      '@type': 'PropertyValue',
      name: 'Chip',
      value: 'Nano'
    },
    {
      '@type': 'PropertyValue',
      name: 'GPRS',
      value: 'Sim'
    },
    {
      '@type': 'PropertyValue',
      name: 'Dual Chip',
      value: 'dual'
    },
    {
      '@type': 'PropertyValue',
      name: 'SMS',
      value: 'Sim'
    },
    {
      '@type': 'PropertyValue',
      name: 'Bluetooth',
      value: 'Sim'
    },
    {
      '@type': 'PropertyValue',
      name: 'Medidas do Aparelho',
      value: '15,8 x 7,4 x 0,7'
    },
    {
      '@type': 'PropertyValue',
      name: 'Sistema Operacional',
      value: 'Android 9.0'
    },
    {
      '@type': 'PropertyValue',
      name: 'Peso do aparelho (gr)',
      value: '169g'
    },
    {
      '@type': 'PropertyValue',
      name: 'EAN',
      value: ['7892509112437, 7892509112147']
    },
    {
      '@type': 'PropertyValue',
      name: 'NCM',
      value: '8517.12.31'
    },
    {
      '@type': 'PropertyValue',
      name: 'Conteúdo da Embalagem',
      value: '01 Smartphone, 01 Carregador, 01 Cabo USB, 01 Fone de ouvido, 01 Extrator de Chip, 01 Manual do usuário'
    },
    {
      '@type': 'PropertyValue',
      name: 'Destaque',
      value: 'Sale'
    },
    {
      '@type': 'PropertyValue',
      name: 'Tamanho',
      value: 'Único'
    }
  ],
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
  description: f.or(page.description, ''),
  gtin8: '7892509112437',
  height: {
    '@type': 'QuantitativeValue',
    value: '16 cm'
  },
  image: f.or(page.image, ''),
  model: 'SM-A307GT/DS',
  name: f.or(page.title, 'Zuen'),
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
  productID: '1EAVNB1BN',
  review,
  sameAs: 'https://www.samsung.com/br/smartphones/galaxy-a30s-a307/SM-A307GZKBZTO',
  sku: '1EAVNDRKA',
  url: location.href,
  weight: {
    '@type': 'QuantitativeValue',
    value: '109 g'
  },
  width: {
    '@type': 'QuantitativeValue',
    value: '7 cm'
  }
})
