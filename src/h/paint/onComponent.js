import * as f from '@f'
import createHookReflow from './createHookReflow'
import createVElementToCompare from './createVElementToCompare'
import hasElementInTarget from './hasElementInTarget'

/**
 * Se o contexto tiver um elemento sera criado apenas outro vDom
 * para fins de comparacao, caso trontario sera criado o primeiro elemento
 *
 * @name onComponent
 * @function
 * @access private
 * @param {Object} context Instancia da classe para encapsulado pelo component
 * @param {Function} component Web component
 * @param {Array} children Elemento filhos que seram incluidos no web component
 * @return {HTMLElement} Elemento html quer fora gerado pelo component
 */
export default f.cond(
  [hasElementInTarget, createVElementToCompare],
  [f.T, createHookReflow]
)
