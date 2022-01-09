# Hgroup

O componente Hgroup é usado para renderizar Título (principal) e Descrição em uma interface, criando dinamicamente as tags H1 e P.

Pode ser utilizado com somente uma propriedade.

### import

```javascript
import Hgroup from '@kuba/hgroup'
```

### Uso

Textos devem vir do arquivo <b>schema.json</b> referente a cada página.

```javascript
<Hgroup>
  <Fragment slot='title'>{props.title}</Fragment>
  <Fragment slot='description'>{props.description}</Fragment>
</Hgroup>
```


