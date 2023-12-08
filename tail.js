const assertEqual = require('../assertEqual');

const tail = function(values) {
    
  if (values.length > 1) {
    return values.slice(1);
  } else {
    return [];
  }
};

module.exports = tail;
