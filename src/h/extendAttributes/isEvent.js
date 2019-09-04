import * as f from '@f'

/**
 * Valida se o atributo eh um evento
 *
 * @name isEvent
 * @function
 * @access private
 * @param {String} target Nome do event
 * @returns {Boolean} Verdadeiro ser for um evento
 */
export default f.test(/^on[A-Z][a-z]+$/, f.__)
