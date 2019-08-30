import flatten from 'ramda/src/flatten'
import createElement from './createElement'
import executeComponent from './executeComponent'
import isTagName from './isTagName'

/**
 * Hyperscript, syntaxe javascript para construir elementos HTML
 *
 * @name h
 * @function
 * @access public
 * @param {string|function} tagNameOrComponent Nome do tag HTML ou referencia do componente
 * @param {object} attributes Atributos do elemento HTML ou componente
 * @param {array} children Elementos filhos
 * @returns {Node} Elemento HTML
 */
function hyperScript (tagNameOrComponent, attributes, ...children) {
  return (isTagName(tagNameOrComponent)
    ? createElement
    : executeComponent)(tagNameOrComponent, { ...attributes }, flatten(children))
}

export default hyperScript
