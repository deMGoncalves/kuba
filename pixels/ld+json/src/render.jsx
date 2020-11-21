import h, { render } from '@rex/h'
import * as f from '@rex/f'
import graph from './graph'

export default f.debounce(() =>
  render(
    document.head,
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
