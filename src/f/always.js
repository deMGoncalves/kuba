/**
 * Retorna uma funcao que sempre ao ser executado retornara o valor fornecido anteriormente
 *
 * @name always
 * @function
 * @access public
 * @param {*} target Valor que sera retornado nas proximas chamadas
 * @return {*} Retorna o valor fornecido anteriormente
 */
export default (target) =>
  () => target
