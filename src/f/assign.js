import curry from './curry'

/**
 * Extende a fonte de forma profunda mantendo a referência a ele.
 * O objeto de origem pode um `Array`, `Object`, `Number`, `String`, `Boolean`, `Date` e `Function`.
 *
 * Observe que, se o objeto de origem tiver vários nós que compartilham uma referência,
 * o objeto retornado terá a mesma estrutura, mas as referências serão
 * apontado para o local dentro do valor clonado
 *
 * @func
 * @memberOf f
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} target O objeto que sera extendido
 * @param {*} descriptor O objeto que sera clonado
 * @return {*} Objeto alvo extendido profundamente clonado
 * @example
 *
 *      const target = { a: 1 };
 *      f.assign(target, { b: 2 }); //=> { a: 1, b: 2 }
 */
const assign = (target, descriptor) =>
  Object.assign(target, descriptor)

export default curry(assign)
