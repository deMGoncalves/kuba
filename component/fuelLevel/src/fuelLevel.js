import { paint } from '@kuba/h'
import component from './component'
import noUiSlider from '../../../.prelude/artifact/noUiSlider/src'

@paint(component)
@noUiSlider
class FuelLevel {
  [noUiSlider.element] () {
    return this[paint.rootElement]().querySelector('.fuelLevel')
  }

  [noUiSlider.options] () {
    return {
      connect: 'lower',
      range: {
        min: 0,
        max: 100
      },
      start: 0,
      step: 10
    }
  }
}

export default FuelLevel
