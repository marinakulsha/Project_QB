let Home = require('./Home'),
    FAQ = require('./FAQ'),
    About = require('./About'),
    Careers = require('./Careers'),
    TermsConditions = require('./TermsConditions'),
    Page404 = require ('./Page404');

let PageFactory = function () {

    let _this = this;
    _this.currentPage = null;

    _this.getPage = function (page) {
        page = page.toLowerCase()

        let pages = {
            'home': Home,
            'faq': FAQ,
            'about': About,
            'careers': Careers,
            'terms': TermsConditions,
            '404': Page404
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

