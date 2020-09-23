REX
======
![GitHub repo size](https://img.shields.io/github/repo-size/oneOffJS/rex.community)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/oneOffJS/rex.community)
![GitHub top language](https://img.shields.io/github/languages/top/oneOffJS/rex.community)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/oneOffJS/rex.community/master)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/oneOffJS/rex.community/Photosnap)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/oneOffJS/rex.community/master)

:star2: `JavaScript é como uma folha em branco – A liberdade de programar do jeito que faça sentido para o negócio!` :star2:

<img src="https://github.com/oneOffJS/rex/raw/master/rex.png" alt="Rex Logotipo" width="300" height="300" />

Bem vindo ao **Rex Community**

Diferente das propostas de mercado aqui não trazemos um framework e sim uma visão de **arquitetura**, <br />
onde implementamos patterns e boas praticas de mercado, visando o ecossistema do DDD e tirando proveito dos recursos do Javascript moderno. <br /> 
Disponibilizando tudo de maneira clara e objetiva, para que você possa utilizar em seus projetos e aprimorar seus conhecimentos.

### Arquitetura
  Baseada em um sistema de **Monorepo** uma estratégia de desenvolvimento de software onde multiplas aplicações são armazenados em um único repositório.

#### Vantagens
  - **Reutilização de código:** Funcionalidades semelhantes ou comunicações, podem ser compartilhadas entre as aplicações, sem a necessidade de muitas dependências.
  - **Gerenciamento de dependências:** A aplicação pode ser facilmente otimizada, havendo um grande reuzo de dependências na mesma base de código.
  - **Refatoração de códigos:** Tendo acesso a toda a base de código, os desenvolvedores podem garantir que todo ecossistema estará funcionando à cada rafatoração.
  - **Colaboração entre equipes:** As dependências são compartilhadas à partir da fonte, as equipes podem ter visão e reutilização de códigos escritos por outras equipes.

#### Desvantagens
  - **Versionamento:** Gerenciamento de versões é mais complexa uma vez que cada aplicação tem um versionamento próprio
  - **Segurança:** Acesso de leitura a todo o projeto, possivelmente apresentando novas questões de segurança.

## Sumário
  1. [Dependências](#1-dependências)
  2. [Estrututura do projeto](#2-estrututura-do-projeto)
  3. [Comandos](#3-comandos)
  4. [Como Contribuir?](#4-como-contribuir?)
  5. [Licença](#4-licenca)

## 1. Dependências
  - [Node.js](https://nodejs.org) - `versão 12.18.0 ou superior`
  - [Yarn](https://yarnpkg.com) - `versão 1.17.3 ou superior`

**Obs.** Versões listadas podem estar desatualizadas, consulte sempre o arquivo [package.json](./package.json) para saber as versões corretas.

## 2. Estrututura do projeto
O Core do sistema possui os arquivos base do monorepo, **apps** contém as aplicações específicas `(Ex. photosnap, todomvc, etc)` e **shared** contém os módulos que serão compartilhados entre as aplicações `bibliotecas (f, h)`.

![alt Diagrama](new-diagrama.jpg "Diagrama")

**Módulos**
  - [apps](./apps/README.md)
  - [shared](./shared/README.md)

## 3. Comandos
  #### Setup
  ```bash
    # Montagem do setup do projeto
    $ yarn install
    $ yarn setup
  ```

## 4. Como Contribuir?
  Adoraríamos ter sua ajuda em nosso projeto! Clique [aqui](./CONTRIBUTING.md) para obter mais informações sobre o que estamos procurando e como começar.

## 5. Licença
  [MIT License](./LICENSE.md)
