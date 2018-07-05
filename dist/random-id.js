/*!
 * random-id v1.0.0
 * (c) 2018-present Nikita Nafranets <eddimensi@gmail.com>
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.randomID = {})));
}(this, (function (exports) { 'use strict';

	var index = (function () {
	  return Math.random().toString(32).slice(2);
	});

	exports.default = index;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
