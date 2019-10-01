import * as f from '@f'

/**
 * Remove todos os eventos adicionados no elemento
 *
 * @name removeEventListener
 * @function
 * @access private
 * @param {HTMLElement} element Elemento html que esta no DOM
 * @return {HTMLElement} Elemento html sem os eventos
 */
export default (element) =>
  requestAnimationFrame(() =>
    f.forEach(f.or(element.__events__, []), (event) =>
      (element[event] = undefined)))
