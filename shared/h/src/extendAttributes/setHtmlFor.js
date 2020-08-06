/**
 * Adiciona o atributo for
 *
 * @name setHtmlFor
 * @function
 * @access private
 * @param {HTMLElement} element Elemento html que tera a(s) classe css adicionado
 * @param {String} id Nome do identificado do input
 * @return {HTMLElement} Element html com as class css adicionado
 */
export default (element) =>
  (_, id) =>
    (element.setAttribute('for', id))
