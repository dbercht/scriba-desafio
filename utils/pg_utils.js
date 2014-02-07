var pg = require('pg');
var conString = process.env.PG_CON_STRING || "postgres://scriba:scriba@localhost:5432/scriba";

exports.query = function(res, query, callback) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    client.query (query, function(err, result) {
        done();
        if (err) {
          res.send(500);
          return console.error('error running query', err);
        } else {
          callback(result);
        }
    });
  });
};

exports.rollback = function(client, done) {
  client.query("ROLLBACK", function(err) {
    return done(err);
  });
};
