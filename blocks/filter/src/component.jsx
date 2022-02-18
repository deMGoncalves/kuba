import h from '@kuba/h'
import container from '@kuba/container'
import Metro from '@kuba/metro'
import Especificacao from './especificacao'
import Material from './material'
import Nose from './nose'
import Origem from './origem'
import Tail from './tail'
import Tamanho from './tamanho'

export default () =>
  <container.Section>
    <Metro>
      <Origem />
      <Tamanho />
      <Material />
      <Especificacao>
        <Nose />
        <Tail />
      </Especificacao>
    </Metro>
  </container.Section>
