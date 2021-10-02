import echo from '@kuba/echo'

class Cron extends HTMLDivElement {
  connectedCallback () {
    echo.emit(`lazy:${this.dataset.channel}`)
    return this
  }
}

customElements.define('lazy-cron', Cron, { extends: 'div' })
