import h from '@kuba/h'
import link from '@kuba/link'

export default (site) =>
  <link.Complete uid='site' href={site.href} target='_blank' dark xxxs medium>
    {site.valor}
  </link.Complete>
