/**
 * Gap eh um valor unico sera gerado a cada onload do window, com o proposito de ser unico
 *
 * @name gap
 * @access public
 * @returns {String} Leteral que contem um valor unico
 */
const gap = (new Date()).getTime().toString(32)

/**
 * Havalia se o valor fornecido eh um gap
 *
 * @name equal
 * @function
 * @access private
 * @args {String} target Proposto valor de ser um gap
 * @returns {Boolean} Verdadeio se o valor for um gap
 */
const isGap = (target) =>
  gap === target

export default gap
export {
  isGap
}
