const fs = require('fs');

console.log('시작');

function read(times) {
    fs.readFile('./readme.txt', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(times, data.toString());
    });
}

read('1번');
read('2번');
read('3번');

console.log('끝');
