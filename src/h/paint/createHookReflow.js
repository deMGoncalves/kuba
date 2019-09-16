import * as f from '@f'
import reflow from '../reflow'

/**
 * Cria o component, referencia o elemento no instancia da classe e
 * marca o elemento com o contexto para ser usando no processo de reflow
 *
 * @name createHookReflow
 * @function
 * @access private
 * @param {Object} target Contexto da classe que sera passao do component
 * @param {Function} component Web component
 * @param {Array} children Filhos que seram adicionas no web component
 * @return {HTMLElement} Elemento html gerado pelo web component
 */
export default (target, component, children) => {
  f.assign(target, {

    // Elemento html, com base neste elemento que sera
    // feito o trabalho de flow
    __element__: component(target, children),

    // Este metodo sera utilizado para os disparos
    // de repintar os elemento no DOM
    __reflow__ () {
      reflow(this.__element__, component(this, children))
    }
  })

  // Sera colocado no elemento html uma referencia do seu contexto,
  // assim no processo de reflow nao sera analizado a arvore deste component
  // por se tratar de responsabilidade da propria instancia refazer o reflow
  f.assign(target.__element__, {
    __target__: target
  })

  return target.__element__
}
