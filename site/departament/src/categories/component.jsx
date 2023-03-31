import './style'
import Bubble from '@kuba/bubble'
import container from '@kuba/container'
import h from '@kuba/h'
import Metro from '@kuba/metro'
import text from '@kuba/text'

function component () {
  return (
    <section className='categories'>
      <container.Div>
        <text.H1 master dark md highlight bold>Feugiat vivamus at</text.H1>
      </container.Div>
      <container.Div>
        <Metro>
          <Bubble className='categories__bubble'>Tortor condimentum</Bubble>
          <Bubble className='categories__bubble'>Quam quisque</Bubble>
          <Bubble className='categories__bubble'>Diam sit amet</Bubble>
          <Bubble className='categories__bubble'>Nisl suscipit</Bubble>
          <Bubble className='categories__bubble'>Non quam lacus</Bubble>
          <Bubble className='categories__bubble'>Suspendisse faucibus</Bubble>
          <Bubble className='categories__bubble'>Consectetur adipiscing</Bubble>
          <Bubble className='categories__bubble'>Elit pellentesque</Bubble>
        </Metro>
      </container.Div>
    </section>
  )
}

export default component
