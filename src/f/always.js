import curry from './curry'

/**
 * Retorna uma função que sempre retorna o valor fornecido. Observe que para
 * não primitivos, o valor retornado é uma referência ao valor original
 *
 * Esta função é conhecida como `const` ou `K` (para K combinator) em
 * outras línguas e bibliotecas
 *
 * @func
 * @memberOf f
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} value O valor que sera encapsulado na função
 * @return {Function} Uma função :: * -> value.
 * @example
 *
 *      const t = f.always('Tee');
 *      t(); //=> 'Tee'
 */
const always = (value) =>
  () => value

export default curry(always)
