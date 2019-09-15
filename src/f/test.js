import curry from './curry'

/**
 * Teste se o valor alvo passa no teste de expressao regular fornecida
 *
 * @name test
 * @function
 * @access public
 * @param {RegExp} Expressao regular havaliadora
 * @param {Strinmg} Valor a ser havaliado
 * @return {Boolean} Verdadeiro se o valor passar no teste da expressao regular
 */
const test = (pattern, target) =>
  pattern.test(target)

export default curry(test)
