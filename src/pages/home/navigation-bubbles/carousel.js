import Siema from 'siema'
import perPage from './media.json'
import style from './style.css'

export default (component) =>
  (...args) => {
    setImmediate(() =>
      new Siema({
        perPage,
        selector: `.${style.navigation__nav}`
      })
    )

    return component(...args)
  }
