const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = '12345678901234561234567890123456';
const iv = '1234567890123456';

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호', 'utf8', 'base64');
console.log('1:', result);
result += cipher.final('base64');
console.log('2:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
console.log('3:', result2);
result2 += decipher.final('utf8');
console.log(result2);
