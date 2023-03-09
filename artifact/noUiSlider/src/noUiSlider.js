import magic from '@kuba/magic'
import middleware from '@kuba/middleware'
import override from '@kuba/override'

const slider = middleware(function (input) {
  override(input, magic.didMount, async function (args, next) {
    import('nouislider/dist/nouislider.css' /* webpackChunkName: "nouislider" */)
    const { default: noUiSlider } = await import('nouislider' /* webpackChunkName: "nouislider" */)
    const element = input[slider.element]()
    const options = input[slider.options]()
    noUiSlider.create(element, options)
    return next(...args)
  })
})

Object.assign(slider, {
  element: magic.noUiSlider_element,
  options: magic.noUiSlider_options
})

export default slider
