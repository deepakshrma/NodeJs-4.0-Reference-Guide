var EventEmitter = require("events").EventEmitter;
function _inherit(proto) {
    function F() {}
    F.prototype = proto
    return new F
}
function _extend(Child, Parent) {
    Child.prototype = _inherit(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.parent = Parent.prototype;
}
exports.inherit = _inherit;
exports.extend = _extend;
exports.init = function () {
    Function.prototype.emitter = function () {
        var origFunc = this;
        return function () {
            var emitter = new EventEmitter();
            var args = arguments;
            process.nextTick(function () {
                origFunc.apply(emitter, args);
            });
            return emitter;
        }
    }
}

exports.curry = function () {

}
//
//Function.prototype.curry	=	function	(numArgs)	{
//    var	func	=	this;
//    numArgs	=	numArgs	||	func.length;
//    //	recursively	acquire	the	arguments
//    function	subCurry(prev)	{
//        return	function	(arg)	{
//            var	args	=	prev.concat(arg);
//            if	(args.length	<	numArgs)	{
//                //	recursive	case:	we	still	need	more	args
//                return	subCurry(args);
//            }
//            else	{
//                //	base	case:	apply	the	function
//                return	func.apply(this,	args);
//            }
//        };
//    }
//    return	subCurry([]);
//};
//function	nums2hex()	{		function	componentToHex(component)	{
//    var	hex	=	component.toString(16);
//    //	make	sure	the	return	value	is	2	digits,	i.e.	0c	or	12
//    if	(hex.length	==	1)	{
//        return	"0"	+	hex;
//    }
//    else	{
//        return	hex;
//    }
//}
//    return	Array.prototype.map.call(arguments,	componentToHex).join('');
//}
//function	rgb2hex(r,	g,	b)	{
//    //	nums2hex	is	previously	defined	in	this	chapter
//    return	'#'	+	nums2hex(r)	+	nums2hex(g)	+	nums2hex(b);
//}
//var	hexColors	=	rgb2hex.curry();
//console.log(hexColors(11))	//	returns	a	curried	function
//console.log(hexColors(11,12,123))	//	returns	a	curried	function
//console.log(hexColors(11)(12)(123))	//	returns	#0b0c7b
//console.log(hexColors(210)(12)(0))		//	returns	#d20c00
