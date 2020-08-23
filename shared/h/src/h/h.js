import * as f from '@rex/f'
import createComment from '@rex/h/src/createComment'
import createElement from '@rex/h/src/createElement'
import executeComponent from '@rex/h/src/executeComponent'
import isComponent from '@rex/h/src/isComponent'
import isTagName from '@rex/h/src/isTagName'

/**
 * Hyperscript, crie um HyperText com JavaScript no cliente usando JSX
 *
 * Esta sintaxe estranha de tags não é uma string, nem HTML
 * É chamada JSX e é uma extensão de sintaxe para JavaScript
 * Recomendo usar JSX com o h para descrever como a UI deveria parecer
 * JSX pode lembrar uma linguagem de template, mas que vem com todo o poder do JavaScript
 *
 * @name h
 * @function
 * @access public
 * @param {String|function} tagNameOrComponent Nome do tag HTML ou nome do Web Componente
 * @param {Object} descriptor Atributos, classes e eventos do Elemento ou Web componente
 * @param {Array} children Elementos filhos
 * @return {HTMLElement} Elemento com os atributos, classes, eventos e filhos que foram especificados
 */
export default (tagNameOrComponent, descriptor, ...children) =>
  f.cond(
    [isTagName, createElement],
    [isComponent, executeComponent],
    [f.T, createComment]
  )(tagNameOrComponent, { ...descriptor }, f.flatten(children))
