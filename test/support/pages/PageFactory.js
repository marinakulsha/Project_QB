let Items = require('./Items');
let Login = require('./Login');
let PageFactory = function () {

    let _this = this;
    _this.currentPage = null;

    _this.getPage = function (page) {
        page = page.toLowerCase()

        let pages = {
            'items': Items,
            'login': Login           
        };
        if (!pages[page]) {
            throw new Error('Wrong page name: ' + page);
        }
        _this.currentPage = new pages[page]();
        return _this.currentPage;
    };
};

let mySingleton = {
    getInstance: function () {
        if ( !mySingleton.instance )
            mySingleton.instance = new PageFactory();
        return mySingleton.instance
    }
};
module.exports = mySingleton.getInstance();

