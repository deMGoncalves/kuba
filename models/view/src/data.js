export default (view) =>
  ({
    '@id': '#webview',
    '@type': 'WebSite',
    description: view.description,
    name: view.name,
    /*
    potentialAction: {
      '@id': '#searchaction'
    },
    */
    publisher: {
      '@id': '#organization'
    },
    url: view.url
  })
