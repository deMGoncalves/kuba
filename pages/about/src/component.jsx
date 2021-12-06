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
        <container.Section className={style.about__section}>
          <hgroup className={style.about__hgroup}>
            <text.H1 master darker xxl bold>o kuba</text.H1>
            <text.H2 master xxxs>simples, pequeno e imperfeito, uma visao alem da programacao</text.H2>
          </hgroup>
          <text.P master dark xs>
            ninguem precisa ter muitas habilidades para desenvolver um produto que funcione, fazer direito eh outra história. desenvolver um produto de maneira correta eh um desafio que deixo lancado. requer maturidade e conhecimentos que a maioria dos programadores ainda nao tem.
          </text.P>
          <text.P master dark xs>
            quando focamos no dominio, minimizamos a quantidade de programadores para desenvolver e sustentar um produto. as mudancas se tornam cirurgicas, simples e faceis. deixamos de ser eficiente e nos tornamos eficazes. as funcionalidades e flexibilidades sao maximizadas.
          </text.P>
          <text.P master dark xs>
            criei este projeto de referencia como a unica fonte da verdade para todos os processos e crencas. como qualquer ferramenta ou metodologia, ela so funcionara corretamente quando usada da maneira certa. e o "certo" so pode ser determinado por meio de um processo de polimento e pratica constantes.
          </text.P>
        </container.Section>
        <container.Section className={style.about__section}>
          <hgroup className={style.about__hgroup}>
            <text.H2 master darker lg bold>objetivo</text.H2>
          </hgroup>
          <text.P master dark xs>
            o kuba nao eh uma vontade recente, o plano de ter uma arquitetura criado a partir das minhas experiencias e metodologias eh um sonho que comecou em marco de 2016. uni essa vontade com o momento profissional que estou vivendo para unir o util ao agradavel. por isso, este projeto acumula alguns objetivos bastante transparentes.
          </text.P>
        </container.Section>
        <container.Section className={style.about__section}>
          <hgroup className={style.about__hgroup}>
            <text.H3 master darker sm bold>apoio ao aprendizado</text.H3>
          </hgroup>
          <text.P master dark xs>
            o primeiro e, talvez maior, papel deste projeto eh servir como apoio aos meus estudos, dos meus colegas de trabalho e de qualquer pessoa interessada, tornando nossos conceitos mais acessiveis e fáceis de compreender atraves de um exemplo pratico.
          </text.P>
        </container.Section>
        <container.Section className={style.about__section}>
          <hgroup className={style.about__hgroup}>
            <text.H4 master darker sm bold>piloto para versão em rust</text.H4>
          </hgroup>
          <text.P master dark xs>
            estou trabalhando para a versao deste projeto totalmente escrito em rust (hoje eh 100% em javascript), a ideia eh que esta arquitetura seja um grande facilitador para o desenvolvedor. e claro, naturalmente ter um boilerplate aberto ao publico tambem ajuda a divulgar minhas metodologia de codificacao.
          </text.P>
        </container.Section>
      </story.Article>
    </Fragment>
  </Site>
