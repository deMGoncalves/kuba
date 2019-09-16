import concat from './concat'

/**
 * Retorna uma nova lista, retirando todas as sub-matrizes e colocando nas nova matriz em primeira profundidade
 *
 * @name h
 * @function
 * @access private
 * @param {Array} target Uma matriz com sub-matrizes
 * @return {Array} Uma nova matriz com seus sub-matrizes em primeiro na profundidade
 */
export default (target) =>
  target.reduce(concat, [])
