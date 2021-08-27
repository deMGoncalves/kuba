## [media](#)

A action media permite saber se a resolução da tela do usuário está dentro de uma media query

### [import](#)

```javascript
import media from '@kuba/media'
```

### [uso](#)

```javascript
 media('(min-width:769px)')
  .in(() => console.log('está dentro'))
  .out(() => console.log('está fora'))
```

#### Parâmetros:

- **'(min-width:769px)'**: passe uma string com a media query desejada para verificação

### [exemplos](#)


[Header](https://github.com/deMGoncalves/kuba/blob/32dc3a52be111fc11b8558c17018499a75e17677/blocks/header/src/search/resize.js#L5)

