import * as f from '@rex/f'
import hook from '@rex/hook'
import metadata from './metadata'
import opengraph from './opengraph'
import schema from './schema.json'
import twittercard from './twittercard'

export default hook((page) =>
  f.chain(metadata, opengraph, twittercard)(page, schema))
