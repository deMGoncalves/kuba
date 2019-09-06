import * as f from '@f'

/**
 * Executar o stopPropation antes de executar o listener
 *
 * @name stopPropation
 * @function
 * @access private
 * @param {Function} listener Evento que sera executado apos o stopPropagation
 * @returns {*} O retorno do evento alvo
 */
export default (listener) =>
  (e) =>
    listener(f.always(e)(e.preventDefault()))
