import h, { render } from '@rex/sandbox'
import * as f from '@rex/f'
import graph from './graph'

export default f.debounce(() =>
  render(
    <script type='application/ld+json'>
      {
        JSON.stringify({
          "@context":"https://schema.org",
          "@graph": f.filter(graph, f.compose(f.not, f.isEmpty)),
          "@type":"Schema"
        })
      }
    </script>
  ))
