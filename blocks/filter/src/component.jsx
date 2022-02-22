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
import Tags from './tags'
import Tail from './tail'
import Tamanho from './tamanho'
import Tipo from './tipo'
import Wells from './wells'
import style from './style'

export default () =>
  <container.Section className={style.filter}>
    <Metro>
      <Tipo />
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
    <Tags />
  </container.Section>
