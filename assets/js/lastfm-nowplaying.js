/**
  Developed by Prashant Shrestha
  + https://prashant.me
*/
/***
  * Modified by ᜌᜓᜃᜒ (Yuki・雪亮) 🇵🇭
  *   - https://YourOnly.One
  *
  * 2021-02-01: Updated "error" information
  * 2021-01-31:
  *   - Added link to Artist name
  *   - Added Album info with link
  * 2021-01-30: Switched to Emoji instead of icon files
***/
var lastfmData = {
  baseURL:
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=",
  /* Your Last.fm Username */
  user: "Laibcoms",
  /* Your API key -- USE YOUR OWN API KEY thank you */
  api_key: "75a470d0baee986461911686b98156e4",
  additional: "&format=json&limit=1"
};


/** SAMPLE
  *
    {
      "recenttracks": {
        "track": [
          { "artist": {
            "mbid":"",
            "#text":"Sejeong"
            },
            "@attr": {
              "nowplaying":"true"
            },
            "mbid":"",
            "album": {
              "mbid":"",
              "#text":""
            },
            "streamable":"0",
            "url":"https:\/\/www.last.fm\/music\/Sejeong\/_\/SKYLINE",
            "name":"SKYLINE",
            "image": [
              { "size":"small",
                "#text":""
              },
              { "size":"medium",
                "#text":""
              },
              { "size":"large",
                "#text":""
              },
              { "size":"extralarge",
                "#text":""
              }
            ]
          },
          { "artist": {
            "mbid":"b9545342-1e6d-4dae-84ac-013374ad8d7c",
            "#text":"IU"
            },
            "album": {
              "mbid":"",
              "#text":"Crash Landing On You OST Part 11"
            },
            "image": [
              { "size":"small",
                "#text":"https:\/\/lastfm.freetls.fastly.net\/i\/u\/34s\/827af4f986efc3849aeefa7dec377cd9.jpg"
              },
              { "size":"medium",
                "#text":"https:\/\/lastfm.freetls.fastly.net\/i\/u\/64s\/827af4f986efc3849aeefa7dec377cd9.jpg"
              },
              { "size":"large",
                "#text":"https:\/\/lastfm.freetls.fastly.net\/i\/u\/174s\/827af4f986efc3849aeefa7dec377cd9.jpg"
              },
              { "size":"extralarge",
                "#text":"https:\/\/lastfm.freetls.fastly.net\/i\/u\/300x300\/827af4f986efc3849aeefa7dec377cd9.jpg"
              }
            ],
            "streamable":"0",
            "date": {
              "uts":"1615032456",
              "#text":"06 Mar 2021, 12:07"
            },
            "url":"https:\/\/www.last.fm\/music\/IU\/_\/Give+You+My+Heart",
            "name":"Give You My Heart",
            "mbid":"64300888-9757-4477-8753-a0123cc6f42b"
          }
        ]
      }
    }

  *
**/

var getSetLastFM = function() {
  $.ajax({
    type: "GET",
    url:
      lastfmData.baseURL +
      lastfmData.user +
      "&api_key=" +
      lastfmData.api_key +
      lastfmData.additional,
    dataType: "json",
    success: function(resp) {
      var recentTrack = resp.recenttracks.track[0];
      var albumLastFMpath = (encodeURIComponent(recentTrack.album["#text"])).replace(/%20/g, '+');
      var artistLastFMpath = (encodeURIComponent(recentTrack.artist["#text"])).replace(/%20/g, '+');

      $("img#trackart").attr("src", recentTrack.image[2]["#text"]);

      $("a#tracktitle")
        .html(recentTrack.name)
        .attr("href", recentTrack.url)
        .attr("title", recentTrack.name + " by " + recentTrack.artist["#text"])
        .attr("rel", "noopener external nofollow")
        .attr("referrerpolicy", "strict-origin-when-cross-origin");

      $("a#trackalbum")
        .html(recentTrack.album["#text"])
        .attr("href", "https://www.last.fm/music/" + artistLastFMpath + "/" + albumLastFMpath)
        .attr("title", "Album: " + recentTrack.album["#text"])
        .attr("rel", "noopener external nofollow")
        .attr("referrerpolicy", "strict-origin-when-cross-origin");

      $("a#trackartist")
        .html(recentTrack.artist["#text"])
        .attr("href", "https://www.last.fm/music/" + artistLastFMpath)
        .attr("title", "Artist: " + recentTrack.artist["#text"])
        .attr("rel", "noopener external nofollow")
        .attr("referrerpolicy", "strict-origin-when-cross-origin");
    },
    error: function(resp) {
      $("img#trackart").attr("src", "img/Yuki_flag-square-300x.webp");

      $("a#tracktitle")
        .html("Now Playing Widget")
        .attr("title", "Now Playing Widget");

      $("#trackalbum")
        .html("by Prashant Shrestha")
        .attr("href", "https://prashant.me")
        .attr("title", "by Prashant Shrestha");

      var artistFormatted = "Prashant Shrestha";
      $("a#trackartist")
        .html("Mod by ᜌᜓᜃᜒ (Yuki・雪亮)")
        .attr("href", "https://YourOnly.One")
        .attr("title", "Mod by ᜌᜓᜃᜒ (Yuki・雪亮)");
    }
  });
};

/* Get the new one. */
getSetLastFM();
/* Start the countdown. */
setInterval(getSetLastFM, 10 * 1000);
