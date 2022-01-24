export default (site) =>
  ({
    '@id': '#website',
    '@type': 'WebSite',
    name: site.name,
    /*
    potentialAction: {
      '@id': '#searchaction'
    },
    */
    publisher: {
      '@id': '#organization'
    },
    url: site.url
  })
