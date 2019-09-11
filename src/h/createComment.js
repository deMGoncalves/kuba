import * as f from '@f'

/**
 * Cria um comentario vazio
 *
 * @name createComment
 * @function
 * @access private
 * @returns {Comment} Um comentario vazio
 */
export default f.always(document.createComment(''))
