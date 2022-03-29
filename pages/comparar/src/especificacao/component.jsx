import h, { Fragment } from '@kuba/h'
import Concave from './concave'
import Flares from './flares'
import Nose from './nose'
import Tail from './tail'
import Wells from './wells'

export default () =>
  <>
    <Nose />
    <Tail />
    <Concave />
    <Wells />
    <Flares />
  </>
