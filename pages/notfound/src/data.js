export default (page) =>
  ({
    '@id': '#webpage',
    '@type': 'WebPage',
    breadcrumb: {
      '@id': '#breadcrumb'
    },
    description: page.description,
    inLanguage: page.language,
    isPartOf: {
      '@id': '#website'
    },
    name: page.title,
    url: page.url
  })
