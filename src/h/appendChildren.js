import * as f from '@f'
import isNode from './isNode'
import mapComponent from './mapComponent'
import mapTextNode from './mapTextNode'

// Adiciona um filho no elemento pai
const appendChild = (element) =>
  (child) =>
    isNode(child) && element.appendChild(child)

/**
 * Apenda os elementos filhos no elemento pai
 *
 * @name appendChildren
 * @function
 * @access private
 * @param {Array} children Elemento filhos
 * @param {HTMLElment} element Elmento html pai
 * @return {HTMLElment} Elmento com o seus filhos adicionados
 */
export default (children, element) =>
  f.always(element)(f.forEach(mapTextNode(mapComponent(children)), appendChild(element)))
