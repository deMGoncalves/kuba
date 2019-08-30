import paths from './paths'

Object.assign(window, {
  onload () {
    const [route, destity] = paths
      .filter(([route]) => route.test(location.pathname))
      .shift()

    destity(...route.exec(location.pathname).slice(1))
  }
})
