import * as f from '@rex/f'
import hook from './hook'

/**
 * Dispara o processo repaint do component
 *
 * @name default
 * @function
 * @access public
 * @args {Class} _target Classe que tera seu metodo encapsulado
 * @args {String} _method Nome do metodo encapsulado
 * @args {Object} descriptor Descricao da definicao do metodo
 * @return {*} O retorno do metodo encapsulado
 */
export default (_target, _method, descriptor) =>
  f.assign(descriptor, { value: hook(descriptor.value) })
