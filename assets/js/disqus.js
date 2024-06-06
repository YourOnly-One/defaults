{{- $relcanonical := .Params.relcanonical }}
{{- $relcanonical_path := (urls.Parse $relcanonical).Path }}
{{- $disqus_identifier := or .Params.disqus_identifier (path.Base $relcanonical_path) }}
{{- $disqus_url := or .Params.disqus.url $relcanonical }}
{{- $disqus_title := (or .Params.disqus_title .Title) | htmlUnescape }}
var disqus_config = function () {
  this.page.identifier = `{{ $disqus_identifier }}`; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  this.page.url = `{{ $disqus_url | html  }}`;  // Replace PAGE_URL with your page's canonical URL variable
  this.page.title = `{{ $disqus_title | safeJSStr }}`;
};
(function() {
  var d = document, s = d.createElement(`script`);
  s.src = `https://` + `{{ .Site.Config.Services.Disqus.Shortname }}` + `.disqus.com/embed.js`;
  s.setAttribute(`data-timestamp`, +new Date());
  (d.head || d.body).appendChild(s);
})();
