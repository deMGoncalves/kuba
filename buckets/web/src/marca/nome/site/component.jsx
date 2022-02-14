import h from '@kuba/h'
import link from '@kuba/link'

export default (site) =>
  <link.Primary uid='site' href={site.valor} target='_blank' dark xxxs medium>
    {site.valor}
  </link.Primary>
