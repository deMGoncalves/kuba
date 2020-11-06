import h from '@rex/h'
import * as ui from '@ui'
import Features from './features'
import Heros from './heros'
import Stories from './stories'

export default () =>
  <ui.Template>
    <Heros />
    <Stories />
    <Features />
  </ui.Template>
