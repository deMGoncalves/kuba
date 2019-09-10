import * as f from '@f'
import addEventListener from './addEventListener'
import addEventListenerWithPrevent from './addEventListenerWithPrevent'
import addEventListenerWithStop from './addEventListenerWithStop'
import isClassName from './isClassName'
import isEvent from './isEvent'
import isEventWithStop from './isEventWithStop'
import isEventWithPrevent from './isEventWithPrevent'
import isEventWithStopAndPrevent from './isEventWithStopAndPrevent'
import addEventListenerWithStopAndPrevent from './addEventListenerWithStopAndPrevent'
import setAttribute from './setAttribute'
import setClassName from './setClassName'

/**
 * Extenda as propriedades, eventos e funcoes para um elemento
 *
 * @name extendAttributes
 * @function
 * @access private
 * @param {HTMLElement} elment Elemento html
 * @param {Object} args Key e value referente ao atributo, evento ou classe
 * @returns {HTMLElement} Elemento com as propriedade, classes e evento atribuido
 */
const extendAttributes = (element) =>
  (args) =>
    f.cond(
      [isEvent, addEventListener(element)],
      [isEventWithStop, addEventListenerWithStop(element)],
      [isEventWithPrevent, addEventListenerWithPrevent(element)],
      [isEventWithStopAndPrevent, addEventListenerWithStopAndPrevent(element)],
      [isClassName, setClassName(element)],
      [f.T, setAttribute(element)]
    )(...args)

/**
 * Para cada par de key e value extenda no elemento html
 */
export default (attributes, element) =>
  f.always(element)(f.forEach(f.toPairs(attributes), extendAttributes(element)))
