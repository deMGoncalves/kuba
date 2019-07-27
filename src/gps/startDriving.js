import routes from './routes'

Object.assign(window, {
  onload () {
    const [route, destity] = routes
      .filter(([route]) => route.test(location.pathname))
      .shift()

    destity(...route.exec(location.pathname).slice(1))
  }
})
