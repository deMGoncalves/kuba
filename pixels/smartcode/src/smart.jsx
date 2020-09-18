import h, { render } from '@rex/h'
import * as f from '@rex/f'
import schema from './schema.json'

window.addEventListener('load', () =>
  f.forEach(schema, (host) =>
    fetch(`${host}/stats.json`)
      .then(response => response.json())
      .then(stats => stats.assetsByChunkName)
      .then(assetsByChunkName =>
        f.forEach(
          f.entries(assetsByChunkName),
          ([_, url]) =>
            render(document.head, <script src={`${host}/${url}`} async />)
        )
      )
  )
)
