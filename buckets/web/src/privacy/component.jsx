import h from '@kuba/h'
import container from '@kuba/container'
import Site from '@kuba/site'
import text from '@kuba/text'
import Block from './block'
import Breadcrumb from './breadcrumb'
import Email from './email'
import H2 from './h2'
import Lei from './lei'
import Link from './link'
import P from './p'
import style from './style'

export default (privacy) =>
  <Site>
    <container.Article className={style.privacy} slot='main'>
      <text.H1 className={style.privacy__h1} master darker md bold>{privacy.title}</text.H1>
      <Block>
        <H2>Declaração de Privacidade</H2>
        <P>Esta Política reflete o compromisso do Kuba em garantir a privacidade, a proteção de dados pessoais e a segurança da informação dos nossos clientes. É por meio dela que buscamos demonstrar, de maneira simples e transparente, a forma pela qual cuidamos das suas informações.</P>
      </Block>
      <Block>
        <H2>Como coletamos os seus dados pessoais</H2>
        <P>O Kuba coleta dados pessoais, por meio das informações prestadas, espontaneamente, pelos próprios usuários ou pela utilização de cookies, previamente por eles consentidos.</P>
        <P>Assim, desde que consentido, podemos coletar dados pessoais relacionados ao nome do usuário, telefone, cidade, estado, organização que trabalha, cargo que ocupa, endereço de e-mail ou, ainda, ao endereço IP do seu dispositivo, à região em que se está acessando o site, ao tipo de navegador, ao sistema operacional, ao site de referência visitado, às páginas, ao histórico, ao horário de acesso ao nosso site.</P>
        <P>Utilizamos, para tanto, as seguintes bases legais: consentimento (art. 7º, I, da Lei n. 13709/18) e legítimo interesse (art. 7º, IX, da Lei n. 13709/18).</P>
      </Block>
      <Block>
        <H2>Como utilizamos os seus dados pessoais</H2>
        <P>Os dados pessoais podem ser utilizados, a critério do usuário, para fins de contato, recebimento de notícias, informativos, newsletter ou de marketing promocional.</P>
      </Block>
      <Block>
        <H2>Onde e por quanto tempo os seus dados pessoais permanecem armazenados</H2>
        <P>Os dados pessoais eventualmente armazenados pelo Kuba, permanecem retidos por um prazo, que poderá variar de acordo com  a finalidade do tratamento dos dados pessoais e a base legal utilizada.</P>
        <P>Por respeitarmos o seu direito à privacidade da informação, periodicamente, a cada 12 meses, revisamos a nossa base de dados, para saber se as informações registradas ainda são necessárias, para o alcance da finalidade, inicialmente, pretendida.</P>
        <P>Após esse prazo, eliminamos os dados pessoais da nossa base de dados, a não ser que, justificadamente, possam ser anonimizados, sem prejuízo das regulamentações que tratam acerca do tema, em especial, no que diz respeito ao cumprimento de obrigação legal ou regulatória pelo controlador.</P>
      </Block>
      <Block>
        <H2>Com quem compartilhamos os seus dados pessoais</H2>
        <P>Os dados pessoais dos usuários podem ser compartilhados com terceiros, especialmente, por meio da instalação de cookies de terceira parte. Atualmente, identificamos o compartilhamento de dados pessoais para as seguintes partes interessadas: Google Analytics. Para saber mais, acesse nossa <Link />.</P>
      </Block>
      <Block>
        <H2>Direitos dos usuários</H2>
        <P>Todos os usuários têm direito a obter da Kuba, a qualquer momento, sem o pagamento de qualquer taxa, mediante simples requisição, por meio do e-mail <Email /> informações acerca do tratamento de seus dados pessoais, especialmente, no que diz respeito à confirmação da existência de tratamento, ao acesso, à correção de dados incompletos, inexatos ou desatualizados, à anonimização, ao bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto em regulamentações legais, à portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da autoridade nacional, observados os segredos comercial e industrial, à eliminação dos dados pessoais tratados com o consentimento do titular, à informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados, à informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa e à revogação do consentimento, nos moldes da <Lei />.</P>
      </Block>
      <Block>
        <H2>Cookies</H2>
        <P>Para que possamos proporcionar uma melhor experiência aos usuários do nosso site, utilizamos pequenos arquivos de texto chamados de cookies. Para saber mais acesse a nossa <Link />.</P>
      </Block>
    </container.Article>
    <Breadcrumb />
  </Site>
