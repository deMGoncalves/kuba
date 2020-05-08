;((host) => {
  const createScript = () =>
    document.createElement('script')

  const setUrl = (fileName, nodeElement) => {
    nodeElement.setAttribute('src', `${host}/${fileName}`)
    return nodeElement
  }

  const appendScript = (nodeElement) =>
    document.head.appendChild(nodeElement)

  const equals = (regex) =>
    (fileName) => regex.test(fileName)

  const difference = (regex) =>
    (fileName) => !equals(regex)(fileName)

  const loadScript = (test, chunks) =>
    chunks
      .filter((fileName) => test(fileName))
      .forEach((fileName) => appendScript(setUrl(fileName, createScript())))

  fetch(`${host}/stats.json`)
    .then((response) => response.json())
    .then((stats) => stats.assetsByChunkName)
    .then((assetsByChunkName) => Object.values(assetsByChunkName))
    .then((chunks) => {
      loadScript(equals(/runtime/), chunks)
      loadScript(equals(/vendors/), chunks)
      loadScript(difference(/runtime|vendors/), chunks)
    })
    .catch((error) => console.log('Erro: Não foi possivel carregar os chunks', error))
})('http://localhost:9000')
