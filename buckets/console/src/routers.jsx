import h from '@kuba/h'
import router from '@kuba/router'
import Sandbox from '@kuba/sandbox'
import render from './render'

router('/', async function home () {
  render(
    <main>
      <Sandbox require={() => new Worker(new URL('./home', import.meta.url))} />
    </main>
  )
})
