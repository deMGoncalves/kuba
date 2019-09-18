import restrictAttributes from './restrictAttributes'
import extendChildren from './extendChildren'

/**
 * Extende os atributos e eventos para o elemento que esta no DOM,
 * removento tambem os mesmo que nao estao no elemento virtual
 *
 * @name replaceElement
 * @function
 * @access private
 * @param {HTMLElement} element Elemento que esta no DOM
 * @param {HTMLElement} vElement Elemento virtual que tem o novo estado
 * @return {HTMLElement} O mesmo elemento que esta no DOM atualizado
 */
export default (element, vElement) =>
  extendChildren(restrictAttributes(element, vElement), vElement)
