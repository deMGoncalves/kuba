import h, { render } from '@rex/h'

export default (logo) =>
  render(
    document.head,
    <script type='application/ld+json'>
      {
        JSON.stringify({
          '@context': 'https://schema.org',
          '@id': `${logo.url}#logo`,
          '@type': 'Organization',
          logo: logo.src,
          name: logo.name,
          url: logo.url
        })
      }
    </script>
  )
