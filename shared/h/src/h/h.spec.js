import h from '@rex/h'

describe('h', function () {
  test('cria um elemento simples', function () {
    function Component () {
      return (
        <div />
      )
    }

    expect(<Component />).toEqual(document.createElement('div'))
  })

  test('define o id do elemento', function () {
    function Component () {
      return (
        <div id='rex' />
      )
    }

    const div = document.createElement('div')
    div.setAttribute('id', 'rex')

    expect(<Component />).toEqual(div)
  })

  test('define do class name', function () {
    function Component () {
      return (
        <div className='rex' />
      )
    }

    const div = document.createElement('div')
    div.className = 'rex'

    expect(<Component />).toEqual(div)
  })

  test('define o atributo for', function () {
    function Component () {
      return (
        <label htmlFor='rex' />
      )
    }

    const label = document.createElement('label')
    label.setAttribute('for', 'rex')

    expect(<Component />).toEqual(label)
  })

  test('define um dataset', function () {
    function Component () {
      return (
        <div data-framework='rex' />
      )
    }

    const div = document.createElement('div')
    div.setAttribute('data-framework', 'rex')

    expect(<Component />).toEqual(div)
  })

  test('define mais de um dataset', function () {
    function Component () {
      return (
        <div data-framework='rex' data-language='javascript' />
      )
    }

    const div = document.createElement('div')

    div.setAttribute('data-framework', 'rex')
    div.setAttribute('data-language', 'javascript')

    expect(<Component />).toEqual(div)
  })

  test('cria um elemento com filhos', function () {
    function Component () {
      return (
        <ul>
          <li>Rex</li>
        </ul>
      )
    }

    const ul = document.createElement('ul')
    const li = document.createElement('li')

    li.innerHTML = 'Rex'
    ul.appendChild(li)

    expect(<Component />).toEqual(ul)
  })

  test('passando atributos para o component', function () {
    function Component (props) {
      return (
        <div { ...props } />
      )
    }

    const div = document.createElement('div')
    div.setAttribute('id', 'rex')

    expect(<Component id='rex' />).toEqual(div)
  })
})
