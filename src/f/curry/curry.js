import oneParameter from './oneParameter'
import twoParameters from './twoParameters'
import threeParameters from './threeParameters'

/**
 * Retorna um equivalente ao curry da função fornecida. A função ao curry
 * possui dois recursos incomuns. Primeiro, seus argumentos não precisam ser
 * fornecidos um de cada vez. Se `f` é uma função ternária e `g` é `f.curry(f)`,
 * o seguinte é equivalente:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Em segundo lugar, o valor do espaço reservado especial [`R .__`] (#__) pode ser
 * usado para especificar "lacunas", permitindo a aplicação parcial de qualquer
 * combinação de argumentos, independentemente de suas posições. Se `g` é como acima
 * e `_` é [`f.__`](#__), o seguinte é equivalente:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf f
 * @since v0.0.1
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} target A função para o curry.
 * @return {Function} Uma nova função curried.
 * @see oneParameter, twoParameters, threeParameters
 * @example
 *
 *      const addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      const curriedAddFourNumbers = f.curry(addFourNumbers);
 *      const r = curriedAddFourNumbers(1, 2);
 *      const g = r(3);
 *      g(4); //=> 10
 */
export default (target) =>
  [null, oneParameter, twoParameters, threeParameters][target.length](target)
