/**
 * Troca o elemento virtual pelo o elemento que esta no DOM
 *
 * @name replaceChild
 * @function
 * @access private
 * @param {HTMLElement} element Elemento no DOM que sera subistituido
 * @param {HTMLElement} vElemento O novo elemento que sera colocado no DOM
 * @param {HTMLElement} parent Elemento pai que esta no DOM
 * @return {HTMLElement} O Novo elemento que foi colocado no DOM
 */
export default (element, vElement, parent) =>
  requestAnimationFrame(() => parent.replaceChild(vElement, element))
