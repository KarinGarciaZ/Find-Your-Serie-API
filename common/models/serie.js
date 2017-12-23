'use strict';

module.exports = Serie => {
  Serie.validatesUniquenessOf('name', {message: 'Esa serie ya fue dada de alta.'});
};
