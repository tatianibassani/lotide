const assertEqual = require('../assertEqual');
const tail   = require('../tail');

assertEqual(tail([5,6,7]).toString(), [6,7].toString());
assertEqual(tail([1,2,5,8,0,8]).toString(), [2,5,8,0,4].toString());

