import * as f from '@f'

/**
 * Valida se o elemento tem um contexto de um objeto
 *
 * @name hasTarget
 * @function
 * @access private
 * @param {HTMLElement} element Elemento alvo que sera havaliado
 * @return {Boolean} Verdadeiro  se o lemento tiver um contexto
 */
export default f.has('__target__', f.__)
