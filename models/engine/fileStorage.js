'use strict';
const fs = require('fs');

module.exports = class FileStorage {

	constructor() {
		this._filePath = './file.json';
		this.objects = {};
	};

	all() {
		return this._objects;
	};

	new(obj) {
		this.objects[obj.constructor.name + '.' + obj.id] = obj;
	};

	save() {
		const content = JSON.stringify(this.objects);
		fs.writeFile('./file.json', content, 'utf8', function (err) {
			if (err) {
				return console.log(err);
			}
		});
	};

	reload() {
		fs.readFileSync('./file.json', 'utf-8');
	}
}

