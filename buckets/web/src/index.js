/**
 * Cabecalho
 *
 * Este pixel injeta os meta tag necessario
 * para o funcionamento do app
 */
import '@kuba/markup'

/**
 * CSS
 *
 * Estes pixels resetam o estilo do browser
 * e configuram os tokens
 */
import '@kuba/tokens'
import '@kuba/reset'

/**
 * Rotas
 *
 * Configuracao das rotas do app, com as separacoes
 * por blueprint e as camnhio rais
 */
import '@kuba/marcas'
import '@kuba/shapes'
import './routers'

/**
 * Actions
 *
 * Acoes comuns da aplicacao que sera executado
 * independente do contexto
 */
import '@kuba/scrolllock'

/**
 * Filtro
 *
 * Funcoes auxiliares para o funcionamento
 * do jsx (h)
 */
import '@kuba/istruthy'
import '@kuba/prevent'
import '@kuba/stop'

/**
 * Pixels
 *
 * Codigos que seram injetados no app para recursos
 * auxiliares
 */
import agent from '@kuba/agent'

agent.isUser && (
  import('@kuba/adsense' /* webpackChunkName: "adsense" */),
  import('@kuba/boma' /* webpackChunkName: "boma" */),
  import('@kuba/console' /* webpackChunkName: "console" */),
  import('@kuba/gtm' /* webpackChunkName: "gtm" */),
  import('@kuba/hotjar' /* webpackChunkName: "hotjar" */),
  import('@kuba/sw' /* webpackChunkName: "service-worker" */)
)
