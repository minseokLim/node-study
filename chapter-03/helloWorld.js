/* eslint-disable no-console */
function helloNode() {
    console.log('Hello Node~!');
}

function helloWorld() {
    console.log('Hello World~!');
    helloNode();
}

helloWorld();
