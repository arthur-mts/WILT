# NodeJS

## Ciclo de vide de uma aplicação NodeJS

![NodeJS%20e4d4860c7c9e457d97e8944cd7fc9464/Untitled.png](NodeJS%20e4d4860c7c9e457d97e8944cd7fc9464/Untitled.png)

O NodeJS é um **ambiente de execução JavaScript server-side, single-thread e não bloqueante**. Sim, mas o que isso quer dizer? Em outras linguagens de programação (Java, PHP, Ruby, etc) sempre que uma requisição chega no servidor uma nova thread é criada e delegada para resolver essa requisição. Já o NodeJS não realiza imediatamente uma requisição. Ele possui uma **pilha** de eventos (organizada pelo event loop) que irá se comunicar com as threads do sistema.

O que torna o NodeJS diferente das linguagens tradicionais multi-thread é o seu sistema de callbacks. Quando chega a vez de uma função ser executada no Event Loop, essa função é delegada a uma thread do sistema responsável. Porém o Event Loop não espera a resposta dessa thread para prosseguir a execução.

![https://images.unsplash.com/photo-1585917176080-1841987bf1fe?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb](https://images.unsplash.com/photo-1585917176080-1841987bf1fe?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb)

*"Mas como ele vai recuperar o resultado da função que foi para a thread do sistema?"*

Você decide! Basicamente, um callback é registrado quando a função é delegada para a thread do sistema. Esse callback será executado quando a função der uma resposta, permitindo assim que o Event Loop continue executando as funções da pilha sem precisar esperar a resposta do sistema. Quando essa resposta chega ao Evento Loop ela é retornada ao ciclo da execução e esse mini "ciclo" assíncrono é fechado.

**TODAS** as operações assíncronas do NodeJS funcionam nessa dinâmica. Então, usando callbacks você não tem 100% de controle do que será executado primeiro caso duas chamadas assíncronas sejam chamadas pelo Event Loop uma atrás da outra. Por exemplo:

```jsx
function func(value, delay){
	return new Promise((resolve)=> setTimeout(resolve, delay, value));
}

func('hello', 1000).then(res => console.log(res));

func('world', 500).then(res => console.log(res));

// Saída : world
//         hello 
```

Como o Event Loop delegou as duas chamadas da função **func** a outras threads e continuou o ciclo de execução de forma paralela, o callback da segunda chamada é executado antes que a primeira pois o seu timeout é menor.