import Siema from 'siema'
import media from './media.json'
import style from './style.css'

export default (component) =>
  (...args) => {
    setImmediate(() =>
      new Siema({
        perPage: media,
        selector: `.${style.navigation__nav}`
      })
    )

    return component(...args)
  }
