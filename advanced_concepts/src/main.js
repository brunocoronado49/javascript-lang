import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { environmentComponent } from './concepts/01-environments'
import { demoComponent } from './concepts/demo'
import { callbackComponent } from './concepts/02-callbacks'
import { promisesComponent } from './concepts/03-promises'
import { promiseRaceComponent } from './concepts/04-promise-race'
import { asyncComponent } from './concepts/05-async'
import { asyncAwaitComponent } from './concepts/06-async-await'
import { asyncAwait2Component } from './concepts/07-async-await'
import { forAwaitIfAwaitComponent } from './concepts/08-for-await-if-await'
import { funcionesGeneradorasComponent } from './concepts/09-funciones-generadoras'
import { funcionGeneradoraAsyncComponent } from './concepts/10-funcionGeneradoraAsync'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">

    </div>

  </div>
`
const element = document.querySelector('.card');
// environmentComponent(element);
// demoComponent(element);
// callbackComponent(element);
// promisesComponent(element);
// promiseRaceComponent(element);
// asyncComponent(element);
// asyncAwaitComponent(element);
// asyncAwait2Component(element);
// forAwaitIfAwaitComponent(element);
// funcionesGeneradorasComponent(element);
funcionGeneradoraAsyncComponent(element);
