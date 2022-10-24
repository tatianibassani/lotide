const assertEqual = require('../assertEqual');
const tail = require('../tail')


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(result.toString(), ["Lighthouse", "Labs"].toString());