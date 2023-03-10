import magic from '@kuba/magic'
import middleware from '@kuba/middleware'
import override from '@kuba/override'

const scroll = middleware((instanceRef) => {
  override(instanceRef, magic.didMount, function () {
    const element = instanceRef[scroll.element]()
    const listener = () => (
      (element.getBoundingClientRect().top <= (window.innerHeight * 1.618)) && (
        window.removeEventListener('scroll', listener),
        instanceRef[scroll.render]()
      )
    )

    window.addEventListener('scroll', listener)
    window.dispatchEvent(new Event('scroll'))
  })
})

Object.assign(scroll, {
  element: magic.scroll_element,
  render: magic.scroll_render
})

export default scroll
