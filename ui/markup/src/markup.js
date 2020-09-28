import { idle } from '@rex/h'
import * as f from '@rex/f'
import hook from '@rex/hook'
import metadata from './metadata'
import opengraph from './opengraph'
import twittercard from './twittercard'

export default hook((page) =>
  idle(() =>
    f.chain(metadata, opengraph, twittercard)(page)))
