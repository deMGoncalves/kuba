import curry from './curry'

/**
 * Verifica se uma propriedade foi definida em um objeto
 * alvo, mesmo que o valor serja imputado como undefined
 *
 * @name has
 * @function
 * @access public
 * @param {String} key Nome da propriedade
 * @param {Object} target Objeto alvo, que sera analisado
 * @return {Boolean} Verdadeiro se a propriedade foi definida
 */
const has = (key, target) =>
  target.hasOwnProperty(key)

export default curry(has)
