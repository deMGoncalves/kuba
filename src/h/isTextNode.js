import * as f from '@f'

/**
 * Havalia se o elemento eh um Texto
 *
 * @name isTextNode
 * @function
 * @access private
 * @param {*} target Elemento alvo
 * @return {Boolean} Verdadeiro se o elemento for um texto
 */
export default f.is(String, f.__)
