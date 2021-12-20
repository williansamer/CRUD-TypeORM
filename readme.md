# CRUD com Node.js, Express, typescript, TypeORM e PostgreSQL

Desenvolvendo um sistema CRUD com novas ferramentas a serem aprendidas.
________________________________________________________________________
Pacotes a serem instalados:
- yarn add express
- yarn add typescript ts-node-dev @types/express -D

________________________________________________________________________
Iniciar o TypeScript dentro da aplicação:
- yarn tsc --init(Cria um arquivo tsconfig.json)

Dentro do tsconfig.json, mude:
-     "target": "es2021" - Versão mais recente do TypeScript
-     "strict": false - Tirar a responsabilidade de checkagem do strict e deixar esta responsabilidade para o TypeScript

________________________________________________________________________
Usar o TypeORM(baseado em anotations(@)):
Instalar:
- yarn add typeorm reflect-metadata pg
- importar no arq principal: import 'reflect-metadata'
- habilitar em tsconfig.json: 'experimentalDecorators: true' e 'emitDecoratorMetadata: true'

________________________________________________________________________
Atrelar o TypeORM ao projeto:
- Crie um script no package.json:
    "scripts": {
        "typeorm": "ts-node-dev node_modules/typeorm/cli.js"
    }
- Rode o script: yarn typeorm

________________________________________________________________________
Criando migrations:
- yarn typeorm migration:create -n nome_da_migration

________________________________________________________________________
Comando para rodar migrations:(subir a aplicação para o DB)
- yarn typeorm migration:run

________________________________________________________________________
Comando para dropar as migrations:(desfazer a última migration)
- yarn typeorm migration:revert

________________________________________________________________________
