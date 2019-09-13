import * as f from '@f'
import onComponent from './onComponent'

/**
 * Sera feito um wrapper sobro a instancia da classe para podermos fazer
 * as tratativas do get, set e para quando usar a instancia como component
 *
 * @name onObject
 * @function
 * @access private
 * @param {Object} context Instancia da classe que foi encapsulado
 * @param {Function} component Component representativo da classe
 * @returns {Proxy} Um proxy que fara a orquestracao para um funcionamento hibrido
 */
export default (context, component) =>
  new Proxy(

    /**
     * Sera entregue uma funcao ao invez do contexto, com isso posso
     * fazer a renderizacao do component quando esta instancia for colocado
     * no DOM
     */
    (_, children) => onComponent(context, component, children),

    /**
     * Remap das keys para o contexto, senao o get sera feito sobre
     * wrapper do component
     */
    {
      get (_, key) {
        const target = context[key]
        return f.is(Function, target) ? target.bind(context) : target
      }
    }
  )
