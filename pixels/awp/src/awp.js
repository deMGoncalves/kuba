import appendStyle from './appendStyle'
import createWorker from './createWorker'
import defineComponent from './defineComponent'
// import fetchFiles from './fetchFiles'

customElements.define(
  'awp-sandbox',
  class extends HTMLMetaElement {
    get publicPath () {
      return this.content
    }

    get tagName () {
      return this.name
    }

    async connectedCallback () {
      // const [script, style] = await fetchFiles(this.publicPath)
      const worker = createWorker(this.publicPath, 'script.js')

      defineComponent(this.tagName, worker)
      appendStyle(this.publicPath, 'style.css')

      return this
    }
  },
  {
    extends: 'meta'
  }
)
