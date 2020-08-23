import h from '@rex/h'

describe('h', function () {
  test('cria um elemento', function () {
    function Component () {
      return (
        <div>Rex</div>
      )
    }

    const el = document.createElement('div')
    el.innerHTML = 'Rex'

    expect(<Component />).toEqual(el)
  })
})
