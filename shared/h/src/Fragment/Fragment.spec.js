import h, { Fragment } from '@rex/h'

describe('Fragment', function () {
  test('cria um fragmentmento', function () {
    function Component () {
      return (
        <></>
      )
    }

    expect(<Component />).toEqual(document.createDocumentFragment())
  })
})
