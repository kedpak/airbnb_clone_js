const Storage = require('./fileStorage.js');

let storage = new Storage();

storage.reload();
module.exports.storage = storage;

