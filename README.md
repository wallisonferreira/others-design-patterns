## instructions

```
npm init [Entrypoint index.js]
package.json > insert property "type": "module"
install jest: npm install --save-dev jest
criar arquivo de test *.test.js
```

adicionar ao package.json

```
{
  "scripts": {
    "test": "jest"
  }
}
```

e executar npm run test

mas para ecmascript modules (ESM) deve-se habilitar a opção para que o jest funcione

node --experimental-vm-modules node_modules/jest/bin/jest.js

ou

NODE_OPTIONS="$NODE_OPTIONS --experimental-vm-modules" npx jest

No WINDOWS

npm install --save-dev cross-env

referência cross-env => (https://github.com/kentcdodds/cross-env)
referência jest com módulos experimentais => (https://jestjs.io/docs/ecmascript-modules)

adicionar no package.json

```
"scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
}
```

e executar npm test
