import h from '@kuba/h'
import container from '@kuba/container'
import Metro from '@kuba/metro'
import Material from './material'
import Origem from './origem'
import Tamanho from './tamanho'

export default () =>
  <container.Section>
    <Metro>
      <Origem />
      <Tamanho />
      <Material />
    </Metro>
  </container.Section>
