const mongoose = require('mongoose');
// const db = 'mongodb://localhost:27017/placesapp';
//const db = 'mongodb://paulc:abc123@ds117701.mlab.com:17701/placesapp';
const db = 'mongodb://places123:places123@ds121321.mlab.com:21321/placesapp97';
//mongoose.Promise = global.Promise;

mongoose
  .connect(db)
  .then(() => {
    console.log('mongoose connected to mongodb');
  })
  .catch(error => {
    console.log('mongoose connection error: ', error);
  });

const placeSchema = new mongoose.Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  photo_reference: {
    type: String
  }
});

// if no specify collectioname, it will create places collection
// ie lowercase Place and pluralize it
const Place = mongoose.model('Place', placeSchema, 'placeappcollection');

module.exports = Place;
