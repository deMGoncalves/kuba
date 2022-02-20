import h from '@kuba/h'
import container from '@kuba/container'
import Metro from '@kuba/metro'
import Especificacao from './especificacao'
import Concave from './concave'
import Flares from './flares'
import Material from './material'
import Nose from './nose'
import Origem from './origem'
import Pro from './pro'
import Tail from './tail'
import Tamanho from './tamanho'
import Wells from './wells'

export default () =>
  <container.Section>
    <Metro>
      <Origem />
      <Tamanho />
      <Material />
      <Especificacao>
        <Pro />
        <Nose />
        <Tail />
        <Concave />
        <Wells />
        <Flares />
      </Especificacao>
    </Metro>
  </container.Section>
