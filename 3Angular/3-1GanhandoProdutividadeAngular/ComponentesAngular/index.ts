/*
    Componente é visual, customizável e reutilizável/replicável.
    É uma função JS/TS que retorna HTML, CSS e carrega eventos Javascript juntos.

    A composição dos componentes é montada por meio de injeção de dependências

    A injeção de dependências é um padrão de desenvolvimento utilizada em
    diversos cenários diferentes, é uma estratégia de desenvolvimento muito utilizada.

    A injeção é feita quando algo depende de outra coisa para funcionar, mas ela não produz diretamente esse conteúdo, possuindo, assim, a depedência de algum agente externo.

    Os componentes são feitos de maneira isolada, são injetados no componente app-root (raíz) e raíz é injetada no index.html.

    ~Arquivo src out~
    - Tudo que está fora da pasta src é relacionado a configuração e o que estiver dentro da src é relacionado ao código.
    - package.json é o coração do node
    - tsconfig é as configurações do typescript
    - angular.json é o arquivo de configurações gerais do angular.

    ~Arquivo src in~
    - index.html é o arquivo principal e vai apontar somente para 1 componente, que é o componente root.
    - arquivo main.ts é o arquivo principal e irá iniciar os modulos do angular, ajuda a inicializar o projeto.
    - polyfills.ts arquivo para aumentar compatibilidade com navegadores mais antigos.
    - styles.css é a estilização do projeto.
    - pasta chamada app com vários arquivos, onde os arquivos são definidos por "nome do componente"."palavra chave"."tipo de arquivo"
    - app.component.ts é a "fábrica" do componente.

    
*/