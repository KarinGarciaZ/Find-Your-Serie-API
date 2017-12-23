'use strict';

module.exports = Anime => {
  Anime.validatesUniquenessOf('name', {message: 'Ese anime ya fue dado de alta.'});
};
