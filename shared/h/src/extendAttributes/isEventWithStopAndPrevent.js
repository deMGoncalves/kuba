import * as f from '@rex/f'

/**
 * Havalia se eh um evento com a tratativa stop e prevent
 *
 * @name isEventWithStopAndPrevent
 * @function
 * @access private
 * @param {String} target Nome do evennto
 * @return {Boolean} Verdadeiro se o atributo eh um evento valido
 */
export default f.test(/^on[a-z]+_(stop|prevent)_(stop|prevent)$/i, f.__)
