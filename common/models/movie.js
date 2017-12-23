'use strict';

module.exports = Movie => {
  Movie.validatesUniquenessOf('name', {message: 'Esa película ya fue dada de alta.'});
};
