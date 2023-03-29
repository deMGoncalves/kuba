import './style'
import Button from '@kuba/button'
import container from '@kuba/container'
import h from '@kuba/h'
import text from '@kuba/text'

function component (props) {
  return (
    <section className='hero'>
      <container.Div>
        <div className='hero__banner' half={props.half}>
          <text.H1 master dark md highlight bold center>Iaculis nunc sed augue lacus viverra vitae</text.H1>
          <Button.Secondary>Sed vulputate</Button.Secondary>
        </div>
      </container.Div>
    </section>
  )
}

export default component
