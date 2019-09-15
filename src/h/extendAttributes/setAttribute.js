import * as f from '@f'

/**
 * Adiciona um atributo no elemento
 *
 * @name setAttribute
 * @function
 * @access private
 * @param {HTMLElement} element Elemento html alvo
 * @param {String} key Nome da atributo
 * @param {String} value Valor do atributo
 * @return {HTMLElement} O elemento alvo com o novo atributo
 */
export default (element) =>
  (key, value) =>
    f.always(element)(element.setAttribute(key, value))
