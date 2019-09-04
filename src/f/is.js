/**
 * Compara se o valor é do mesmo tipo da classe
 *
 * @name is
 * @function
 * @access public
 * @param {*} klass Classe a ser comparado
 * @param {*} target Objeto a ser comparado
 * @returns {Boolean} Retorna verdadeiro se tipo for igual
 */
export default (klass, target) =>
  target != null && (target.constructor === klass || target instanceof klass)
