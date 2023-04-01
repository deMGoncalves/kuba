import './style'
import Bubble from '@kuba/bubble'
import Catalog from './catalog'
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
          {Catalog.categoires.map((category) => (
            <Bubble className='categories__bubble'>{category}</Bubble>
          ))}
        </Metro>
      </container.Div>
    </section>
  )
}

export default component
