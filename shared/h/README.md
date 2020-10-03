[voltar](../README.md)

REX
======
:star2: `JavaScript é como uma folha em branco – A liberdade de programar do jeito que faça sentido para o negócio!` :star2:

## H
  <img src="https://github.com/oneOffJS/rex.community/raw/master/rex.png" alt="Rex Logotipo" width="300" height="300" />

Estruturas de drawing. Funções especializadas em desenhar tela e manipular DOM. <br />
**Obs.** É necessária a importação em toda página .jsx para correta renderização dos componentes.

# Bibliotecas

## extendAttributes
  Conjunto de funções responsáveis por gerenciar eventos e atributos em tags.

Função | Contexto
------------ | -------------
addEventListener | Recebe 3 parâmetros `element, name, handler`, cria uma etrutura responsável pelo armazenamento de eventos e **handlers**. 
addEventListenerWithPrevent | Invoca a função `addEventListener` e envia seus parâmetros, setando o handler como **preventDefault**.
addEventListenerWithStop | Invoca a função `addEventListener` e envia seus parâmetros, setando o handler como **stopPropagation**.
addEventListenerWithStopAndPrevent | Invoca a função `addEventListener` e envia seus parâmetros, setando o handler como **stopPropagation** e passando **preventDefault** como parâmetro à **stopPropagation**.
extendAttributes | Adiciona novos atibutos a um elemento. Recebe 2 parâmetros `attributes, element`. **attributes:** Novos atributos <br /> **element:** Elemento que receberá novos atributos.
isClassName | Verifica a existência de uma classe.
isEvent | Verifica se existe um evento.
isEventWithPrevent | Verifica a existencia do `_prevent` na Tag.
isEventWithStop | Verifica a existencia do `_stop` na Tag.
isEventWithStopAndPrevent | Verifica a existencia do `stop` ou `prevent` na Tag.
isHtmlFor | Testa se existe `htmlFor` na Tag
preventDefault | Mata o acionamento de eventos padrões de um elemento. Recebe como parâmetos o `acionador de evento` do elemento
resolveExtend | Faz a verificação e validações das funções de atributos.
setAttribute | Insere atributos em um elemento. Recebe como parâmetro o `element`.
setClassName | Insere o nome em uma classe. Recebe um `element` como parâmetro.
setHtmlFor | Insere o atributo for a um elemento. Recebe como parâmetro o `element`
stopPropagation | Encerra a propagação de eventos. Recebe como parâmetro o `handler` disparador do evento. 


## fragment
  Componente para renderizar HTML substituindo o elemento PAI sem injetar elemantos na marcação.
  ```bash
    <>
      <p>Elemento 1</p>
      <p>Elemento 2</p>
    </>
  ```

## frame
  Função focada em performance responsável por renderizar elementos em GPU. recebe 2 parâmetros `target, args`. <br />
  **target:** o elemento a ser renderizado; <br />
  **args:** recebe todos os argumantos do elemento e os propaga.

## h
  Core da biblioteca, armazena as funções base para a renderização da tela `retorna elementos HTML`.

  Função | Contexto
  ------------ | -------------
  appendChildren | Adiciona um nó ao final da lista de filhos de um elemento especificado. Recebe 2 parâmetros `children, element`. <br /> **children:** Elemento filho que será inserido no escopo; <br/> **element:** Elemento  que receberá o item filho em seu escopo.
  createComment | Cria comentarios. Recebe como parâmetro o texto que será adicionado ao comentário. 
  createElement | Cria um elemento. Recebe 3 parâmetros `tagName, attributes, children`. <br /> **tagName:** Nome da Tag a ser criada; <br /> **attributes:** Atributos da Tag a ser criada; <br /> **children:** Elementos filhos da Tag a ser criada.
  executeComponent | Cria a estrutura do componente. Recebe 3 parâmetros `component, attributes, children`. <br />**component:** Componente a ser criado; <br /> **attributes:** Atributos do componente a ser criado; **children:** Filhos do componente a ser criado.
  h | Reponsável por chamar o grupo base de funções, verificar coerência e executar o processo.
  isComponent | Verifica se a Tag a ser criada é customizada ou padrão. Recebe como parâmeto `nome da tag`
  isTagName | Verifica se no nome da Tag é válido.
  isTextNode | Verifica o conteudo da Tag. Recebe como parâmetro a Tag
  mapComponent | Varre o componente e valida seus filhos. Recebe como parâmetos um array de filhos
  mapTextNode | Cria o conteúdo do elementos filhos. Recebe como parâmetos um array de filhos

## hide
  Insere uma lógica condicional para um elemento ser oculto no DOM.
  ```javascript
    <h.Hide if={condicao}>
      <marcação HTML />
    </h.Hide>
  ```

## paint
  Componente especializado em desenhar outros componentes em tela, trabalha como `decorator`, encapsulando os componentes em suas respectivas classes.
  ```javascript
    @paint
  ```

## repaint
  Componente especializado em re-desenhar outros componentes em tela, trabalha como `decorator`, encapsulando os metodos que atualizam o DOM.
  ```javascript
    @repaint
  ```
