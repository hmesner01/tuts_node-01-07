const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var mongo_uri = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(mongo_uri, (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  var db = client.db('TodoApp');
  var collection = db.collection('Todos');

  cursor = collection.findOneAndUpdate({text: 'Eat Dinner'}, {$setOnInsert:{text: 'Eat Dinner', completed: false}}, {returnOriginal: false, upsert: true}).then((doc) => {
    console.log('Todos');
    console.log(JSON.stringify(doc, undefined,2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  cursor = collection.find({text: 'Eat Lunch'}).toArray().then((doc) => {
    console.log('Todos');
    console.log(JSON.stringify(doc, undefined,2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  cursor = collection.findOneAndUpdate({text: 'Eat Lunch'}, {$set:{completed: true}}).then((doc) => {
    console.log('Todos');
    console.log(JSON.stringify(doc, undefined,2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  cursor = db.collection('Users').findOneAndUpdate({name: 'Howard'}, {$set:{name: 'Jen'}, $inc:{age: 2}}, {returnOriginal: false}).then((doc) => {
    console.log('Users');
    console.log(JSON.stringify(doc, undefined,2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  //var collection = db.collection('Users');  // See cursor = line in above op
  cursor = db.collection('Users').findOneAndUpdate({name: 'Jen'}, {$set:{name: 'Howard'}, $inc:{age: 2}}, {returnOriginal: false}).then((doc) => {
    console.log('Users');
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
