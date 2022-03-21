import Concave from './concave'
import container from '@kuba/container'
import Flares from './flares'
import Flex from './flex'
import h from '@kuba/h'
import Lixa from './lixa'
import Recortes from './recortes'
import Montagem from './montagem'
import Nose from './nose'
import Simetrico from './simetrico'
import style from './style'
import Tail from './tail'
import text from '@kuba/text'
import Wells from './wells'

export default () =>
  <container.Section className={style.especificacao}>
    <text.H2 className={style.especificacao__h2} master darker xs medium>Especificação</text.H2>
    <div className={style.especificacao__div}>
      <Nose />
      <Tail />
      <Concave />
      <Wells />
      <Flares />
      <Recortes />
      <Montagem />
      <Flex />
      <Simetrico />
      <Lixa />
    </div>
  </container.Section>
