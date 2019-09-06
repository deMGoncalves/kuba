import * as f from '@f'

/**
 * Adiciona um evento ao elemento html
 *
 * @name addEventListener
 * @function
 * @access public
 * @args {HTMLElement} element Elemento html que tera um evento adicionado
 * @args {String} eventName Nome do evento
 * @args {Function} listener Funcao que sera executado quando o evenfo for disparado
 * @returns {HTMLElement} Elemento html com o evento adicionado
 */
const addEventListener = (element, eventName, listener) =>
  f.assign(element, {
    __events__: f.concat(f.or(element.__events__, []), f.toLower(eventName)),
    [f.toLower(eventName)]: listener
  })

export default f.curry(addEventListener)
