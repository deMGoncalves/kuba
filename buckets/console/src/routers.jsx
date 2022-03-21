import h from '@kuba/h'
import render from './render'
import router from '@kuba/router'
import Sandbox from '@kuba/sandbox'

router('/', async function home () {
  render(
    <main>
      <Sandbox require={() => new Worker(new URL('./home', import.meta.url))} />
    </main>
  )
})
