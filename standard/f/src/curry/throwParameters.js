function throwParameters () {
  throw new Error('A quantidade de argumentos deve ser um número inteiro não negativo e não superior a três')
}

Object.assign(throwParameters, {
  is: () => true
})

export default throwParameters
