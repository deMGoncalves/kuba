# select

O component Select é usado comumente em componentes como o filtro, que ao clicar abre uma sidebar com conteúdo que será selecionado pelo usuário.

### import

```javascript
import Select from '@kuba/select'
import text from '@kuba/text'
import icon from '@kuba/icon'
```

### uso

Chame o componente, utilize um header para o texto principal que fica no topo da sidebar, e um ícone para fechar. O funcionamento correto depende da propriedade opened, que recebe um boleano para controlar a abertura e fechamento. A propriedade onClose será acionada quando ele for fechado através do clique externo, no overlay, dessa forma podemos utilizar isso para controlar o estado de aberto ou fechado no component pai

```javascript
<Select className={style.select} opened={select.opened} onClose={() => select.close()}>
  <header className={style.select__header}>
    <text.Strong className={style.select__label} master darker>{select.label}</text.Strong>
    <button className={style.select__close} onClick={() => select.close()}>
      <icon.Close className={style.select__icon} large />
    </button>
  </header>
  <main className={style.select__main}>
    {select.options}
  </main>
</Select>
```


