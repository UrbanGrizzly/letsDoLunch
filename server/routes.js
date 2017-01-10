var handler = require('./handler.js');
var passport = require('passport');

module.exports = function(app) {

  app.get('/api/loadMaps', handler.loadMaps);

  app.get('/api/yelp', handler.yelpNearbySearch);

  app.get('/api/details', handler.getDetails);

  app.get('/api/photo', handler.getPhoto);

  app.get('/db/userpreferences', handler.getUserPreferences);

  app.delete('/db/userpreferences', handler.deleteUserPreference);

  app.delete('/db/userlistings', handler.deleteUserListing);

  app.post('/db/users', handler.addUser);

  app.post('/search/preference', handler.getPreference);

  app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));

  app.get('/auth/facebook/callback', passport.authenticate('facebook'), handler.login);

  app.get('/auth/check', handler.checkAuth);

  app.get('/auth/logout', handler.logout);

}
