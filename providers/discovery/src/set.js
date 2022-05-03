export default (serie, data) =>
  localStorage.setItem(`_discovery.${serie}`, JSON.stringify(data))
