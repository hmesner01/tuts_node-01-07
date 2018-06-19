const MongoClient = require('mongodb').MongoClient;

var mongo_uri = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(mongo_uri, (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  
/*
  var db = client.db('TodoApp');

  const collection = db.collection('Todos');

  //var Todos = db.collection('Todos');
  collection.insertOne({
    'text':'Something to do.',
    'completed': false
  }, (err, result) => {
    if(err) {
      return console.log('error in insertOne : ', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
*/

  var db = client.db('TodoApp');

  const collection = db.collection('Users');

  //var Todos = db.collection('Todos');
  collection.insertOne({
    'name':'Howard',
    'age': 60,
    'location': 'Lake Arrowhead, CA'
  }, (err, result) => {
    if(err) {
      return console.log('error in insertOne : ', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
//

  client.close();
});

