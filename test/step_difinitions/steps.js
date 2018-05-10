let {defineSupportCode} = require('cucumber');
let PageFactory = require('./../support/pages/PageFactory');

defineSupportCode(function ({Given, When, Then}) {

    When(/^I go to '(.+)' page$/, function (pageName) {
      return PageFactory.getPage(pageName).goToPage()

    });

    When(/^I get'(.+)' page to go '(.+)'$/, function (pageName,name) {
       
        return PageFactory.getPage(pageName).goToPage().clickButton(name)
    });

    When(/^I click '(.+)' element$/, function (name) {
        return PageFactory.currentPage.clickButton(name)
    });

    When(/^I press '(.+)' button$/, function (name) {

        return PageFactory.currentPage.pressButton(name)
    });

    When(/^I select '(.+)' option from '(.+)'$/, function (oneoption, alloptions) {
        return PageFactory.currentPage.selectDropdownElement(oneoption, alloptions) 
    });

    When(/^I scroll the page to '(.+)' element$/, function (name) {
        return PageFactory.currentPage.scrolltoElement(name)
    });

   
    When(/^I input into '(.+)' field the value '(.+)'$/, function (name, title) {
        return PageFactory.currentPage.inputValue(name, title)
    });

    When (/^I go to '(.+)' frame$/, function (name) {
        return PageFactory.currentPage.goToFrame(name)
    });


    Then (/^I should get '(.+)' title$/, function (name) {
        return PageFactory.currentPage.getPageTitle(name)
            .then((result) => {
                if (result) {
                    expect(result.title).to.equal(result.expectedText);
                }
            });
    });

   
    Then(/^I should see '(.+)' element on page$/, function (name) {
        return PageFactory.currentPage.elementVisibility(name)
            .then(
                (result) => {
                    if (result) {
                        expect(result.actualText).to.equal(result.expectedText);
                    }
                });
    })

})


