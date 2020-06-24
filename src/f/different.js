import curry from './curry'
import equal from './equal'

/**
 * Retorna `true` se seus argumentos não forem equivalentes, `false` caso contrário.
 * Alças estruturas de dados cíclicos.
 *
 * Despacha simetricamente para os métodos `iguais` de ambos os argumentos, se
 * presente.
 *
 * @func
 * @memberOf f
 * @since v0.15.0
 * @category f.lation
 * @sig a -> b -> Boolean
 * @param {*} x Primeiro valor
 * @param {*} y Segundo valor
 * @return {Boolean} Retorna verdadeiro se se ambos forem iguais
 * @example
 *
 *      f.different(1, 1); //=> true
 *      f.different(1, '1'); //=> false
 *      f.different([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      f.different(a, b); //=> true
 */
const different = (x, y) =>
  !equal(x, y)

export default curry(different)
