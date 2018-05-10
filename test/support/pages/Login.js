let inheritance = require('./../inheritance');
let Page = require('./page');
let Login = function (){};
inheritance.inherits(Page,Login);

Login.prototype.url = 'https://qb-stage.aisnovations.com/login/';

Login.prototype.data = {
    'username': {
        selector: element.all(by.xpath('//*[@id="mat-input-0"]')),
        index: 0
    },
    'password': {
        selector: element.all(by.xpath('//*[@id="mat-input-1"]')),
        index: 0
    },
    'login_btn': {
        selector: element.all(by.xpath('/html/body/qb-login-app-root/div/qb-login-page/div/div[1]/form/div[3]/button')),
        index: 0
    },
    'setup_btn': {
        selector: element.all(by.xpath('//*[@id="layout"]/qb-sidenav/div/perfect-scrollbar/div/div[1]/div/nav/qb-sidebar-menu/div/div[2]/div[12]/qb-sidebar-menu-item/div/a')),
        index: 0
    },
    'title_product_activity': {
        selector: element.all(by.xpath('//*[@id="dashboard"]/div[1]/qb-product-activity/mat-card/div[1]/span')),
        index: 0
    },
};

module.exports = Login;