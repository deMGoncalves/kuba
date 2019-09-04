import * as f from '@f'

/**
 * Havalia se eh um evento com a tratativa stop e prevent
 *
 * @name isEventWithStopAndPrevent
 * @function
 * @access private
 * @param {String} target Nome do evennto
 * @returns {Boolean} Verdadeiro se o atributo eh um evento valido
 */
export default f.test(/^on[A-Z][a-z]+_(stop|prevent)_(stop|prevent)$/, f.__)
