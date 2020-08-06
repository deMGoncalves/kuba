import * as f from '@rex/f'

/**
 * Executar o preventDefault antes de executar o listener
 *
 * @name stopPropation
 * @function
 * @access private
 * @param {Function} listener Evento que sera executado apos o preventDefault
 * @return {*} O retorno do evento alvo
 */
export default (listener) =>
  (e) =>
    listener(f.always(e)(e.preventDefault()))
