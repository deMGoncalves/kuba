import h from '../'

test('Retornar um elemento div quando executar a funcao h passando parametro "div"', () => {
  expect(h('div')).toEqual(<div />)
})

test('Retornar um elemento p quando executar a funcao h passando o parametro "p"', () => {
  expect(h('p')).toEqual(<p />)
})

test('Retornar um elemento div com o id egual a johzao quando executar a funcao h passando o segundo parametro um objeto com o id', () => {
  expect(h('div', { id: 'johzao' })).toEqual(<div id='johzao' />)
})

test('Retornar um elemento p com a classe egual a johzao quando executar a funcao h passando o segundo parametro um objeto com a classe', () => {
  expect(h('p', { class: 'johzao' })).toEqual(<p class='johzao' />)
})

test('Deve retornar um DIV com o dataset.name johzao quando executar a funcao h passando o atributo data-name johzao', () => {
  expect(h('div', { 'data-name': 'johzao' })).toEqual(<div data-name='johzao' />)
})

test('Deve retornar um DIV quando executar a funcao h passando null como atributo', () => {
  expect(h('div', null)).toEqual(<div />)
})

test('Deve retornar um DIV quando executar a funcao h passando qualquer valor como atributo', () => {
  expect(h('div', new Date())).toEqual(<div />)
})

test('Deve retornar um DIV com o evento de click quando executar a funcao h passando o evento onClick', () => {
  const clickHere = () => { expect(true).toBeTruthy() }
  h('div', { onClick: clickHere }).dispatchEvent(new Event('click'))
})

test('Deve retornar um P com o text Johzao quando executar a funcao h passando o texto Johzao', () => {
  expect(h('p', null, 'Johzao')).toEqual(<p>Johzao</p>)
})

test('Deve retornar um P com o nome completo do Johzao quando executar a funcao h passando  o nome completo', () => {
  expect(h('p', null, h('strong', null, 'Johzao'), ' da Silva'))
    .toEqual(
      <p>
        <strong>Johzao</strong> da Silva
      </p>
    )
})

test('Deve retornar um UL com as frutas de uma lista quando executar a funcao h passando a colecao ["abacaxi", "morango"]', () => {
  expect(h('ul', null, ['abacaxi', 'morango'].map(fruta => h('li', null, fruta))))
    .toEqual(
      <ul>
        <li>abacaxi</li>
        <li>morango</li>
      </ul>
    )
})

test('Deve retornar um Component quando executar a funcao h passando uma funcao como parametro', () => {
  const Name = (props) =>
    h('p', null, props.name)

  expect(h(Name, { name: 'Johzao' })).toEqual(<p>Johzao</p>)
})
