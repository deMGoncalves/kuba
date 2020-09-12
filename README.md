REX
======
:star2: `JavaScript é como uma folha em branco – A liberdade de programar do jeito que faça sentido para o negócio!` :star2:

<img src="https://github.com/oneOffJS/rex.community/raw/master/rex.png" alt="Rex Logotipo" width="300" height="300" />

Bem vindo ao **Rex Community**

Diferente das propostas de mercado aqui não lhe trazemos um framework e sim uma visão de **arquitetura**. <br />
Onde implementamos patterns e boas praticas de mercado, visando o ecossistema do DDD e tirando proveito dos recursos do Javascript modernos. <br /> 
Dsponibilizando tudo de maneira clara e objetiva, para que você possa utilizar em seus projetos e aprimorar seus conhecimentos.

### Arquitetura
  Baseada em um sistema de **Monorepo** uma estratégia de desenvolvimento de software onde multiplos projetos são armazenados em um único repositório.

#### Vantagens
  - **Reutilização de código:** Funcionalidades semelhantes ou comunicações, podem ser compartilhadas entre os projetos, sem a necessidade de muitas dependências.
  - **Gerenciamento de dependências:** A construção pode ser facilmente optimizada, havendo um grande reuzo de dependências na mesma base de código.
  - **Refatoração de códigos:** Tendo acesso a toda a base de código os desenvolvedores, podem garantir que todo ecossistema estará funcionando à cada rafatoração.
  - **Colaboração entre equipes:** As dependências são compartilhadas à partir da fonte, as equipes podem ter visão e reutilização de códigos escritos por outras equipes.

#### Desvantagens
  - **Versionamento:** Como cada projeto do repositório tem suas versões, acaba gerando uma complexidade alta para a gerência de versões.
  - **Segurança:** Acesso de leitura a todo o projeto, possivelmente apresentando novas questões de segurança.

## Sumário
  1. [Dependências](#1-dependências)
  2. [Estrututura do projeto](#2-estrututura-do-projeto)
  3. [Comandos](#3-comandos)

## 1. Dependências
  - [Node.js](https://nodejs.org) - `versão 12.18.0 ou superior`
  - [Yarn](https://yarnpkg.com) - `versão 1.17.3 ou superior`

**Obs.** Versões listadas podem estar desatualizadas, consulte sempre o arquivo [package.json](./package.json) para saber as versões corretas.

## 2. Estrututura do projeto
O projeto é composto de projetos onde **apps** contém os arquivos de cada projeto individual `(Ex. photosnap, todomvc, etc)`, **shared** contém projetos que serão compartilhados `bibliotecas (f, h)`.
Na raíz ficará os arquivos do monorepo.
Cada um terá suas dependências, configurações e etc de maneira individual.

![alt Diagrama](new-diagrama.jpg "Diagrama")

**Projetos**
  - [apps](./apps/README.md)
  - [shared](./shared/README.md)

## 3. Comandos
  #### Setup
    ``` bash
      # Montagem do setup do projeto
      $ yarn install
      $ yarn setup
    ```
