import * as f from '@f'

/**
 * Stub para evitar erros de quando nao tiver nenhuma rota mapeada
 *
 * @return {Array} Rota default para evitar erros
 */
export default [/.*/, f.always(null)]
