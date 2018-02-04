const BaseModel = require('../baseModel.js');

let base = new BaseModel({ 'id': '50234ca7-d811-46be-a7b6-78afd808f2ab', 'createdAt': '2018-02-03T21:12:42.672' });

base.save();
module.exports.base = base;