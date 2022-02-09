import h from '@kuba/h'
import link from '@kuba/link'

export default (site) =>
  <link.Complete uid='site' href={site.valor} target='_blank' dark xxxs medium>
    {site.valor}
  </link.Complete>
