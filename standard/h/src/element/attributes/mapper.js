import * as f from '@kuba/f'
import attributesOnly from './attributesOnly'
import filter from './filter'

const mapper = f.memoize((props) => (
  f
    .from(props)
    .pipe(f.entries)
    .pipe(f.filter(f.__, attributesOnly))
    .pipe(f.map(f.__, filter))
    .done()
))

export default (props) => (
  new Map(mapper(props))
)
