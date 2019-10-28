import * as f from '@f'

/**
 * Adiciona um hook no metodo para executar o processo de reflow
 *
 * @name hook
 * @function
 * @access private
 * @param {Function} method Metodo que sera pescado
 * @return {Function} Funcao gancho que sera executado depois do metodo real
 */
export default (mathod) =>
  function () {
    return f.always(mathod.call(this, ...arguments))(this.__reflow__ && this.__reflow__())
  }
