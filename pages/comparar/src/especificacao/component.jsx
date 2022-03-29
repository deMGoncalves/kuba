import Concave from './concave'
import Flares from './flares'
import Flex from './flex'
import h, { Fragment } from '@kuba/h'
import Montagem from './montagem'
import Nose from './nose'
import Recortes from './recortes'
import Simetrico from './simetrico'
import Tail from './tail'
import Wells from './wells'

export default () =>
  <>
    <Nose />
    <Tail />
    <Concave />
    <Wells />
    <Flares />
    <Recortes />
    <Montagem />
    <Flex />
    <Simetrico />
  </>
