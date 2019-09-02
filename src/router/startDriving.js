import paths from './paths'

Object.assign(window, {

  /**
   * Quando o window dispara o evento onload sera feito uma busca de uma rota compativel
   *
   * @name onload
   * @function
   * @access public
   * @returns {undefined} Nao retorna nada
   */
  onload () {
    const [route, destity] = paths
      .filter(([route]) => route.test(location.pathname))
      .shift()

    destity(...route.exec(location.pathname).slice(1))
  }
})
