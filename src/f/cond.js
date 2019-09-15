import T from './T'

/**
 * Armazena o resultado da funcao processadora
 *
 * @name result
 * @function
 * @access public
 * @args {Object} target=result[__target__] O resultado da funcao processadora
 * @return {Object} O resultado da funcao processadora ou undefined como padrao
 */
const result = (target) =>
  (result['__target__'] = target || result['__target__'])

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
    pairs.some(([can, process]) =>
      can(...args) && T(result(process(...args))))

    return result()
  }
