import * as f from '@f'
import onComponent from './onComponent'
import onObject from './onObject'

/**
 * Encapsula a class com um component, quando o cliente instanciar a classe sera
 * executado normalmente mas quando usar a classe como um component
 * sera apenas executado a class seguindo a assinatura do jsx
 *
 * @name paint
 * @function
 * @access public
 * @param {Functino} component Componente html
 * @return {Class} A classe alvo encapsulado
 */
export default (component) =>
  (Klass) =>
    new Proxy(
      function paint (attrs, children) {
        return (this instanceof paint)
          ? onObject(new Klass(...arguments), component)
          : onComponent(new Klass({ ...attrs }), component, children)
      },
      {
        get: (_, key) => Klass[key],
        set: (_, key, value) => f.T(Klass[key] = value)
      }
    )
