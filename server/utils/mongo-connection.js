const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo-google-calendar';
const dbName = process.env.DB_NAME || 'google-todo-calendar';
let connectionPromise, isPromisePending, dbConnection;

module.exports = function () {
  if (dbConnection) return Promise.resolve(dbConnection);
  return connect();
};

const connect = () => {
  if (isPromisePending) return connectionPromise;
  isPromisePending = true;

  connectionPromise = new Promise((resolve) => {
    MongoClient.connect(url, function(err, connection) {
      resolve(connection);
    });
  }).then((connection) => {
    isPromisePending = false;
    dbConnection = connection.db(dbName);
    return dbConnection;
  });

  return connectionPromise;
};
