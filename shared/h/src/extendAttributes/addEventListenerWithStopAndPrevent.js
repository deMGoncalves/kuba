import * as f from '@rex/f'
import addEventListener from './addEventListener'
import stopPropagation from './stopPropagation'
import preventDefault from './preventDefault'

/**
 * Adicionar um evento ao elemento com a tratativa do stopPropagation e preventDefault
 *
 * @name addEventListenerWithStopAndPrevent
 * @function
 * @access private
 * @param {HTMLElement} element Elemento que tera um evento adicionado
 * @param {String} eventName Nome do evento
 * @param {Function} listener Funcao que sera vinculado ao evento
 * @return {*} O retorno da funcao alvo
 */
export default (element) =>
  (eventName, listener) =>
    addEventListener(element, f.slice(eventName, 0, -13), stopPropagation(preventDefault(listener)))
