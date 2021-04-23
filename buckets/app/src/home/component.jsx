import h from '@kuba/h'
import Site from '@kuba/site'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'

export default () =>
  <Site>
    <Story className={style.home__story}>
      <text.Blockquote className={style.home__blockquote} master darke largest>
        <text.Sup className={style.home__sup} master darker>“</text.Sup>
        Javascript é como uma folha em branco, a liberdade de programar do jeito que faça sentido para o negócio
        <br />
        <text.Cite className={style.home__cite} master darker small>- deMGoncalves</text.Cite>
      </text.Blockquote>
      <br />
      <text.P>
        Ninguém precisa ter muitas habilidades para desenvolver um software que funcione, fazer direito é outra história. Desenvolver um software de maneira correta é um desafio que deixo lançado. Requer maturidade e conhecimentos que a maioria dos programadores ainda não tem.
      </text.P>
      <br />
      <text.P>
        Quando focamos no domínio, minimizamos a quantidade de programadores para desenvolver e sustentar um software. As mudanças se tornam cirúrgicas, simples e fáceis. Deixamos de ser eficiente e nos tornamos eficazes. As funcionalidades e flexibilidades são maximizadas.
      </text.P>
      <br />
      <text.P>
        Meus entregáveis são simples, pequenos e imperfeito. Minha visão está além da programação.
      </text.P>
    </Story>
  </Site>
