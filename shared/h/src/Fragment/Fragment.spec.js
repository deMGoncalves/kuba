import h, { Fragment } from '@rex/h'

describe('Fragment', function () {
  test('cria um fragmentmento', function () {
    function Component () {
      return (
        <>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
        </>
      )
    }

    const fragment = document.createDocumentFragment()
    const html = document.createElement('li')
    const css = document.createElement('li')
    const js = document.createElement('li')

    html.innerHTML = 'HTML'
    css.innerHTML = 'CSS'
    js.innerHTML = 'JS'

    fragment.append(html)
    fragment.append(css)
    fragment.append(js)

    expect(<Component />).toEqual(fragment)
  })
})
