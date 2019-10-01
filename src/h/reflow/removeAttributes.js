import * as f from '@f'

/**
 * Remove todos os atributos adicionados no elemento
 *
 * @name removeEventListener
 * @function
 * @access private
 * @param {HTMLElement} element Elemento html que esta no DOM
 * @return {HTMLElement} Elemento html sem os atributos
 */
export default (element) =>
  requestAnimationFrame(() =>
    f.forEach(f.or(element.__attributes__, []), (key) =>
      element.removeAttribute(key)))
