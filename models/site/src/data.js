export default (site) =>
  ({
    '@id': '#website',
    '@type': 'WebSite',
    description: site.description,
    name: site.name,
    potentialAction: {
      '@id': '#searchaction'
    },
    publisher: {
      '@id': '#organization'
    },
    url: site.url
  })
