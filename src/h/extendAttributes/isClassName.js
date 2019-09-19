import * as f from '@f'

/**
 * Havalia se o atributo eh um className
 *
 * @name isClassName
 * @function
 * @access private
 * @param {String} target Nome do atributo
 * @return {Boolean} Verdadeiro ser o atributo for um className
 */
export default f.test(/^class/, f.__)
