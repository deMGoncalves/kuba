# icon

O component icon é usado para renderizar icones em uma interface, criando dinamicamento o tipo

### import

```javascript
import icon from '@kuba/icon'
```

### utilização

```javascript
<icon.ArrowLeft />
```

### alterando o tamanho do icon

Para alterar o tamanho do icon, você pode passar uma das propriedades de tamanho

```javascript
<icon.ArrowLeft largest/>
```

### props

Estas sao as propriedades especificas do component icon:

| Name | type | default | description |
| :---: | :---: | :---: | :---: |
| largest | string | - | Altera o tamanho do icon para 34px
| larger | string | - | Altera o tamanho do icon para 26px
| large | string | - | Altera o tamanho do icon para 21px
| medium | string | yes | Altera o tamanho do icon para 16px
| small | string | - | Altera o tamanho do icon para 13px
| smaller | string | - | Altera o tamanho do icon para 10px
| smallest | string | - | Altera o tamanho do icon para 8px

### adicionando novos icones

Adicione novos icones colocando o arquivo de imagem em elements\icon\src\assets e exportando ele no arquivo elements\icon\src\mapper.js, 

```javascript
export { default as NewIcon } from './assets/new-icon.svg'
