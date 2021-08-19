import useState from './useState'

export default (wc) => (
  wc.rewindId(),
  {
    adopted: (listener) => wc.setAdopted(listener),
    attributeChanged: (listener) => wc.setAttributeChanged(listener),
    connected: (listener) => wc.setConnected(listener),
    disconnected: (listener) => wc.setDisconnected(listener),
    useEffect: (listener) => wc.setUseEffect(listener),
    useState: (value) => useState(wc, value)
  }
)
