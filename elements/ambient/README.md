# text

O componente de texto é usado para renderizar texto em uma interface, criando dinamicamento o tag name

### import

```javascript
import text from '@kuba/text'
```

### Mudando o tamnho do text

Para mudar o tamanho da fonte do texto, você pode passar uma das propriedades de tamanho

```javascript
<text.P largest>(largest) apaixonado pela kuba</text.P>
```
### Mudando a cor do text

Para mudar a cor da fonte do texto, você pode passar uma das propriedades de cor

```javascript
<text.P master darkest>(darker) apaixonado pela kuba</text.P>
```

### props

Estas sao as propriedades especificas do componet text:

| Name | type | default | description |
| :---: | :---: | :---: | :---: |
| largest | boolean | - | Altera o tamanho do texto para 34px
| larger | boolean | - | Altera o tamanho do texto para 26px
| large | boolean | - | Altera o tamanho do texto para 21px
| medium | boolean | yes | Altera o tamanho do texto para 16px
| samll | boolean | - | Altera o tamanho do texto para 13px
| smaller | boolean | - | Altera o tamanho do texto para 10px
| smallest | boolean | - | Altera o tamanho do texto para 8px
| darkest | boolean | - | Altera a escala da cor em 0%
| darker | boolean | - | Altera a escala da cor em 27%
| darke | boolean | - | Altera a escala da cor em 45%
| light | boolean | - | Altera a escala da cor em 16%
| lighter | boolean | - | Altera a escala da cor em 9.5%
| lightest | boolean | - | Altera a escala da cor em 3%
| master | boolean | yes | Cor principal do texto
