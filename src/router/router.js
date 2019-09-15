import paths from './paths'

/**
 * Inclua um novo mapa de rota junto com os outros paths
 *
 * @name router
 * @function
 * @access public
 * @param {Array} ...args Mapa de uma nova rota
 * @return {undefined} Nao retorna nada
 */
export default (...args) =>
  paths.push(args)
