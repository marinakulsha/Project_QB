let Page = function () {
};

Page.prototype._root = element(by.css('body'));

//Page.prototype.data = {};

//Page.prototype.url = '';

Page.prototype.goToPage = function () {
    return Promise.resolve()
        .then(() => {
            return browser.get(this.url)
        })
};

Page.prototype.waitReady = function (name) {
    let elArray = this.data[name].selector;
    let index = this.data[name].index;
    let EC = protractor.ExpectedConditions;
    let elem;
    return Promise.resolve()
        .then(() => {
            return browser.wait(() => {
                return elArray
                    .then((arr) => {
                        if (arr.length > 0) {
                            elem = arr[index]
                        }
                        return arr.length > 0;
                    })
            }, 5000)
        })
        .then(function () {
            return browser.wait(EC.visibilityOf(elem), 20000);
        })
        .then(() => {
            return elem.isDisplayed();
        })
        .then(() => {
            return elem
        });
};


Page.prototype.clickButton = function (name) {
    return this.waitReady(name)
        .then((elem) => {
            return elem.click();
        })
};

Page.prototype.getPageTitle = function (name) {
    return browser.getTitle()
        .then((result) => {
            return {
                title: result,
                expectedText: this.data[name].elText,
            }
        })
};

Page.prototype.inputValue = function (name, text) {
    let input;
    return this.waitReady(name)
        .then((elem) => {
            input = elem;
            return input.clear()
        })
        .then(() => {
            return input.sendKeys(text)
        });
};

Page.prototype.pressButton = function (name) {
    return this.waitReady(name)
        .then((elem) => {
            return elem.sendKeys(protractor.Key[name])
        })
};

Page.prototype.scrollIntoView = function (name, alignToTop) {
    let self = this;

    alignToTop = alignToTop !== undefined ? alignToTop : true;
   // console.log('scrol2');
    return browser.executeScript('arguments[0].scrollIntoView(arguments[1]);', self.data[name].selector, alignToTop)
        .then(function () {
            //console.log('scrol3');
             self.waitReady(name);
           // console.log('scrol4')
        });
};

Page.prototype.scrolltoElement = function (name) {
    //console.log('scroll1111');
    return this.waitReady(name)
        .then((elem) => {
           // console.log('one');
            return browser.driver.executeScript("arguments[0].scrollIntoView(false);", elem.getWebElement());

        });
};

//scrollTo(0,2600)

Page.prototype.elementVisibility = function (name) {
    let elText = this.data[name].elText;
    return this.waitReady(name)
        .then(function (elem) {
            if (elText) {
                return elem.getText();
            }
        }).then((text) => {
            if (text) {
                return {
                    actualText: text,
                    expectedText: elText
                };
            }
        })
    /* .catch((err) => {
         console.log(err);
         return browser.sleep(100)
             .then(() => {
                 return {
                     actualText: elem.getText(),
                     expectedText: elText
                 };
             })
     })*/
};
module.exports = Page;
