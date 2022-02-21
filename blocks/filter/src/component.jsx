import h from '@kuba/h'
import container from '@kuba/container'
import Metro from '@kuba/metro'
import Especificacao from './especificacao'
import Concave from './concave'
import Flares from './flares'
import Flex from './flex'
import Material from './material'
import Montagem from './montagem'
import Nose from './nose'
import Origem from './origem'
import Pro from './pro'
import Recorte from './recorte'
import Simetrico from './simetrico'
import Tail from './tail'
import Tamanho from './tamanho'
import Wells from './wells'

export default () =>
  <container.Section>
    <Metro>
      <Origem />
      <Tamanho />
      <Material />
      <Flex />
      <Montagem />
      <Especificacao>
        <Pro />
        <Nose />
        <Tail />
        <Concave />
        <Wells />
        <Flares />
        <Recorte />
        <Simetrico />
      </Especificacao>
    </Metro>
  </container.Section>
