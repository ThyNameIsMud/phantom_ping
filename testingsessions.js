const phantom = require('phantom');
const microtime = require('microtime');
const sleep = require('sleep');

for (var i = 10; i >= 0; i--) {
	(async function() {
	    const instance = await phantom.create();
	    const page = await instance.createPage();

	    var uAgent = 'Checking Stuff lol '+ microtime.now();
	    page.setting("userAgent", uAgent);
		const status = await page.open(process.argv[2]);
	    const content = await page.property('content');
	    console.log(status);	
	    console.log(uAgent);	

	    await instance.exit();
	}());

	sleep.msleep(500);
}

// 1488820562618004