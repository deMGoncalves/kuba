import h, { Fragment } from '@kuba/h'
import container from '@kuba/container'
import text from '@kuba/text'
import story from '@kuba/story'
import Site from '@kuba/site'
import style from './style'

export default () =>
  <Site>
    <Fragment slot='hot'>
      <story.Article className={style.about__article}>
        <container.HGroup className={style.about__hgroup}>
          <text.H1 master darker xl highlight medium>o kuba</text.H1>
          <text.H2 master xxxs>simples, pequeno e imperfeito, uma visao alem da programacao</text.H2>
        </container.HGroup>
        <container.Section className={style.about__section}>
          <text.P master dark xs>
            ninguem precisa ter muitas habilidades para desenvolver um produto que funcione, fazer direito eh outra história. desenvolver um produto de maneira correta eh um desafio que deixo lancado. requer maturidade e conhecimentos que a maioria dos programadores ainda nao tem.
          </text.P>
          <text.P master dark xs>
            quando focamos no dominio, minimizamos a quantidade de programadores para desenvolver e sustentar um produto.
          </text.P>
          <text.P master dark xs>
            as mudancas se tornam cirurgicas, simples e faceis. deixamos de ser eficiente e nos tornamos eficazes.
          </text.P>
          <text.P master dark xs>
            as funcionalidades e flexibilidades sao maximizadas.
          </text.P>
        </container.Section>
      </story.Article>
    </Fragment>
  </Site>
