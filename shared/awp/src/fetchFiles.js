import * as f from '@rex/f'

export default (publicPath) =>
  fetch(`${publicPath}/stats.json`)
    .then(response => response.json())
    .then(stats => stats.assetsByChunkName)
    .then(assets => assets.main)
    .then(main => f.flatten([
      f.filter(main, f.test(/\.js$/)),
      f.filter(main, f.test(/\.css$/))
    ]))
