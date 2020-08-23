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

  test('seta o atributo id', function () {
    function Component () {
      return (
        <div id='rex' />
      )
    }

    const div = document.createElement('div')
    div.setAttribute('id', 'rex')

    expect(<Component />).toEqual(div)
  })
})
