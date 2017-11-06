/**
 * Created by li on 2017/10/9.
 */
var phantom = require('phantom');
var _ph, _page, _outObj;

phantom
    .create()
    .then(ph => {
    _ph = ph;
return _ph.createPage();
})
.then(page => {
    _page = page;
    var url='http://bbs.ngacn.cc/thread.php?fid=-7';
    // var url='https://liulanmi.com/';
return _page.open(url);
})
.then(status => {
    console.log(status);
return _page.property('content');
})
.then(content => {
    console.log(content);
_page.close();
_ph.exit();
})
.catch(e => console.log(e));