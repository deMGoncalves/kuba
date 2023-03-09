import * as f from '@kuba/f'
import magic from '@kuba/magic'
import repaint from './repaint'

function reflow (parent, nParent) {
  f
    .zip(parent, nParent)
    .forEach(([item, nItem]) => {
      if (!item && nItem) return parent[reflow.add](nItem)
      if (item && !nItem) return parent[reflow.remove](item)
      if (item[reflow.different](nItem)) return parent[reflow.replace](item, nItem)
      item[repaint.reflow]?.(nItem)
    })
}

Object.assign(reflow, {
  add: magic.reflow_add,
  different: magic.reflow_different,
  remove: magic.reflow_remove,
  replace: magic.reflow_replace
})

export default reflow
