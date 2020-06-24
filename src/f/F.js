import always from './always'

/**
 * Uma função que sempre retorna `false`. Quaisquer parâmetros passados são ignorados
 *
 * @func
 * @memberOf f
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see f.T
 * @example
 *
 *      f.F(); //=> false
 */
export default always(false)
