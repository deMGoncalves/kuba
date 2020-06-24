import T from './T'

/**
 * f.torna uma função, `fn`, que encapsula a lógica `if / else, if / else, ...`.
 * `f.cond` pega uma lista de pares [predicado, transformador]. Todos os argumentos
 * a `fn` são aplicados a cada um dos predicados, por sua vez, até que se retorne um valor
 * "truthy"; nesse ponto, `fn` retorna o resultado da aplicação de seus argumentos
 * ao transformador correspondente. Se nenhum dos predicados * corresponder, `fn` retornará undefined
 *
 * @func
 * @memberOf f
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs Uma lista de [predicate, transformer]
 * @return {Function}
 * @see f.ifElse, f.unless, f.when
 * @example
 *
 *      const fn = f.cond([
 *        [f.equals(0),   f.always('water freezes at 0°C')],
 *        [f.equals(100), f.always('water boils at 100°C')],
 *        [f.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */
export default (...pairs) =>
  (...args) => {
    var result

    pairs.some(([can, process]) =>
      can(...args) && T(result = process(...args)))

    return result
  }
