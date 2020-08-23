import h, { Fragment } from '@rex/h'

describe('h', function () {
  test('cria um fragmento para retorna mais de um elemento root', function () {
    const Faq = () =>
      <>
        <h1>Pergunta</h1>
        <p>respost</p>
      </>

    expect(<Faq />).toEqual()
  })
})
