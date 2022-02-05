import h from '@kuba/h'
import container from '@kuba/container'
import Site from '@kuba/site'
import text from '@kuba/text'
import Block from './block'
import Breadcrumb from './breadcrumb'
import Contato from './contato'
import H2 from './h2'
import P from './p'
import style from './style'

export default (cookies) =>
  <Site>
    <container.Article className={style.cookies} slot='main'>
      <text.H1 className={style.cookies__h1} master darker md bold>{cookies.title}</text.H1>
      <Block>
        <H2>Introdução</H2>
        <P>Para que possamos proporcionar uma melhor experiência aos usuários do nosso site, utilizamos pequenos arquivos de texto chamados de cookies. Esta Política fornece as principais informações relacionadas à utilização de cookies em nosso site.</P>
      </Block>
      <Block>
        <H2>Cookie</H2>
        <P>Um cookie é um pequeno arquivo de texto utilizado pelo nosso site, quando visitado por um usuário, com o objetivo de permitir um funcionamento adequado da plataforma, obter informações mais precisas e otimizar nossas campanhas de marketing e publicidade. Eles podem ser de primeira parte, quando pertencentes ao nosso próprio domínio ou de terceira parte, quando relacionados a um domínio diferente. Especificamente, utilizamos as seguintes categorias de cookies: cookies essenciais ou estritamente necessários, cookies de desempenho ou analíticos e cookies de publicidade.</P>
      </Block>
      <Block>
        <H2>Cookies estritamente necessários (0)</H2>
        <P>Os cookies estritamente necessários permitem um funcionamento adequado do nosso site, não coletando ou armazenando informações sobre você ou em relação às suas preferências. Normalmente, eles só são configurados em resposta a ações levadas a cabo por si e que correspondem a uma solicitação de serviços, tais como definir as suas preferências de privacidade, iniciar sessão ou preencher formulários. Por essa razão, não é possível desabilitá-los.</P>
      </Block>
      <Block>
        <H2>Cookies de desempenho (2)</H2>
        <P>Os cookies de desempenho ou cookies analíticos são utilizados para obter informações anonimizadas acerca dos perfis dos usuários que visitam o nosso site.  É por meio deles que conseguimos medir a experiência dos visitantes, a fim de melhorar o desempenho e navegabilidade do nosso site. Se você não permitir a utilização desses cookies, não saberemos quando você visitou nosso site, nem, tampouco, de que maneira o utilizou.</P>
      </Block>
      <Block>
        <H2>Cookies de publicidade (0)</H2>
        <P>Os cookies de publicidade são utilizados para se criar um perfil dos visitantes e de suas preferências. É por meio dessas informações que conseguimos identificar as suas escolhas e utilizá-las em campanhas de marketing ou em outros serviços similares. Podem ser usados, também, por terceiras partes para construir um perfil sobre os seus interesses e mostrar-lhe anúncios relevantes em outros websites. Sem a utilização desses cookies, não conseguiremos ser mais assertivos no oferecimento de produtos e serviços constantes em nosso site.</P>
      </Block>
      <Block>
        <H2>Gerenciamento de cookies</H2>
        <P>A maioria dos navegadores permite gerenciar as preferências de cookies e outros dispositivos de armazenamento. Para desativar os cookies em seu navegador, siga as instruções normalmente localizadas nos menus “Ajuda”, “Ferramentas” ou “Editar” no seu navegador. Observe que a desativação de uma das categorias de cookies não exclui, automaticamente, os cookies armazenados previamente em seu navegador, devendo ser realizada de forma manual pelo usuário.</P>
      </Block>
      <Block>
        <H2>Dúvidas</H2>
        <P>Para mais informações, entre em contato com o nosso encarregado de proteção de dados pessoais, por meio do e-mail <Contato />.</P>
      </Block>
    </container.Article>
    <Breadcrumb />
  </Site>
