export default (wc) => (
  wc.element.reflow(wc.component(wc.attrs, wc.hooks)),
  wc.useEffect()
)
