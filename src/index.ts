import * as maps from './mapMe';


var objA = { prop1: 'From A', prop2: 'From A too', prop3: 'Also from A (really)' };

var objB = maps.fromAtoB(objA);

console.log(' --- objA: ---');
console.log(objA);
console.log(' ------------- \n');

console.log(' --- objB: ---');
console.log(objB);
console.log(' ------------- \n');

console.log("Done!");