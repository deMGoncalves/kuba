## [echo](#)

Te permite enviar e escutar mensagens entre dois pontos no código.

### [import](#)

```js
import echo from '@kuba/echo'
```
- o **echo** é um namespace que agrega `on` e `emit`.

### [echo.on](#)

Escutar mensagens que serão disparados de outros pontos da aplicação.

```js
echo.on('channel:action', console.log)
```

#### Parâmetros:

- **channel**: o identificador das mensagens que queremos monitorar.
- **callback**: função que será executado quando o canal for acionado.

### [echo.emit](#)

Emita mensagens para outros pontos da aplicação escutar.

```js
echo.emit('channel:action', {...})
```

#### Parâmetros:

- **channel**: o identificador das mensagens que queremos monitorar.
- **payload**: (Não obrigatório) valor que será passado para os ouvintes, ou valores válidos são: `boolean`, `number`, `string`, `array` ou `object`. 
