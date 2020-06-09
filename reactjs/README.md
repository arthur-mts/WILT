# ReactJS

Somente apenas algumas anotações e coisinhas úteis de ReactJS

### React Router Dom  
- O atributo path do componente Route (responsavel pelo roteamento das páginas)  
pode ignorar / adicionais no endereço da rota adicionando um + no fim do endereço.  

	```tsx
	import React from 'react';
	import { Route, Switch } from 'react-router-dom';

	import Repository from '../pages/repository';

	const Routes: React.FC = () => (
	  <Switch>
		<Route path="/repositories/:repository+" component={Repository} />
	  </Switch>
	);
	```
	 Nesse caso, o parâmetro *repository* poderia conter uma ou mais / e assim o Router iria redirecionar
	a aplicação de forma indesejada. Para contornar esse comportamenteo o + ignora as / presentes no parâmetro.


### React Hooks
#### Use State  
- É possivel passar uma função como parametro do **useState**, e o estado inicial será o retorno da mesma.  

	```typescript
	const [repositories, setRepositories] = useState<Repository[]>(() => {
	const storage = localStorage.getItem('@GithubExplorer:repositories');
	if (storage) {
	  return JSON.parse(storage);
	}
	return [];
  });
	```
