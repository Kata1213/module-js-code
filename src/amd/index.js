define = require('requirejs');


define( ['renderTemplate'] ,(renderTemplate) => {
   renderTemplate('I am ${firstName},${lastName}', {firstName: 'TW', lastName: 'er'});

});
