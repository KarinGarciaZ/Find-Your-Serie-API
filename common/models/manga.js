'use strict';

module.exports = Manga => {
  Manga.validatesUniquenessOf('name', {message: 'Ese manga ya fue dado de alta.'});
};
