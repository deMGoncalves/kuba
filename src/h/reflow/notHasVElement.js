import * as f from '@f'

/**
 * Valida a existencia do elemento virtual
 *
 * @name notHasVElement
 * @function
 * @param {HTMLElement} _ element Nesta funcao nao usamos este parametro
 * @param {HTMLElement} vElement Elemento virtual, novo estado do DOM
 * @return {Boolean} Verdadeiro se o novo elemento existir
 */
export default (_, vElement) =>
  f.isNil(vElement)
