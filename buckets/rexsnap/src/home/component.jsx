import h from '@rex/h'
import Site from '@site'
import Features from './features'
import Heros from './heros'
import Stories from './stories'

export default () =>
  <Site>
    <Heros />
    <Stories />
    <Features />
  </Site>
