let inheritance = {
    inherits: function(Parent,Child){
        let F = function(){};
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
    }
};

module.exports = inheritance