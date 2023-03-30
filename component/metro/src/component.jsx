import './styled'
import container from '@kuba/container'
import h from '@kuba/h'

function component (_metro, children) {
  return (
    <section className='metro'>
      <container.Div>
        <div className='metro__container'>
          {children}
        </div>
      </container.Div>
    </section>
  )
}

export default component
