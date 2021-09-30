export default (logo) =>
  ({
    '@id': '#organization',
    '@type': 'Organization',
    logo: logo.url,
    name: logo.name,
    url: logo.href
  })
