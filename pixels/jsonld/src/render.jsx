import * as f from '@kuba/f'
import graph from './graph'
import h, { render } from '@kuba/h'

const jsonld = () =>
  render(
    document.body,
    <script type='application/ld+json'>
      {
        JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': f.filter(graph, f.compose(f.not, f.isEmpty)),
          '@type': 'Schema'
        })
      }
    </script>
  )

export default f.debounce(jsonld)
