'use strict';
const uuid = require('node-uuid');
const date = require('time-stamp');
const Storage = require('./engine/storageInstance.js');

// Base model object which represents base of all objects to be implemented
module.exports = class BaseModel {
	constructor(data) {

		/* check if data is new object or old object and update accordingly */
		if (data) {
			if(data.hasOwnProperty('createdAt')) {
				this.createdAt = data.createdAt;
			}
			if(data.hasOwnProperty('updatedAt')) {
				this.updatedAt = data.updatedAt;
			}
		}
		else {
			this.id = uuid();
			this.createdAt = date('YYYY-MM-DDTHH:mm:ss.ms');
			Storage.storage.new(this);
		}
	}

	
	// Saves newly updated object;
	save() {
		this.updatedAt = date('YYYY-MM-DDTHH:mm:ss.ms');
		Storage.storage.save();
	}


	// Return object will all attributes. Add class name property. 
	getObject() {
		let newObj = Object.assign({}, this);
		newObj.class = this.constructor.name;
		console.log(newObj);
		return newObj;
	}
}