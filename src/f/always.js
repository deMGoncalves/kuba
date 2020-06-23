import curry from './curry'

/**
 * Retorna uma função que sempre retorna o valor fornecido. Observe que para
 * não primitivos, o valor retornado é uma referência ao valor original
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf f
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      const t = f.always('Tee');
 *      t(); //=> 'Tee'
 */
export default curry((value) =>
  () => value)
