import * as params from '@params';

var disqus_config = function () {
  this.page.identifier = params.disqus_identifier_manual || params.disqus_identifier_auto;
  this.page.url = params.disqus_url_manual || params.disqus_url_auto;
  this.page.title = params.disqus_title_manual || params.disqus_title_auto;
};
(function() {
  var d = document, s = d.createElement('script');
  s.src = 'https://' + params.DisqusShortName + '.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();
