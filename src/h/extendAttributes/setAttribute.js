import * as f from '@f'

/**
 * Adiciona um atributo no elemento
 *
 * @name setAttribute
 * @function
 * @access private
 * @param {HTMLElement} element Elemento html alvo
 * @param {String} key Nome da atributo
 * @param {String} value Valor do atributo
 * @return {HTMLElement} O elemento alvo com o novo atributo
 */
export default (element) =>
  (key, value) => {
    // Guardo os atributos adicionados para usar no processwo de reflow, preciso
    // garantir que os atributos seja removido antes de inputar os novos
    element.__attributes__ = f.concat(f.or(element.__attributes__, []), key)

    // Seto os atributos segundo o setAttribute para grantir os dataset, assim
    // encaro tudo como atributo
    element.setAttribute(key, value)

    return element
  }
