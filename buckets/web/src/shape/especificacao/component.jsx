import h from '@kuba/h'
import style from './style'

export default (especificacao) =>
  <div className={style.especificacao}>
    {especificacao.tamanho}
    {especificacao.wheelbase}
    {especificacao.nose}
    {especificacao.tail}
    {especificacao.concave}
    {especificacao.lixa}
  </div>
