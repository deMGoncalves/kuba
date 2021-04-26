import h from '@kuba/h'
import Site from '@kuba/site'
import Story from '@kuba/story'
import text from '@kuba/text'
import Cite from './cite'
import Summary from './summary'
import style from './style.css'

export default () =>
  <Site className={style.home}>
    <Cite className={style.home__cite} />
    <Summary className={style.home__summary} />
    <Story className={style.home__story}>
      <text.P className={style.home__p} master medium>Ninguém precisa ter muitas habilidades para desenvolver um software que funcione, fazer direito é outra história. Desenvolver um software de maneira correta é um desafio que deixo lançado. Requer maturidade e conhecimentos que a maioria dos programadores ainda não tem.</text.P>
      <br />
      <text.P className={style.home__p} master medium>Quando focamos no domínio, minimizamos a quantidade de programadores para desenvolver e sustentar um software. As mudanças se tornam cirúrgicas, simples e fáceis. Deixamos de ser eficiente e nos tornamos eficazes. As funcionalidades e flexibilidades são maximizadas.</text.P>
    </Story>
  </Site>
