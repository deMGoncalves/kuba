import * as f from '@f'

/**
 * Havalia se o elemento é um tagName ou um Custom Component
 *
 * @name isTagName
 * @function
 * @access private
 * @param {String|Function} tagNameOrComponent Suposto tagName ou Component
 * @return {Boolean} Verdadeiro se o elemento for um nome de elemento html
 */
export default f.is(String, f.__)
