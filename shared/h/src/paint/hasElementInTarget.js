import * as f from '@rex/f'

/**
 * Verifica se um contexto ja tem um elemento criado
 *
 * @name hasElementInTarget
 * @function
 * @access private
 * @param {Object} target Contexto que sera encapsulado pelo component
 * @return {Boolean} Verdadeiro se tiver um elemento criado
 */
export default f.has('__element__', f.__)
