import reflow from './reflow'

export default (wc, referenceId) =>
  (value) => (
    wc.state[referenceId] = value,
    wc.useEffect(),
    reflow(wc)
  )
