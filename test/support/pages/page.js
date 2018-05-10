let Page = function () {};
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
            }, 40000)
        })
        .then(function () {
            return browser.wait(EC.visibilityOf(elem), 40000);
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
            browser.driver.sleep(3500)
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
            browser.driver.sleep(100)
            return input.sendKeys(text)
        });
};

Page.prototype.pressButton = function (name) {
   
    return this.waitReady(name)
        .then((elem) => {
      
           browser.driver.sleep(5000)
            return elem.sendKeys(protractor.Key[name])
        })
        .then(() => {
            return browser.driver.sleep(400)
       });
};

Page.prototype.goToFrame = function (name) {
    return this.waitReady(name)
        .then((elem) => {
           return driver.switchTo().frame(elem);
            
        })
};


Page.prototype.scrolltoElement = function (name) {
    return this.waitReady(name)
        .then((elem) => {
            return browser.driver.executeScript("arguments[0].scrollIntoView();", elem.getWebElement());
           
        });
};

Page.prototype.selectDropdownElement = function(oneoption, alloptions) {
    let select = this.data[alloptions].selector;
    let option = this.data[oneoption].selector;
    let optionname = this.data[oneoption].elName;
        return select.all(option).filter(function (opt) {
            return opt.getText()
                .then(function (text) {
                    return text === optionname;
                });
        }).first().click()
};

Page.prototype.elementVisibility = function (name) {
    let elText = this.data[name].elText;
    return this.waitReady(name)
        .then(function (elem) {
            browser.driver.sleep(800) 
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
