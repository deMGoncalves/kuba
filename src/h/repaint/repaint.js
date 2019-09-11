import * as f from '@f'

/**
 * Dispara o processo repaint do component
 *
 * @name default
 * @function
 * @access public
 * @args {Class} _target Classe que tera seu metodo encapsulado
 * @args {String} _method Nome do metodo encapsulado
 * @args {Object} descriptor Descricao da definicao do metodo
 * @returns {*} O retorno do metodo encapsulado
 */
export default (_target, _method, descriptor) => {
  const { value } = descriptor

  f.assign(descriptor, {
    value (...args) {
      return f.always(value.call(this, ...args))(this.__reflow__ && this.__reflow__())
    }
  })

  return descriptor
}
