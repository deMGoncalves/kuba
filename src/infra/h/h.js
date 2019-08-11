import cond from 'ramda/src/cond'
import flatten from 'ramda/src/flatten'
import T from 'ramda/src/T'
import createElement from './createElement'
import executeComponent from './executeComponent'
import isTagName from './isTagName'

/**
 * Hyperscript, syntaxe javascript para construir elementos HTML
 *
 * @name h
 * @function
 * @access public
 * @args {string|function} tagNameOrComponent Nome do tag HTML ou referencia do componente
 * @args {object} attributes Atributos do elemento HTML ou componente
 * @args {array} children Elementos filhos
 * @returns {Node} Elemento HTML
 */
const h = (tagNameOrComponent, attributes, ...children) =>
  cond([
    [isTagName, createElement],
    [T, executeComponent]
  ])(tagNameOrComponent, { ...attributes }, flatten(children))

export default h
