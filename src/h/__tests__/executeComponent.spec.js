import executeComponent from '../executeComponent'

test('Retorna a saida da execucao do component repassando os atributos e seus filhos', () => {
  const component = (attributes, children) => {
    expect(attributes).toEqual({ id: '#xablau' })
    expect(children).toEqual(['hello', 'exo!'])
  }
  executeComponent(component, { id: '#xablau' }, ['hello', 'exo!'])
})
