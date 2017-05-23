// const parser = require('react-docgen-typescript');
const parser = require('../react-docgen-typescript/lib/index.js');
const path = require('path');

const pathToFile = path.resolve('./test-component.tsx');

const res = parser.parse(pathToFile);

console.log('1111111111111', res);
