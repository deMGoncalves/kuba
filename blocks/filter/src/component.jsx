import container from '@kuba/container'
import Flex from './flex'
import h from '@kuba/h'
import Material from './material'
import Metro from '@kuba/metro'
import Montagem from './montagem'
import Origem from './origem'
import style from './style'
import Tags from './tags'
import Tamanho from './tamanho'
import Tipo from './tipo'
import Toppings from './toppings'

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
    </Metro>
    <Tags />
  </container.Section>
