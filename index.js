const p = require('react-docgen-typescript');
const path = require('path');

const pathToFile = path.resolve('./test-component.tsx');

const res = p.parse(pathToFile);

console.log('1111111111111', res);
