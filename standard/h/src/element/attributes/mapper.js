import * as f from '@kuba/f'
import attributesOnly from './attributesOnly'
import filter from './filter'
import withValue from './withValue'

const mapper = f.memoize((props) => (
  f
    .from(props)
    .pipe(f.entries)
    .pipe(f.filter(f.__, attributesOnly))
    .pipe(f.map(f.__, filter))
    .pipe(f.filter(f.__, withValue))
    .done()
))

export default (props) => (
  new Map(mapper(props))
)
