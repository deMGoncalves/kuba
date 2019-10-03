/**
 * Set o novo texto para o DOM
 *
 * @name setTextContent
 * @function
 * @access private
 * @param {HTMLElement} element Elemento alvo que esta no DOM
 * @param {HTMLElement} vElement Elemento virtual que tem o novo texto
 * @return {String} Novo texto que fora adicionado ao DOM
 */
export default (element, vElement) =>
  (element.textContent = vElement.textContent)
