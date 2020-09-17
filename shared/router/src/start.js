import * as f from '@rex/f'
import paths from './paths'
import stub from './stub'

/**
 * Quando o window dispara o evento onload sera feito uma busca de uma rota compativel
 *
 * @name onload
 * @function
 * @access public
 * @return {undefined} Nao retorna nada
 */
f.assign(window, {
  onload () {
    const [path, listener] = f.or(
      paths
        .filter(([route]) => f.test(route, location.pathname))
        .shift(),
      stub
    )

    listener(...path.exec(location.pathname).slice(1))
  }
})
