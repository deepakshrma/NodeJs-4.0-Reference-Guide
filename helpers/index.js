function _inherit(proto) {
    function F() {}
    F.prototype = proto
    return new F
}
exports.inherit = _inherit
exports.extend = function (Child, Parent) {
    Child.prototype = _inherit(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.parent = Parent.prototype;
}