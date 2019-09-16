import * as f from '@f'

/**
 * Cria o web component passando a instancia no props do component
 * e adiciona a referencia do contexto ao elemento html
 *
 * @name createVElementToCompare
 * @function
 * @access private
 * @param {Object} __target__ Instancia da classe alvo
 * @param {Function} component Web Component
 * @param {Array} children Elemento filhos que serao adicionaso no web component
 * @return {HTMLElement} Elmento html gerado pelo component
 */
export default (__target__, component, children) =>
  f.assign(component(__target__, children), { __target__ })
