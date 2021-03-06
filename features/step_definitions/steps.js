var assert = require('cucumber-assert')
var Url = require('url')
var extend = require('xtend')

var config = require('../../config')

module.exports = function () {

  this.Given('I am viewing the page at "$string"', function (pathname) {
    console.log('pathname', pathname)
    browser.url(`http://localhost:5050${pathname}`) // hardcoded localhost
    // real world example below
    // browser.url(Url.format(extend(config.proxy, { pathname: pathname })))
  })

  this.When('I click on "$string"', function (text) {
    browser.click(`=${text}`)
  })

  this.Then('I am redirected to "$string"', function (pathname, callback) {
    browser.waitForExist('body')
    var url = browser.getUrl()
    assert.equal(Url.parse(url).pathname, pathname, callback)
  })

  this.Then('I can see the paragraph "$string"', function (text, callback) {
    var paragraphExists = browser.waitForExist(`p=${text}`)
    assert.equal(paragraphExists, true, callback)
  })

  this.Then('I can see the list item "$string"', function (text, callback) {
    var listItemExists = browser.waitForExist(`li=${text}`)
    assert.equal(listItemExists, true, callback)
  })

  this.Then('I am redirected to the "$string" page', function (pathname, callback) {
    browser.waitForExist('body')
    var url = browser.getUrl()
    assert.equal(Url.parse(url).pathname, pathname, callback)
  })
}



    //
    //   this.When('I enter "$string" into the "$string" input', function (value, name) {
    //     browser.setValue(`input[name=${name}]`, value)
    //   })
    //
    //   this.When('I click on the input with value "$string"', function (value) {
    //     browser.click(`input[value="${value}"]`)
    //   })
    //

    //

    //

    //
      // this.Then('I can see the image "$string"', function (imageURL, callback) {
      //   var imageExists = browser.waitForExist(`img[src="${imageURL}"]`)
      //   assert.equal(imageExists, true, callback)
      // })
    //
