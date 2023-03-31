import './style'
import h from '@kuba/h'

function component (_metro, children) {
  return (
    <section className='metro'>
      <div className='metro__container'>
        {children}
      </div>
    </section>
  )
}

export default component
