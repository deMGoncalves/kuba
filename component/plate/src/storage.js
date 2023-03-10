import { setGlobal } from '@kuba/global'
import interceptor from '@kuba/interceptor'
import magic from '@kuba/magic'
import supabase from '../../../.prelude/artifact/supabase/src'

const storage = interceptor(function (args, next) {
  const [plate] = args

  if (plate.length !== 7) {
    return next(...args)
  }

  supabase
    .functions
    .invoke('plate', { body: { plate } })
    .then((response) => response.data)
    .then((data) => ({
      plate,
      brand: data?.Marca,
      model: data?.Modelo,
      cylinderCapacity: data?.cilindradas,
      fuel: data?.Combustivel,
      year: data?.AnoModelo
    }))
    .then(setGlobal)
    .then(() => this[storage.outlet]?.('loaded'))
  this[storage.outlet]?.('loading')
  return next(...args)
})

Object.assign(storage, {
  outlet: magic.storage_outlet
})

export default storage
