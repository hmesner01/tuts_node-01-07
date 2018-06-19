const MongoClient = require('mongodb').MongoClient;

var mongo_uri = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(mongo_uri, (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  var db = client.db('TodoApp');
  const collection = db.collection('Users');
  cursor = collection.find({name:'Howard'}).toArray().then((doc) => {
    console.log('Todos');
    console.log(JSON.stringify(doc, undefined,2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });
  // cursor = collection.find({}).count().then((count) => {
  //   console.log(`Todos count ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });


  //client.close();
});
