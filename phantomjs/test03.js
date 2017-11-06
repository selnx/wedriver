/**
 * Created by li on 2017/10/9.
 */
var phantomjs = require('phantomjs-prebuilt')
var cheerio = require('cheerio')
var webdriverio = require('webdriverio')
var wdOpts = { desiredCapabilities: { browserName: 'phantomjs' } }

// phantomjs.run('--webdriver=4444').then(program => {
//     webdriverio.remote(wdOpts).init()
//         .url('https://liulanmi.com/')
//         .getTitle().then(title => {
//         console.log(title) // 'Mozilla Developer Network'
//         program.kill() // quits PhantomJS
//     })
// })
// phantomjs.run('--webdriver=4444').then(program => {
//     webdriverio.remote(wdOpts).init()
//         .url('https://liulanmi.com/')
//         .getText('.copyright').then(text=>{
//             console.log('result:' +text);
//             program.kill() // quits PhantomJS
//         })
// });
phantomjs.run('--webdriver=4444').then(program => {
    var browerDrive = webdriverio.remote(wdOpts).init();
    // var brower = browerDrive.url('https://liulanmi.com/');
    var brower = browerDrive.url('http://bbs.ngacn.cc/thread.php?fid=-7');
    brower.pause('8000')
        .getHTML('html').then(html=>{
                var $ = cheerio.load(html);
                var list =$('.topicrow .topic');
                for(var i=0;i<list.length;i++){
                    var title=$(list[i]).text();
                    var href=$(list[i]).attr('href');
                    console.log('title:' +title);
                    console.log('href:' +href);
                }
        brower.saveScreenshot('./snapshot.png');
        program.kill()
        // brower.click('.mmdefault').getHTML('html').then(html=>{
        //     console.log('html:' +html);
        //     program.kill() // quits PhantomJS
        // });
        // console.log('result:' +text);

    })
    // brower.getHTML('html').then(html=>{
    //         var $ = cheerio.load(html)
    //         var list =$('.excerpt h2 a');
    //         for(var i=0;i<list.length;i++){
    //             var title=$(list[i]).text();
    //             console.log('title:' +title);
    //         }
    //         console.log('result:' +list.length);
    //         program.kill() // quits PhantomJS
    // })
    // brower.pause('5000')
    //     .getHTML('html').then(html=>{
    //     console.log('html:' +html);
    //     var $ = cheerio.load(html)
    //     var list =$('.sub_forums .b .a');
    //     console.log('result:' +list.length);
    //     program.kill() // quits PhantomJS
    // })
});