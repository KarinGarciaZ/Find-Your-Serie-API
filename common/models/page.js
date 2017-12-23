'use strict';

module.exports = Page => {
  Page.validatesUniquenessOf('name', {message: 'Ese manga ya fue dado de alta.'});
};
