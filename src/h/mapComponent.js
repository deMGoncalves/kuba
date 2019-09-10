import * as f from '@f'
import isComponent from './isComponent'

/**
 * Busca todos os components no meio dos elementos filhos e os executa
 *
 * @name mapComponent
 * @function
 * @access private
 * @param {Array} children Elementos filhos
 * @returns {Array} Retorna todos os elmentos filhos com o components executado
 */
export default (children) =>
  f.map(children, child => isComponent(child) ? child() : child)
