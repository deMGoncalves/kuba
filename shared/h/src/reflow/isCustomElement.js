import * as f from '@rex/f'

/**
 * Valida se o tagName do elemento determina se eh um elemento customizado
 *
 * @name isCustomElement
 * @function
 * @access private
 * @param {String} tagName Nome da tag
 * @return {Boolean} Verdadeiro se o elemento for um elemento customizado
 */
export default f.test(/^\w+-/)
