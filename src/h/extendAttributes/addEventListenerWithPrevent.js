import * as f from '@f'
import addEventListener from './addEventListener'
import preventDefault from './preventDefault'

/**
 * Adicionar um evento ao elemento com a tratativa do preventdefault
 *
 * @name addEventListenerWithPrevent
 * @function
 * @access private
 * @param {HTMLElement} element Elemento que tera um evento adicionado
 * @param {String} eventName Nome do evento
 * @param {Function} listener Funcao que sera vinculado ao evento
 * @return {*} O retorno da funcao alvo
 */
export default (element) =>
  (eventName, listener) =>
    addEventListener(element, f.slice(eventName, 0, -8), preventDefault(listener))
