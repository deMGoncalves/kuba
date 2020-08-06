import * as f from '@rex/f'

/**
 * Avalia se o atributo eh um htmlFor
 *
 * @name isHtmlFor
 * @function
 * @access private
 * @param {String} target Nome do atributo
 * @return {Boolean} Verdadeiro ser o atributo for um className
 */
export default f.test(/^htmlFor/, f.__)
