import * as f from '@rex/f'
import hook from '@rex/hook'
import metadata from './metadata'
import opengraph from './opengraph'
import twittercard from './twittercard'

export default hook(f.background(f.chain(metadata, opengraph, twittercard)))
