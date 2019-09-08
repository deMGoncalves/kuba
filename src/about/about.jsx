import h from '@h'
import Back from '@/back'
import Container from '@/container'
import Title from '@/title'

const component = () =>
  <main>
    <Back />
    <Container type='fit'>
      <Title>Simples, pequeno e imperfeito · uma visão além da programação</Title>
      <p>Se você procura por um Guia de Estilo, Design Pattern, Code Pattern, Anti Pattern, Programação Orientado a Objeto, Apecto, Funcional com uma pitada de Programação Reativa e tudo isso desenvolvido sobre uma Arquitetura Vanilla JS, então siga em frente! Estes estilos são baseados em minha experiência com desenvolvimento Javascript.</p>
      <br />
      <p>A proposta deste repositório é fornecer uma direção na construção de uma Arquitetura sobre o DDD (Domain Driven Design), mostrando convenções que uso, e o mais importante, porque eu as escolhi.</p>
      <br />
      <p>Para eventuais erros de digitação e/ou tradução, favor enviar um pull-request!</p>
    </Container>
  </main>

export default component
