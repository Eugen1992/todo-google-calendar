const getMongoConnection = require('../utils/mongo-connection.js');

const create = (data) => {
  return getMongoConnection().then((mongo) => {
    return mongo.collection('todos').insertOne(Object.assign( data, { status: 0 }))
      .then((result) => {
        return result.ops[0];
      });
  });
};

const remove = (id) => {
  return getMongoConnection().then((mongo) => {
    return mongo.collection('todos').remove({ id });
  });
};

module.exports = {
  create,
  remove,
};