import h from '@kuba/h'
import container from '@kuba/container'
import Metro from '@kuba/metro'
import Origem from './origem'
import Tamanho from './tamanho'

export default () =>
  <container.Section>
    <Metro>
      <Origem />
      <Tamanho />
    </Metro>
  </container.Section>
