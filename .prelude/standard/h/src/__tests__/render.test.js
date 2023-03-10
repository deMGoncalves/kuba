import render from '../render'

describe('standard.h.render', () => {
  let append
  let element

  beforeEach(() => {
    append = jest.spyOn(document.body, 'append')

    element = {
      [render.flow]: jest.fn().mockReturnValue(HTMLElement)
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Apenda o HTMLElement retornado do contrato render.flow no element', () => {
    render(document.body, element)

    expect(element[render.flow]).toHaveBeenCalledTimes(1)
    expect(append).toHaveBeenCalledTimes(1)
    expect(append).toHaveBeenCalledWith(HTMLElement)
  })
})
