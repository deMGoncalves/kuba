import * as f from '@f'
import createHookReflow from './createHookReflow'
import createVElementToCompare from './createVElementToCompare'
import hasElementInTarget from './hasElementInTarget'

/**
 * Sera feito um wrapper sobre o contexto da classe para com o componente,
 * incluindo algumas inteligencias de que se o contexto tiver um elmento
 * ja apendado sera feito apenas um elmento virtual para comparacao apenas
 *
 * @name onComponent
 * @function
 * @access private
 * @param {Object} context Objeto instanciado
 * @param {Function} component Component que sera o wrapper para a instancia
 * @param {Array} children Elemento filhos do component
 * @return {HTMLElement} Elemento html montado
 */
export default f.cond(
  [hasElementInTarget, createVElementToCompare],
  [f.T, createHookReflow]
)
