/*!
 * math-random-id v1.0.1
 * (c) 2018-present Nikita Nafranets <eddimensi@gmail.com>
 * Released under the MIT License.
 */
var index = (function () {
  return Math.random().toString(32).slice(2);
});

export default index;
