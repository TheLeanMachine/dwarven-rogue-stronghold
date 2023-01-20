import { Dwarf } from './domain/entity/Dwarf'

let gimli = new Dwarf('Gimli Gloinson', 42);

document.body.textContent = gimli.name();