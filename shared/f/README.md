[voltar](../README.md)

REX
======
:star2: `JavaScript é como uma folha em branco – A liberdade de programar do jeito que faça sentido para o negócio!` :star2:

## F
  <img src="https://github.com/oneOffJS/rex.community/raw/master/rex.png" alt="Rex Logotipo" width="300" height="300" />

Estruturas funcionais. Trabalham de forma matemática, com intuito de evitar mudança de estado e dados mutáveis.

# Bibliotecas
## and
  Operador lógico `and - &&`, verifica dois valores retorna um Boleano verdadeiro se os dois valores forem verdadeiros.
  ```bash
    and(true, false) # --> Retorna false
    and(true, true) # --> Retorna true
  ```

## or
  Operador lógico `or - ||`, verifica dois valores retorna um Boleano verdadeiro se um dois valores forem verdadeiros.
  ```bash
    or(true, false) # --> Retorna true
    or(false, true) # --> Retorna true
  ```

## not
  Inverte um valor booleano.
  ```bash
    not(true) # --> Retorna false
    not(false) # --> Retorna true
  ```

## different
  Testa se dois valores são diferentes.
  ```bash
    different(1, 2) # --> Retorna true
    different(1, 1) # --> Retorna false
  ```

## equal
  Testa se dois valores são iguais.
  ```bash
    different(1, 2) # --> Retorna false
    different(1, 1) # --> Retorna true
  ```

## has
  Verifica se uma propriedade foi definida em um objeto.
  ```bash
    const obj = { a: 0, b: 1 }
    has('a', obj) # --> Retorna true
    has('c', obj) # --> Retorna false
  ```

## isNil
  Verifica se um valor é null ou undefined
  ```bash
    isNil(undefined) # --> Retorna true
    isNil(null) # --> Retorna true
  ```

## isEmpty
  Verifica se uma estrutura está vazia
  ```bash
    isEmpty({}) # --> Retorna true
    isEmpty([]) # --> Retorna true
  ```

## arity
  Reduz o número de parâmetros de uma função.
  ```bash
    # 1 parâmetro: número de parâmetros (deve ser um número inteiro não negativo. Número máximo 3).
    # 2 parâmetro: função que terá seu número de parâmetros reduzido.
    func(1, 2, 3)
    arity(3, func) # --> Retorna func(1)
  ```

## forEach
  Executa iterações em matrizes (Causa mutação na matriz original).
  ```bash
    # 1 parâmetro: matriz de valores.
    # 2 parâmetro: função de callback
    const m = [1, 2, 3]
    func() # --> Retorna n + 1
    forEach(m, func) # --> Retorna [2, 3, 4]
  ```

## map
  Executa iterações em matrizes (Não causa mutação na matriz original, retorna uma nova matriz).
  ```bash
    # 1 parâmetro: matriz de valores.
    # 2 parâmetro: função de callback
    const m = [1, 2, 3]
    func() # --> Retorna n + 1
    map(m, func) # --> Retorna [2, 3, 4]
  ```

## concat
  Concatena valoes de matrizes.
  ```bash
    # 1 parâmetro: matriz de valores 1.
    # 2 parâmetro: matriz de valores 2.
    const m1 = [1, 2, 3]
    const m2 = [4, 5]
    concat(m1, m2) # --> Retorna [1, 2, 3, 4, 5]
  ```

## repeat
  Repete um valor uma quantidade expecificada.
  ```bash
    # 1 parâmetro: elemento a ser repetido.
    # 2 parâmetro: quantidade de repetoções.
    repeat(2, 3) # --> Retorna [2, 2, 2]
  ```

## slice
  Redimensiona uma matriz.
  ```bash
    # 1 parâmetro: matriz.
    # 2 parâmetro: índice inicial.
    # 3 parâmetro: índice final.
    const m = [1, 2, 3, 4, 5]
    slice(m, 0, 2) # --> Retorna [1, 2]
  ```

## join
  Transforma uma matriz em string com separadores.
  ```bash
    # 1 parâmetro: matriz.
    # 2 parâmetro: separador.
    const m = [1, 2, 3, 4, 5]
    slice(m, '-') # --> Retorna "1-2-3-4-5"
  ```

## toLower
  Transforma letras minúsculas em maiúsculas.
  ```bash
    # 1 parâmetro: string.
    toLower('charles') # --> Retorna "CHARLES"
  ```

## toPairs
  Separa chaves e valores de objetos em matrizes
  ```bash
    # 1 parâmetro: objeto.
    const obj = { a: 1, b: 2 }
    toPairs(obj) # --> Retorna [['a', 1], ['b', 2]]
  ```

## flatten
  Remove matrizes dentro de matriz.
  ```bash
    # 1 parâmetro: matriz.
    const m = [1, 2, [4, 5]]
    flatten(m) # --> Retorna [1, 2, 4, 5]
  ```

## assign
  Adiciona novas propriedades para um objeto.
  ```bash
    # 1 parâmetro: objeto.
    # 2 parâmetro: novos valores.
    const obj = { a: 0, b: 2 }
    assign(obj, { c: 3 }) # --> Retorna { a: 0, b: 2, c: 3 }
  ```

## F
  Retorna falso
  ```bash
    F() # --> Retorna false
  ```

## T
  Retorna verdadeiro
  ```bash
    T() # --> Retorna true
  ```

## test
  Testa uma Expressão Regular
  ```bash
    # 1 parâmetro: expressão.
    # 2 parâmetro: valor a ser avaliado.
    const reg = /Charles/
    test(reg, 'Xavier') # --> Retorna false
  ```

<!-- ## prop
  ```bash
  ``` -->

<!-- ## lte
  ```bash
  ``` -->

<!-- ## aperture
  ```bash
  ``` -->

<!-- ## curry
  ```bash
  ``` -->

<!-- ## gap
  ```bash
  ``` -->

<!-- ## magic
  ```bash
  ``` -->

<!-- ## always
  ```bash
  ``` -->

<!-- ## is
  ```bash
  ``` -->

<!-- ## cond
  ```bash
  ``` -->