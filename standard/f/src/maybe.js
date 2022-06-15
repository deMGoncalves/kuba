import has from './has'

const maybe = new Proxy({}, {
  get: (_, target) =>
    (...args) => ({
      case: (chain) => (
        has(target, chain)
          ? chain?.[target]?.(...args)
          : chain?._?.()
      )
    })
})

export default maybe
