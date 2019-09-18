import * as f from '@f'

/**
 * Havalia se eh um atributo com a tratativa prevent
 *
 * @name isEventWithPrevent
 * @function
 * @access private
 * @param {String} target Nome do atributo
 * @return {Boolean} Verdadeiro se for um evento com a tratativa prevent
 */
export default f.test(/^on[a-z]+_prevent$/i, f.__)
