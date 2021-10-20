## [authRequired](#)

A action authrequired é usada para manter o site seguro contra qualquer acesso, onde o usuário precisará ter um token específico para conseguir o acesso.

### [import](#)

```js
import authRequired from '@kuba/authrequired'
```

### [uso](#)

Deve decorar a class da página que queremos proteger.

```js
@authRequired
class MyClass {

}
```
