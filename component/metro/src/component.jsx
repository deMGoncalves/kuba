import './style'
import h from '@kuba/h'

function component (_metro, children) {
  return (
    <div className='metro'>
      <div className='metro__container'>
        {children}
      </div>
    </div>
  )
}

export default component
