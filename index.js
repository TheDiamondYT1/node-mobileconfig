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
	var payload = options.payload;
	
	var data = {
		payload: {
			consentText: payload.consentText || false,
			displayName: payload.displayName || 'Web clip',
			description: payload.description || false,
			organization: payload.organization || false,
			notRemovable: payload.notRemovable || false,
			identifier: payload.identifier || 'com.test'
		},
		
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

	
