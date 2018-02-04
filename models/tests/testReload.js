const storage = require('../engine/storageInstance.js');
const models = require('../baseModel.js');

all_objs = storage.storage.all();

console.log(all_objs);
