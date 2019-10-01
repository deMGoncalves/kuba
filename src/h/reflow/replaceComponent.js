/**
 * Troca o elemento do vElemento pelo elmento que esta no DOM
 *
 * @name replaceComponent
 * @function
 * @access private
 * @param {HTMLElement} element Elemento no DOM que sera subistituido
 * @param {HTMLElement} vElemento O novo elemento que sera colocado no DOM
 * @param {HTMLElement} parent Elemento pai que esta no DOM
 * @return {HTMLElement} Novo elemento que fora colocado no DOM
 */
export default (element, vElement, parent) =>
  requestAnimationFrame(() => parent.replaceChild(vElement.__target__.__element__, element))
