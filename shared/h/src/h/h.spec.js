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

  test('seta o atributo for', function () {
    function Component () {
      return (
        <label htmlFor='rex' />
      )
    }

    const label = document.createElement('label')
    label.setAttribute('for', 'rex')

    expect(<Component />).toEqual(label)
  })

  test('seta o dataset', function () {
    function Component () {
      return (
        <div data-framework='rex' />
      )
    }

    const div = document.createElement('div')
    div.setAttribute('data-framework', 'rex')

    expect(<Component />).toEqual(div)
  })
})
