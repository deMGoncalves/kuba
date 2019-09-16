import * as f from '@f'
import isTextNode from './isTextNode'

/**
 * Mapeia todos os textos dentros da matrix de elementos filhos
 *
 * @name mapTextNode
 * @function
 * @access private
 * @param {Array} children Elemento filhos
 * @return {Array} Elementos filhos com os textos mapeados
 */
export default (children) =>
  f.map(children, (child) =>
    isTextNode(child) ? document.createTextNode(child) : child)
