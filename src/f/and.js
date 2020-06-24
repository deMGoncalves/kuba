import arity from './arity'
import curry from './curry'

/**
 * Retorna `true` se ambos os argumentos forem `true`; caso contrário, `falso`
 *
 * @func
 * @memberOf f
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} x
 * @param {Any} y
 * @return {Any} O primeiro argumento se for falso, caso contrário, o segundo argumento
 * @see f.both, f.or
 * @example
 *
 *      f.and(true, true); //=> true
 *      f.and(true, false); //=> false
 *      f.and(false, true); //=> false
 *      f.and(false, false); //=> false
 */
const and = (...args) =>
  args.every(x => !!x)

export default curry(arity(2, and))
