import * as f from '@f'

/**
 * Valida se o atributo eh um evento
 *
 * @name isEvent
 * @function
 * @access private
 * @param {String} target Nome do event
 * @return {Boolean} Verdadeiro ser for um evento
 */
export default f.test(/^on[a-z]+$/i, f.__)
