/**
 * Adiciona um elemento filho
 *
 * @name appendChild
 * @function
 * @access private
 * @param {HTMLElement} _element Parametro nao eh usado
 * @param {HTMLElement} vElement Elemento virtual que sera adicionado ao DOM
 * @param {HTMLElement} parent Pai do elemento
 * @return {HTMLElement} Elemento filho que foi adicionado no elemento pai
 */
export default (_element, vElement, parent) =>
  requestAnimationFrame(() => parent.appendChild(vElement))
