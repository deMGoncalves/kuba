import h from '@rex/h'

describe('h', function () {
  test('cria um elemento', function () {
    function Component () {
      return (
        <div />
      )
    }

    expect(<Component />).toEqual(document.createElement('div'))
  })
})
