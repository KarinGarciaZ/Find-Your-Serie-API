var server = require('./server');
var ds = server.dataSources.posgresql_ds;
var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role',
               'Page', 'Anime', 'Serie', 'Movie', 'Manga', 'Anime_Page',
               'Serie_Page', 'Movie_Page', 'Manga_Page'];
              
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' + lbTables + '] created in ', ds.adapter.name);
  ds.disconnect();
});