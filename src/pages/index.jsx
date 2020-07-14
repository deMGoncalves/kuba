import h from '@h'
import router from '@router'

router(/^\/shop\/buy\/([\w-]+)$/, async (productName) => {
  const { default: Product } = await import(/* webpackChunkName: "product" */ '@pages/product')
  const data = await fetch(`/${productName}.json`).then(response => response.json())
  document.body.append(<Product {...data} />)
})
