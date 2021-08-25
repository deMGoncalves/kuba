# link

O component link é usado para renderizar links  em uma interface, criando dinamicamento o tipo

### import

```javascript
import link from '@kuba/link'
```

### uso

exemplo de uso no jsx

```javascript
<link href="#" >apaixonado pela use Fashion</link>
```

### Mudando o tamanho do link

Para mudar o tamanho do link, você pode passar uma das propriedades de tamanho

```javascript
<link href="#" largest>(largest) apaixonado pela use Fashion</link>
```
### Mudando a cor do link

Para mudar a cor do link, você pode passar uma das propriedades de cor

```javascript
<link href="#" darkest>(largest) apaixonado pela use Fashion</link>
```

### props

Estas sao as propriedades especificas do componet text:

| Name | type | default | description |
| :---: | :---: | :---: | :---: |
| largest | string | - | Altera o tamanho do texto para 34px
| larger | string | - | Altera o tamanho do texto para 26px
| large | string | - | Altera o tamanho do texto para 21px
| medium | string | yes | Altera o tamanho do texto para 16px
| small | string | - | Altera o tamanho do texto para 13px
| smaller | string | - | Altera o tamanho do texto para 10px
| smallest | string | - | Altera o tamanho do texto para 8px
| primary | string | - | Altera para cor padrão primária

