/*******Usage*******
<script>
var GAID = "G-xxxxxxxx";    // Global site tag (gtag.js) - Google Analytics 4
var GAID = "UA-xxxxxxx";    // Google Universal Analytics 3 (analytics.js)
var BAID = "xxxxxxxxxx";    // Baidu Analytics ID
var ASID = "xxxxxxxxxx";    // AdSense ID
</script>
<script src="https://fastly.jsdelivr.net/gh/moetools/static/js/wa.js"></script>
*******************/

if (typeof GAID !== "undefined") {
  // GA4
  if ( GAID.indexOf("G-") !== -1)
  {
    var hm = document.createElement("script");
    hm.src = "https://www.googletagmanager.com/gtag/js?id=" + GAID;
    hm.async = 1;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GAID);
  // GA3
  } else if ( GAID.indexOf("UA-") !== -1) {
    (function(i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function() {
          (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    ga("create", GAID, "auto");
    ga("send", "pageview");
  }
}

// Baidu Analytics
if (typeof BAID !== "undefined") {
  var _hmt = _hmt || [];
  (function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?" + BAID;
    hm.async = 1;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
}

// AdSense Auto ads
if (typeof ASID !== "undefined") {
  (function () {
    var ad = document.createElement("script");
    ad.setAttribute("data-ad-client", ASID);
    ad.async = 1;
    ad.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    document.body.appendChild(ad);
  })();
}
