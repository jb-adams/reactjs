import person from './person.js'; // default import
import {add} from './utility.js'; // named import
import {multiply} from './utility.js'; // named import
import {add as addAlias} from './utility.js'; // named import alias
import * as bundled from './utility.js'; // import all from a module

console.log(person);
console.log(add(5, 7));
console.log(multiply(6, 5))
console.log(addAlias(20, 10));
console.log(bundled.add(100, 200));
console.log(bundled.multiply(100, 200));

