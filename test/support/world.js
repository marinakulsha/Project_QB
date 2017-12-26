let {defineSupportCode} = require('cucumber');

//let Helper = require('./test/support/helper');
function CustomWorld({attach, parameters}) {
    this.attach = attach;
    this.parameters = parameters;
    // this.helper = helper;
}

defineSupportCode(function ({setWorldConstructor}) {
    setWorldConstructor(CustomWorld);
});