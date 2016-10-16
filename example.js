var fs = require('fs');
var mobileconfig = require('./index');

mobileconfig.generate('webclip', {
	payload: {
		consentText: 'You will get hacked. Just kidding',
		description: 'Some description',
		organization: 'My Company',
		identifier: 'com.my.company'
	},
	
	label: 'My Website',
	url: 'http://example.com',
}, function (err, data) {
	if(err) console.log(err);
	fs.writeFileSync(__dirname + '/webclip.mobileconfig', data); 
});