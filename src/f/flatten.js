/**
 * Retorna uma nova lista, retirando todas as sub-matrizes e colocando nas nova matriz em primeira profundidade
 *
 * @name h
 * @function
 * @access private
 * @param {Array} target Uma matriz com sub-matrizes
 * @returns {Array} Uma nova matriz com seus sub-matrizes em primeiro na profundidade
 */
const flatten = (target) =>
  target.reduce((a, b) => a.concat(b), [])

export default flatten
