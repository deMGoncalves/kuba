import * as f from '@f'
import paths from './paths'

/**
 * Quando o window dispara o evento onload sera feito uma busca de uma rota compativel
 *
 * @name onload
 * @function
 * @access public
 * @returns {undefined} Nao retorna nada
 */
f.assign(window, {
  onload () {
    const [path, listener] = paths
      .filter(([route]) => f.test(route, location.pathname))
      .shift()

    listener(...path.exec(location.pathname).slice(1))
  }
})
