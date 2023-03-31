import './style'
import Button from '@kuba/button'
import container from '@kuba/container'
import h from '@kuba/h'

function component (props) {
  return (
    <section className='hero'>
      <container.Div>
        <div className='hero__banner' half={props.half}>
          <Button.Secondary>Sed vulputate</Button.Secondary>
        </div>
      </container.Div>
    </section>
  )
}

export default component
