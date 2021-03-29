/* eslint-disable no-console */
console.log('require가 맨 위에 오지 않아도 됩니다');

module.exports = '저를 찾아보세요';

require('./var');

console.log('cache : ', require.cache);
console.log('main : ', require.main);
console.log(require.main.filename);
