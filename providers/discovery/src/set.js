export default (serie, data) =>
  localStorage.setItem(`_ml.${serie}`, JSON.stringify(data))
