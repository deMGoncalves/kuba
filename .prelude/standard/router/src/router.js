import params from './params'
import urlFor from './urlFor'

function router (url, functionRef) {
  urlFor.push(...arguments)

  if (router.pageFound) return
  if (router.invalidUrl(url)) return

  params(url)
  setImmediate(functionRef)

  Reflect.set(router, 'pageFound', true)
}

Object.assign(router, {
  pageFound: false,

  invalidUrl (url) {
    const path = url.replace(/:\w+/g, '([a-z0-9-_]+)')
    const pattern = new RegExp(`^${path}$`, 'i')
    return !pattern.test(location.pathname)
  }
})

export default router
