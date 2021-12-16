import h, { Fragment } from '@kuba/h'
import Article from '@kuba/article'
import Breadcrumb from '@kuba/breadcrumb'
import text from '@kuba/text'
import Site from '@kuba/site'
import schema from './schema.json'
import style from './style'

export default () =>
  <Site>
    <Fragment slot='hot'>
      <Breadcrumb paths={schema.breadcrumb} />
      <Article>
        <hgroup className={style.about__hgroup}>
          <text.H1 master darker xxl bold>quatro coisas em que acredito</text.H1>
        </hgroup>
        <hgroup className={style.about__hgroup}>
          <text.H3 master darker sm bold>cultive uma mentalidade construtiva</text.H3>
        </hgroup>
        <text.P className={style.about__p} master dark xs>
          somos todos alunos ao longo da vida e que melhoramos a si proprios. estamos interessados apenas em pessoas com codigo mental construtivo. e, portanto, tenho uma ambicao implacavel de me aprimorar - tanto profissionalmente quanto pessoalmente.
        </text.P>
        <hgroup className={style.about__hgroup}>
          <text.H3 master darker sm bold>seja criativo, mas continue responsavel</text.H3>
        </hgroup>
        <text.P className={style.about__p} master dark xs>
          documentamos nossos processos e estabelecemos prazos para nao nos limitarmos. mas ser capaz de fazer coisas repetitivas com mais rapidez e ter mais tempo para experimentos e inovacoes.
        </text.P>
        <hgroup className={style.about__hgroup}>
          <text.H3 master darker sm bold>cada interacao eh importante</text.H3>
        </hgroup>
        <text.P className={style.about__p} master dark xs>
          isso inclui tudo - todas as camadas das operacoes gerais. a maneira como nos comunicamos, trabalhamos e nos comportamos. mesmo as menores coisas podem levar a resultados fantásticos coletivamente.
        </text.P>
        <text.P className={style.about__p} master dark xs>
          chamo isso de sinergia.
        </text.P>
        <hgroup className={style.about__hgroup}>
          <text.H3 master darker sm bold>nao seja uma vitima</text.H3>
        </hgroup>
        <text.P className={style.about__p} master dark xs>
          a mentalidade de vitima eh evitar uma oportunidade de lidar com um desafio. alguns tendem a cair facilmente no ato de nao tentar ou simplesmente desistir, geralmente culpando as circunstancias. so pode trazer sentimentos ruins, como raiva, desesperança e depressao.
        </text.P>
        <text.P className={style.about__p} master dark xs>
          para mim, os problemas sao tao naturais quanto a propria vida, e preferiro preferir resolve-los. eles nos ensinam algumas licoes de vida valiosas, trazendo novas experiencias e conhecimentos que nos tornam melhores.
        </text.P>
        <hgroup className={style.about__hgroup}>
          <text.H2 master darker lg bold>por que existimos:</text.H2>
        </hgroup>
        <hgroup className={style.about__hgroup}>
          <text.H3 master darker sm bold>proposito</text.H3>
        </hgroup>
        <text.P className={style.about__p} master dark xs>
          estou aqui para ajudar os fundadores de saas e proprietarios de produtos digitais a criar produtos eficazes, esteticamente atraentes e significativos! aqueles que se tornarão uma virada de jogo, entregando verdadeiro valor aos seus clientes, fazendo-os sentir-se felizes e encantadores.
        </text.P>
        <hgroup className={style.about__hgroup}>
          <text.H3 master darker sm bold>missao</text.H3>
        </hgroup>
        <text.P className={style.about__p} master dark xs>
          minha intencao eh fornecer assistencia personalizada a cada proprietario de produto digital, com um conhecimento profundo do produto, iguarias comerciais e tendencias modernas de design de produto digital.
        </text.P>
        <hgroup className={style.about__hgroup}>
          <text.H3 master darker sm bold>visao</text.H3>
        </hgroup>
        <text.P className={style.about__p} master dark xs>
          cada dono do produto digital deve estar rodeado por uma equipe de profissionais motivados. uma equipe que funciona como um organismo, interconectada por objetivos, visao e processos de design compartilhados.
        </text.P>
        <text.P className={style.about__p} master dark xs>
          dessa forma, voce estaria a frente de seus concorrentes e sempre um passo a frente deles.
        </text.P>
      </Article>
    </Fragment>
  </Site>
