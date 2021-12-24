import h, { render } from '@kuba/h'
import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import graph from './graph'

const jsonld = () =>
  f.and(agent.isBot, env.isProd) && (
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
  )

export default f.debounce(jsonld)
