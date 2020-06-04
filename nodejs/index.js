function func(value, delay){
        return new Promise((resolve)=> setTimeout(resolve, delay, value));
}

async function run(){
        console.time('Async');
        const res1 = await func('hello', 1000);
        console.log(res1);
        const res2 = await func('world', 500);
        console.log(res2);
        console.timeEnd('Async');
}

run();

console.time('Callback');

func('hello', 1000).then(res => console.log(res));

func('world', 500).then(res => console.log(res));

console.timeEnd('Callback');

