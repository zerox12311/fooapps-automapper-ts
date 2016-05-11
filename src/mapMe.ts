/// <reference path="../node_modules/automapper-ts/dist/automapper.d.ts" />
import {automapper} from 'automapper';

export function fromAtoB(objA) {
    automapper.createMap('sourceType', 'destinationType')
        .forMember('prop1', function (opts) { opts.mapFrom('prop2'); })
        .forMember('prop2', function (opts) { opts.ignore(); })
        .forSourceMember('prop3', function (opts) { opts.ignore(); })
        .forMember('prop4', function () { return 12; })
        
    var objB = automapper.map('sourceType', 'destinationType', objA);
    
    return objB;
};