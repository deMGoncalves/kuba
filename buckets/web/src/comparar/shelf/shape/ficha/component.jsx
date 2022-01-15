import h from '@kuba/h'
import story from '@kuba/story'
import style from './style'

export default (ficha) =>
  <story.Section className={style.ficha}>
    {ficha.concave}
    {ficha.flag}
    {ficha.laminas}
    {ficha.lixa}
    {ficha.marca}
    {ficha.material}
    {ficha.monatgem}
    {ficha.nose}
    {ficha.origem}
    {ficha.tail}
    {ficha.tamanho}
    {ficha.tipo}
    {ficha.wheelbase}
  </story.Section>
