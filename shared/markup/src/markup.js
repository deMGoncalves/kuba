import * as f from '@rex/f'
import hook from '@rex/hook'
import metadata from './metadata'
import opengraph from './opengraph'
import twittercard from './twittercard'

export default (config) =>
  hook((page) =>
    f.chain(metadata, opengraph, twittercard)(page, config))
