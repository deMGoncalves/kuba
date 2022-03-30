import Concave from './concave'
import container from '@kuba/container'
import Especificacao from './especificacao'
import Flares from './flares'
import Flex from './flex'
import h from '@kuba/h'
import Material from './material'
import Metro from '@kuba/metro'
import Montagem from './montagem'
import Origem from './origem'
import Recorte from './recorte'
import Simetrico from './simetrico'
import style from './style'
import Tags from './tags'
import Tamanho from './tamanho'
import Tipo from './tipo'
import Toppings from './toppings'
import Wells from './wells'

export default () =>
  <container.Section className={style.filter}>
    <Metro>
      <Tipo />
      <Origem />
      <Tamanho />
      <Material />
      <Flex />
      <Montagem />
      <Toppings />
      <Especificacao>
        <Concave />
        <Wells />
        <Flares />
        <Recorte />
        <Simetrico />
      </Especificacao>
    </Metro>
    <Tags />
  </container.Section>
