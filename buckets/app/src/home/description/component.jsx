import h from '@kuba/h'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'

export default (props) =>
  <Story className={[style.description, props.className]}>
    <text.P className={style.description__p} master medium>Ninguém precisa ter muitas habilidades para desenvolver um software que funcione, fazer direito é outra história. Desenvolver um software de maneira correta é um desafio que deixo lançado. Requer maturidade e conhecimentos que a maioria dos programadores ainda não tem.</text.P>
    <text.P className={style.description__p} master medium>Quando focamos no domínio, minimizamos a quantidade de programadores para desenvolver e sustentar um software. As mudanças se tornam cirúrgicas, simples e fáceis. Deixamos de ser eficiente e nos tornamos eficazes. As funcionalidades e flexibilidades são maximizadas.</text.P>
  </Story>
