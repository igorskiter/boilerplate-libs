# Base of Boilerplate
1. como será o fluxo completo de implementação e uso dessas libs/pkgs?
   1. [criar boilerplate para criação de libs](https://medium.com/weekly-webtips/how-to-build-a-react-library-with-typescript-d0f08a1f517e)
      1. module bundler? ([Comparing bundlers: Webpack, Rollup & Parcel](https://medium.com/js-imaginea/comparing-bundlers-webpack-rollup-parcel-f8f5dc609cfd#:~:text=There%20is%20a%20slight%20difference,resolve%20or%20path.))([Why I use Rollup, and not Webpack](https://medium.com/@PepsRyuu/why-i-use-rollup-and-not-webpack-e3ab163f4fd3))
         1. [Rollupjs](https://rollupjs.org/guide/en/)
         2. [Webpack](https://webpack.js.org/concepts/)
         3. [Parcel](https://parceljs.org/docs/)
         4. [SWC](https://swc.rs/)
      2. Compiler
         1. [SWC](https://swc.rs/)
         2. [TSC](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
         3. [Babel](https://babeljs.io/docs/en/)
      3. managing and publishing multiple repository([NPM numbers](https://npmtrends.com/bit-vs-bolt-vs-lerna-vs-mondorepo-vs-oao))
         1. [Lerna](https://lerna.js.org/)
         2. [Bit](https://bit.dev/docs/quick-start/)
         3. [Bolt](https://github.com/boltpkg/bolt)
         4. [Mondorepo](https://github.com/sencha/mondorepo)
         5. [oao](https://github.com/guigrpa/oao)
      4. colocar o packge como private
      5. Define workspaces
      6. configurar managing and publishing multiple repository
      8. Configurar module bundler
      7. Configurar typescript
         1. declarar paths. ([AWS example](https://github.com/aws/aws-sdk-js-v3/blob/main/tsconfig.json))
      9. Criar cada packages
         1. Declarar definição do modulo no package
         2. Install peerDependencies
         3. test
         4. implementação
         5. doc
         6. configurar build do bundler
2. [tem um desenho?](https://tree.nathanfriend.io/?s=(%27optiGs!(%27fancy!true~fullPath!false~trailingSlash!true~rootDot!false)~H(%27H%27si-kit45s0bLhook8hookIJ8JIutil8utilI2n0ui0363Styled63BL3Test62n0docs97n95KG9F%27)~versiG!%271%27)*%20%2004*25KG6F673*CompGent4%5Cn*5package60*7tscGfigKo8s6*%5B94-%20FREADME.mdGonHsource!I%5D6JcGtextK.jsLase6%01LKJIHGF987654320*)
```
si-kit/
├── packages/
│   ├── base/
│   │   ├── hooks/
│   │   │   └── [hook]
│   │   ├── contexts/
│   │   │   └── [context]
│   │   ├── utils/
│   │   │   └── [util]
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   ├── ui/
│   │   ├── Component/
│   │   │   ├── ComponentStyled
│   │   │   ├── ComponentBase
│   │   │   └── ComponentTest
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   └── docs
├── tsconfig.json
├── package.json
└── README.md
```
3. onde faremos o deploy das libs/pkgs?
   1. [Github](https://github.com/features/packages)
   2. [Npm](https://www.npmjs.com/)
4. como consumiremos as libs/pkgs?
   1. depende de onde fizer o deploy do /libs/pkgs
      1. se for npm é o padrão atual de qualquer pacote
      2. [se for pelo github](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
        ```
          in the same directory as your package.json 
          file, create or edit an .npmrc file to 
          include a line specifying GitHub Packages 
          URL and the account owner. Replace OWNER 
          with the name of the user or organization 
          account that owns the repository containing 
          your project.
          @OWNER:registry=https://npm.pkg.github.com
        ```
5. qual é a hierarquia de dependências?
   1. dentro de cada modulo deve ser instalado como [peerDependencies](https://flaviocopes.com/npm-peer-dependencies/) os pacotes compartilhado na raiz
   2. para demais depenências segue o mesmo fluxo
6. o versionamento será individual ou podemos manter a mesma versão para todos o repo (como a AWS fez com o aws-sdk-js-v3)?
   1. podemos usar um mono repo e usar uma ferramenta de `managing and publishing multiple repository`
7. como vamos testar? as estratégias são diferentes para cada contexto?
   1. podemos ter teste em contexto global, contexto local de cada modulo e package. Basta definir estrategias e scripts. (Vi abordagens diferentes na AWS e Material UI, por exemplo)