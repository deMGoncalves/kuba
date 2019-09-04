import * as f from '@f'

/**
 * Havalia se o atributo eh um evento com a tratativa do stop
 *
 * @name isEventWithStop
 * @function
 * @access private
 * @param {String} target Nome do atributo
 * @returns {Boolean} Verdadeiro se o atributo for um evento com stop
 */
export default f.test(/^on[A-Z][a-z]+_stop$/, f.__)
