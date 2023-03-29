import './style'
import container from '@kuba/container'
import Departament from './departament'
import h from '@kuba/h'
import text from '@kuba/text'

function component () {
  return (
    <section className='departament__title'>
      <container.Div>
        <text.H1 master dark md highlight bold>{Departament.title}</text.H1>
      </container.Div>
    </section>
  )
}

export default component
