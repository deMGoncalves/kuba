import h from '@kuba/h'
import router from '@kuba/router'
import render from './render'

router('/', async function home () {
  const { default: Todo } = await import('@kuba/todo' /* webpackChunkName: "todo" */)
  render(<Todo />)
})
