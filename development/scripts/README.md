## [Scripts](#)

O Scripts é uma ferramenta de interface de linha de comando que você usa para inicializar, desenvolver, criar scaffold.

### [generate package](#)

Cria um novo pacote

```bash
yarn generate package [name] [workspace]
```

#### Parâmetros:

- **name**: Nome do pacote
- **workpace**: Nome do workspace que o pacote sera gerado

### [generate class](#)

Cria um class component

```bash
yarn generate class [name] [path] -f [folder]
```

#### Parâmetros:

- **name**: Nome do class component
- **path**: Nome do workspace e pacote que o class component sera gerado
- **-f**: (Não obrigatório) Caminho de pasta que o class component sera gerado, o padrão é `src`

### [generate component](#)

Cria um component

```bash
yarn generate component [name] [path] -f [folder]
```

#### Parâmetros:

- **name**: Nome do component
- **path**: Nome do workspace e pacote que o component sera gerado
- **-f**: (Não obrigatório) Caminho de pasta que o component sera gerado, o padrão é `src`

### [formatter](#)

Formata os codigos `js` e `jsx` no padrão standard

```bash
yarn formatter [package] --no-stylelint
```

#### Parâmetros:

- **package**: Nome do pacote
- **--no-stylelint**: (Não obrigatório) Quando o pacote nao tiver styled componets usar esta flag panara não executar o stylelint

### [server](#)

Sober o server de desenvolvimento

```bash
yarn serve [package]
```

#### Parâmetros:

- **package**: Nome do pacote

### [test](#)

Executa os testes de um pacote

```bash
yarn test [package] -w
```

#### Parâmetros:

- **package**: Nome do pacote
- **-w**: (Não obrigatório) Manter o teste ativo, observando as mudanças nos código
