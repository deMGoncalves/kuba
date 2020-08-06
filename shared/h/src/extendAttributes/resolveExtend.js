import * as f from '@rex/f'
import addEventListener from './addEventListener'
import addEventListenerWithPrevent from './addEventListenerWithPrevent'
import addEventListenerWithStop from './addEventListenerWithStop'
import isClassName from './isClassName'
import isEvent from './isEvent'
import isEventWithStop from './isEventWithStop'
import isEventWithPrevent from './isEventWithPrevent'
import isEventWithStopAndPrevent from './isEventWithStopAndPrevent'
import isHtmlFor from './isHtmlFor'
import addEventListenerWithStopAndPrevent from './addEventListenerWithStopAndPrevent'
import setAttribute from './setAttribute'
import setClassName from './setClassName'
import setHtmlFor from './setHtmlFor'

/**
 * Extende a propriedade, classe ou evento ao elemento html alvo
 *
 * @name resolveExtend
 * @function
 * @access private
 * @param {HTMLElement} element Elemento html
 * @return {Function} Funcao que fara a escolha de qual atribuicao sera feito no elemento
 */
export default (element) =>
  (keyAndValue) =>
    f.cond(
      [isEvent, addEventListener(element)],
      [isEventWithStop, addEventListenerWithStop(element)],
      [isEventWithPrevent, addEventListenerWithPrevent(element)],
      [isEventWithStopAndPrevent, addEventListenerWithStopAndPrevent(element)],
      [isClassName, setClassName(element)],
      [isHtmlFor, setHtmlFor(element)],
      [f.T, setAttribute(element)]
    )(...keyAndValue)
