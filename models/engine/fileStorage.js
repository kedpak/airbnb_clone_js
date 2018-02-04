'use strict';
const fs = require('fs');


/* File storage is a testing functionality which emulates storing data inta DB.
used for testing out console functionality. All json data is stored inside file.json
*/
module.exports = class FileStorage {

	constructor() {
		this._filePath = './file.json';
		this.objects = {};
	};

	// Return all objects stored inside file
	all() {
		return this.objects;
	};

	// Create a new object to be placed inside this.objects
	new(obj) {
		this.objects[obj.constructor.name + '.' + obj.id] = obj;
	};


	// Save object data into file.json
	save() {
		const content = JSON.stringify(this.objects);
		fs.writeFile('./file.json', content, 'utf8', function (err) {
			if (err) {
				return console.log(err);
			}
		});
	};

	// Reads from json file and sets data inside file to objects 
	reload() {
		const data = fs.readFileSync('./file.json', 'utf-8');
		this.objects = JSON.parse(data);
	};
}

