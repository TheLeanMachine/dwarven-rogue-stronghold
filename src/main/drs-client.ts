import { createApp } from 'vue';

//import { App } from 'vue';

import { Dwarf } from './domain/entity/Dwarf.js'

let gimli = new Dwarf('Gimli Gloinson', 42);

console.log("Fuck yalll!");

//const app = createApp(App)
const app = createApp({});

app.mount();