import has from './has'

const option = new Proxy({}, {
  get: (_, target) =>
    (...args) => ({
      case: (chain) => (
        has(target, chain)
          ? chain?.[target]?.(...args)
          : chain?._?.()
      )
    })
})

export default option
