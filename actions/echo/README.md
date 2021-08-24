## [echo](#)

O módulo echo emite e escuta mensagens entre dois pontos no código.

### [import](#)

```javascript
import echo from '@kuba/echo'
```
- o **echo** é um namespace que agrega o `on` e o `emit`.

### [echo.on](#)

Após deixar a mensagem pronta, precisamos escutar ela, e é neste momento que utilizamos o emit.on, com dois parâmetros também, o canal e o manipulador.

```javascript
echo.on('canal:acao', payload => console.log(payload))
```

#### Parâmetros:

- **channel**: o canal é o identificador da mensagem que queremos monitorar, e a ação é o nome que definimos para ela.

- **callback**: função que será disparada quando o canal for acionado.


### [echo.emit](#)

No emit estamos enviando a mensagem...
No primeiro parâmetro passamos o canal, onde inserimos uma string identificando o comportamento,
e o segundo parâmetro será a mensagem que ele irá passar.

```javascript
echo.emit('canal:acao', {...})
```

#### Parâmetros:

- **channel**: o canal é o identificador da mensagem que queremos monitorar, e a ação é o nome que definimos para ela.

- **payload**: este parâmetro não é obrigatório, e precisa ser um json válido, ou valores como: `boolean`, `number`, `string`, `array` ou `object`


### [exemplos](#)

Separamos alguns exemplos de uso: 

- [Shelf  (on)](https://github.com/deMGoncalves/kuba/blob/743df830c22568fac46abce28ce531a0bec28fe3/actions/scrolllock/src/index.js#L4)
- [Filter (emit)](https://github.com/deMGoncalves/kuba/blob/743df830c22568fac46abce28ce531a0bec28fe3/blocks/filter/src/region/region.js#L50)
