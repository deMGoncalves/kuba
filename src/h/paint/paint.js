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
      function (attrs, children) {
        return (this instanceof Klass)
          ? onObject(new Klass(...arguments), component)
          : onComponent(new Klass({ ...attrs }), component, children)
      },
      {
        // Remap das key para o contexto, senao o get sera feito
        // sobre o wrapper do component
        get: (_, key) => Klass[key],

        // Remap das key/value para o contexto, senao o set sera feito
        // sobre o wrapper do component
        set: (_, key, value) => f.T(Klass[key] = value)
      }
    )
