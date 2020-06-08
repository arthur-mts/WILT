const process = require('process');

process.on("exit", function(){ console.log('Bye');})

function func(value, delay){
        return new Promise((resolve)=> setTimeout(resolve, delay, value));
}

async function run(){
        console.time('Async');
        const res1 = await func('hello async', 1000);
        console.log(res1);
        const res2 = await func('world async', 500);
        console.log(res2);
        console.timeEnd('Async');
}

run();

console.time('Callback');

func('hello cb', 1500).then(res => console.log(res));

func('world cb', 500).then(res => console.log(res));

console.timeEnd('Callback');


