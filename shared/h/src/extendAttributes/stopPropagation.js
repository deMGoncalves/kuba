import * as f from '@rex/f'

/**
 * Executar o stopPropation antes de executar o listener
 *
 * @name stopPropation
 * @function
 * @access private
 * @param {Function} listener Evento que sera executado apos o stopPropagation
 * @return {*} O retorno do evento alvo
 */
export default (listener) =>
  (e) =>
    listener(f.always(e)(e.stopPropagation()))
