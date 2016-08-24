
/*=====================================================
 *
 *	_JL : A Really Small JavaScript framework
 *	(c) Milind Patel 2016
 *
 ======================================================*/

/*	$ Object Constructor
 ========================*/

(function (window, undefined) {
    var
            core_version = "0.0.1",
            rootjQuery
            , mQuery = function (selector, context) {
                // The jQuery object is actually just the init constructor 'enhanced'
                return new mQuery.fn.init(selector, context, rootjQuery);
            };

    mQuery.fn = mQuery.prototype = {
        jquery: core_version,
        constructor: mQuery,
        init: function (selector, context, rootjQuery) {
            // HANDLE: $(""), $(null), $(undefined), $(false)
            if (!selector) {
                return this;
            }
        }
    };
})(window); 