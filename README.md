[![Vercel](https://vercelbadge.vercel.app/api/demgoncalves/kuba)](https://github.com/deMGoncalves/kuba)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![GitHub issues](https://img.shields.io/github/issues/deMGoncalves/kuba)](https://github.com/deMGoncalves/kuba/issues)
[![GitHub forks](https://img.shields.io/github/forks/deMGoncalves/kuba)](https://github.com/deMGoncalves/kuba/network)
[![GitHub stars](https://img.shields.io/github/stars/deMGoncalves/kuba)](https://github.com/deMGoncalves/kuba/stargazers)
[![GitHub license](https://img.shields.io/github/license/deMGoncalves/kuba)](https://github.com/deMGoncalves/kuba)

### [Kuba](https://www.kuba.engineer)

Ninguém precisa ter muitas habilidades para desenvolver um produto que funcione, fazer direito é outra história. Desenvolver um produto de maneira correta é um desafio que deixo lançado. Requer maturidade e conhecimentos que a maioria dos programadores ainda não tem.

Quando focamos no domínio, minimizamos a quantidade de programadores para desenvolver e sustentar um produto. As mudanças se tornam cirúrgicas, simples e fáceis. Deixamos de ser eficiente e nos tornamos eficazes. As funcionalidades e flexibilidades são maximizadas.

#### [Clone](https://github.com/deMGoncalves/kuba)

Kuba é um projeto de referência (Amálgama) a ser seguido e não um Framework e/ou Library que condiciona e obriga a uma situação de implementação! Ele deve ser estudado, entendido e adaptado as realidades do produto, de forma a garantir as condições de comportamento e estrutura.

Use o git para fazer uma cópia.

```bash
git clone https://github.com/deMGoncalves/kuba.git
```

#### [Instalação](https://github.com/deMGoncalves/kuba)

Kuba foi projetado para um processo de trabalho simplificado, para instalar as dependencias e executar o projeto, basta executar o comando padrão.

```bash
yarn install
```

#### [Commandos](https://github.com/deMGoncalves/kuba)

Os comandos do projeto são muito bem padronizados, sendo eles serve, test, build e build:analyzer.

```bash
yarn workspace @kuba/[package] <command>
```

##### [serve](https://github.com/deMGoncalves/kuba)

Usaremos este comando para servir o pacote @kuba/app, para isso bastar executar o comando abaixo.

```bash
yarn workspace @kuba/app serve
```

> Fiquem atentos, o comando dev será usado apenas nos pacotes do workspace buckets.

##### [test](https://github.com/deMGoncalves/kuba)

Usaremos este comando para testar o pacote @kuba/app, para isso precisamos executar o comando abaixo.

```bash
yarn workspace @kuba/app test
```

Também podemos executar o teste em todos os pacotes do projeto

```bash
yarn test
```

##### [build](https://github.com/deMGoncalves/kuba)

Usaremos este comando para compilar o pacote.

```bash
yarn workspace @kuba/app build
```

> Fiquem atentos, o comando build será usado apenas nos pacotes do workspace buckets.

##### [build:analyzer](https://github.com/deMGoncalves/kuba)

Usaremos este comando para analizar o build.

```bash
yarn workspace @kuba/app build:analyzer
```

> Fiquem atentos, o comando build:analyzer será usado apenas nos pacotes do workspace buckets.



🚧  Como usar em construção...  🚧
