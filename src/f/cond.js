import T from './T'

/**
 * Retorna uma funcao callback, que encapsula o funcionamento do if/else...
 *
 * @name cond
 * @function
 * @access public
 * @args {Array} ...pairs Pares de valoes, uma funcao condicional e uma funcao executora
 * @returns {Object} Retorna o valor da funcao executora
 */
export default (...pairs) =>
  (...args) => {
    var result

    pairs.some(([can, process]) =>
      can(...args) && T(result = process(...args)))

    return result
  }
