/**
 * Created by li on 2017/9/30.
 */
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

console.log(path);
// var service = new chrome.ServiceBuilder(path).build();
// chrome.setDefaultService(service);
//
// var driver = new webdriver.Builder()
//     .withCapabilities(webdriver.Capabilities.chrome())
//     .build();