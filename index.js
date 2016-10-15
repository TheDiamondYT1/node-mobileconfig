var fs = require('fs');
var Handlebars = require('handlebars');

var templates = {
    webclip: Handlebars.compile(fs.readFileSync(__dirname + '/templates/webclip.plist', 'utf-8')),
};

var generate = function (type, options, callback) {
	switch (type) {
		case 'webclip':
			createWebClip(options, callback);
			break;
	}
}

var createWebClip = function (options, callback) {
	var data = {
		displayName: options.displayName || 'Web clip',
		description: options.description || false,
		organization: options.organization || false,
		notRemovable: options.notRemovable || false,
		identifier: options.identifier || 'com.test',
		
		label: options.label || 'My websiite',
		url: options.url || 'http://example.com',
		fullscreen: options.fullscreen || true,
	};
	
	if (callback) {
		 callback(null, templates.webclip(data));
		 return;
	}
    return templates.webclip(data);
}
	
exports.generate = generate;

	
