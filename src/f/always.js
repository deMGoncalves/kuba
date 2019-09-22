/**
 * Retorna uma funcao que sempre ao ser executado retornara o valor fornecido anteriormente
 *
 * @name always
 * @function
 * @access public
 * @param {*} target Valor que sera retornado nas proximas chamadas
 * @return {Function} Retorna uma funcao, quando executado retorna o o valor fornecido
 */
export default (value) =>
  () => value
