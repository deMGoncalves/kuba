import h from '@kuba/h'
import container from '@kuba/container'
import story from '@kuba/story'
import style from './style'

export default (ficha) =>
  <story.Section className={style.ficha}>
    <container.Div className={style.ficha__div}>
      {ficha.concave}
      {ficha.flag}
      {ficha.laminas}
      {ficha.lixa}
      {ficha.marca}
      {ficha.material}
      {ficha.montagem}
      {ficha.nose}
      {ficha.origem}
      {ficha.tail}
      {ficha.tamanho}
      {ficha.tipo}
      {ficha.wheelbase}
    </container.Div>
  </story.Section>
