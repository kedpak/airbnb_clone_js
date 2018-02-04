'use strict';
const uuid = require('node-uuid');
const date = require('time-stamp');

// Base model object which represents base of all objects to be implemented
class baseModel {
	constructor(id, created_at) {
		
	}

	// Creates a unique id for object
	getId() {
		console.log(uuid())
		return uuid();
	}

	// Creates time stamp of when object was created
	createdAt() {
		console.log(date('YYYY-MM-DDTHH:mm:ss.ms'));
	}
}
