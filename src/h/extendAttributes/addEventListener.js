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
 * @return {HTMLElement} Elemento html com o evento adicionado
 */
const addEventListener = (element, eventName, listener) =>
  requestAnimationFrame(() =>
    f.assign(element, {

      // Guardo os eventos adicionados para usar no processwo de reflow, hoje
      // a web api DOM nao me fornece um recurso para listar todos os eventos
      // adicionado a um elemento
      __events__: f.concat(f.or(element.__events__, []), f.toLower(eventName)),

      // Adicionando o elemento de forma simples, acredito que nao seja necessario
      // tratar o evento com addEventListener, ficando simples tambaem o
      // processo de remover o elemento
      [f.toLower(eventName)]: listener
    })
  )

export default f.curry(addEventListener)
