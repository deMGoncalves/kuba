import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import media from '@kuba/media'

@paint(component)
class Thumbnail {
  #alt
  #desc
  #marca
  #opened
  #src

  get alt () {
    return this.#alt
  }

  get desc () {
    return this.#desc
  }

  get marca () {
    return this.#marca
  }

  get opened () {
    return this.#opened ??= f.F()
  }

  get src () {
    return this.#src
  }

  constructor (alt, desc, marca, src) {
    this.#alt = alt
    this.#desc = desc
    this.#marca = marca
    this.#src = src
    this.media()
  }

  media () {
    media('(min-width: 769px)') 
      .in(() => console.log('olá'))
      .out(() => console.log('tchau'))
    return this
  }

  static create (data) {
    return new Thumbnail(
      data.modelo,
      data.descricao,
      data.marca.nome,
      data.thumbnail
    )
  }
}

export default Thumbnail
