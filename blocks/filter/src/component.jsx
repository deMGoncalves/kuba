import h from '@kuba/h'
import container from '@kuba/container'
import Metro from '@kuba/metro'
import Origem from './origem'

export default () =>
  <container.Section>
    <Metro>
      <Origem />
    </Metro>
  </container.Section>
