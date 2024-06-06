import * as params from '@params';

window.disqus_config = function () {
  this.page.identifier = params.disqus_identifier;
  this.page.url = params.disqus_url;
  this.page.title = params.disqus_title;
};
(function() {
  var d = document, s = d.createElement('script');
  s.src = 'https://' + params.disqus_shortname + '.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();
