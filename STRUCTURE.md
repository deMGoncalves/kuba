## Estrutura

A estrutura de um projeto é fundamental para o seu sucesso e eficiência. Quando se trata de estruturar um projeto de software, é essencial que a sua organização seja clara e que ela reflita o domínio do projeto. Afinal, o objetivo final de um projeto de software é resolver um problema específico, e isso requer um conhecimento profundo e uma estrutura que seja facilmente compreensível pelos desenvolvedores e usuários.

Ao criar uma estrutura para um projeto, é importante considerar que nem todos os arquivos e pastas são igualmente importantes. Alguns arquivos e pastas são essenciais para o domínio do projeto, enquanto outros são apenas de suporte. Portanto, é crucial que a estrutura do projeto deixe clara a importância e o papel de cada arquivo e pasta.

A estrutura de um projeto de software deve ser projetada de forma que o domínio do projeto seja facilmente identificável. Por exemplo, se o projeto se refere a um aplicativo de viagens, os arquivos e pastas relacionados a viagens devem estar em evidência. Isso pode incluir pastas como "hotéis", "voos", "roteiros" e assim por diante. Além disso, é importante que a estrutura do projeto seja fácil de navegar, para que os desenvolvedores possam encontrar rapidamente as informações de que precisam.

-  `.assets`: essa pasta contém arquivos estáticos, como imagens, ícones, fontes, entre outros. São arquivos de suporte para o projeto, mas que não fazem parte do domínio da aplicação em si.
-  `.prelude`: essa pasta contém um conjunto de arquivos e pastas que implementam uma biblioteca de suporte ao desenvolvimento do projeto, incluindo:
    -  `artifact`: é onde concentramos as bibliotecas de terceiros utilizadas no projeto.
    -  `directive`: contém as definições de diretivas personalizadas, que adicionam comportamento a elementos HTML existentes.
    -  `element`: contém as definições de elementos personalizados, que encapsulam o comportamento e a aparência de um elemento HTML e dependem do contexto em que são usados.
    -  `pixel`: contém arquivos de estilo que definem as medidas em pixels usadas no projeto.
    -  `polyfill`: contém arquivos que implementam recursos modernos da Web em navegadores mais antigos que não os suportam nativamente.
    -  `standard`: contém arquivos de estilo que implementam um conjunto de regras comuns para a aparência e comportamento dos elementos do projeto.
-  `component`: essa pasta contém as definições de componentes específicos do domínio da aplicação. São componentes reutilizáveis que encapsulam o comportamento e a aparência de um elemento ou conjunto de elementos, mas que dependem do contexto em que são usados.
-  `site`: essa pasta contém as definições de páginas específicas do domínio da aplicação. São páginas que implementam fluxos e funcionalidades específicas do domínio da aplicação, e que dependem dos componentes definidos na pasta "component".

Por fim, uma estrutura de projeto bem pensada pode contribuir para a eficiência e a qualidade do desenvolvimento de software. Uma estrutura clara e organizada pode ajudar a reduzir erros e problemas de compatibilidade, além de facilitar a manutenção e o suporte do projeto. Por isso, é importante investir tempo e esforço na criação de uma estrutura que faça sentido para o domínio do projeto e que possa ser facilmente mantida e atualizada ao longo do tempo.
