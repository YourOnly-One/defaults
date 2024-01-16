/* See:
      https://github.com/jdecked/twemoji
      https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/
      https://cdn.jsdelivr.net/npm/@twemoji/api@latest/dist/twemoji.min.js
*/

/* Source: https://stackoverflow.com/a/40310653/306674 */

function onReady(insertTwemoji) {
  var readyStateCheckInterval = setInterval(function() {
    if (document && document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval);
      insertTwemoji();
    }
  }, 10);
}
onReady(function() {
  twemoji.parse(document.body, {
    base: 'https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/',
    ext: '.png',
    folder: '72x72',
    callback: function(icon, options) {
      return ''.concat(
        options.base,
        options.size,
        '/',
        icon,
        options.ext
      );
    }
  });
});
