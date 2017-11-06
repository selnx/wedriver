/**
 * Created by li on 2017/10/9.
 */
const phantom = require('phantom');

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    await page.on('onResourceRequested', function(requestData) {
        console.info('Requesting', requestData.url);
    });

    const status = await page.open('https://liulanmi.com/');
    const content = await page.property('content');
    console.log(content);

    await instance.exit();
})();
