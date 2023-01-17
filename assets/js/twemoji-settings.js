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
    base: 'https://cdn.jsdelivr.net/gh/jdecked/twemoji/assets/',
    ext: '.png',
    folder: 'png',
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
