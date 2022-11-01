/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "de9b088b791b416a8c1e403d07d7ef1b"
  },
  {
    "url": "assets/css/0.styles.b5582c03.css",
    "revision": "3164fa9f51c012c87e2263a6b407f859"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/sql01.c7756837.png",
    "revision": "c7756837c33635604f3d99b80127ca38"
  },
  {
    "url": "assets/img/terminal01.2e577497.png",
    "revision": "2e577497ec18a399e16e7f7e43942b6b"
  },
  {
    "url": "assets/img/terminal03.72e3f86c.png",
    "revision": "72e3f86c020cd37a56f11d6f45894108"
  },
  {
    "url": "assets/img/vue.5c9ef453.jpg",
    "revision": "5c9ef453a3234ffd8792671602d5e8dd"
  },
  {
    "url": "assets/js/1.38b0d07c.js",
    "revision": "433a499564021110be38b7283c7d2332"
  },
  {
    "url": "assets/js/10.2c09ebde.js",
    "revision": "df152983f2ce47f8566eeb40423a7aeb"
  },
  {
    "url": "assets/js/11.9f5ac15c.js",
    "revision": "a394fa3b2842f08f4fa94a876f2e1578"
  },
  {
    "url": "assets/js/12.3518703f.js",
    "revision": "a5152e90135f3e6dba2695457549d486"
  },
  {
    "url": "assets/js/13.586a2427.js",
    "revision": "6dfb893f61ad197172aa1d352f24ac88"
  },
  {
    "url": "assets/js/14.7d42adc4.js",
    "revision": "3f679eb060c5663df596c6ade46fd8b7"
  },
  {
    "url": "assets/js/15.8d5423ef.js",
    "revision": "db3edba02845a2b107a80cbcb917e393"
  },
  {
    "url": "assets/js/16.406f16e3.js",
    "revision": "0f95d0d68e74ca79ad2925efffca8239"
  },
  {
    "url": "assets/js/17.83b85ce2.js",
    "revision": "0cdc3e86b2eae17862b1c9338053aec5"
  },
  {
    "url": "assets/js/18.58c183b4.js",
    "revision": "5a5579f8f361b31704dff5c6d83dfbaa"
  },
  {
    "url": "assets/js/19.4bd766ea.js",
    "revision": "f6219eb42248fab383e9ff88fc2c5f7c"
  },
  {
    "url": "assets/js/20.7c589db6.js",
    "revision": "52eaa05c9ecb74501d2b46f400442da3"
  },
  {
    "url": "assets/js/21.77025e8b.js",
    "revision": "903533b7e98ec2ade914d16d69fe7734"
  },
  {
    "url": "assets/js/22.f09d7911.js",
    "revision": "e7d4d058f3781198786fea2bdb6e8c21"
  },
  {
    "url": "assets/js/23.023165e3.js",
    "revision": "1dff2b283fa0015b1aa4a18e2b6abd73"
  },
  {
    "url": "assets/js/24.87e5e211.js",
    "revision": "67442b77d5f4f2dbec84f8aec072355d"
  },
  {
    "url": "assets/js/25.1c626049.js",
    "revision": "5ad9379ffb8be84632f370b60c50fa47"
  },
  {
    "url": "assets/js/26.80f4e930.js",
    "revision": "199e84f9dee7d47b83ea4fbfc89ba053"
  },
  {
    "url": "assets/js/27.517f6d9a.js",
    "revision": "86cb3397183bf381ad95674ee6177b40"
  },
  {
    "url": "assets/js/28.75a5e404.js",
    "revision": "3a3bf252d8f7bc83c913b5f193cbbc17"
  },
  {
    "url": "assets/js/29.a22828a9.js",
    "revision": "dc7674e4bb5fdf6f13a1b49e0aa0b1f8"
  },
  {
    "url": "assets/js/3.213ca10d.js",
    "revision": "dab472a7035b6000e2c38eb0f9a5c55d"
  },
  {
    "url": "assets/js/30.215931be.js",
    "revision": "05ce492e440fb308f3aa0d3c532adbb2"
  },
  {
    "url": "assets/js/31.311f3967.js",
    "revision": "bced9891f0b6759b29bbb1dc1148d5d4"
  },
  {
    "url": "assets/js/32.94bf72ea.js",
    "revision": "8f01797bbf66f2b231ed89f50174f47d"
  },
  {
    "url": "assets/js/33.de5dd85b.js",
    "revision": "da035416d339acce3c20718ba7c66c0b"
  },
  {
    "url": "assets/js/34.8030310e.js",
    "revision": "bbe7d9abb922990b09f0dbb0a043d8ec"
  },
  {
    "url": "assets/js/35.0363b881.js",
    "revision": "02c3a5c0f7a73c762617dca2d14f73ba"
  },
  {
    "url": "assets/js/36.12b5e9e3.js",
    "revision": "be57311fd926e7960d25155147059fd4"
  },
  {
    "url": "assets/js/37.4f01b68f.js",
    "revision": "9210b2daf9353061a337b2f51e66365a"
  },
  {
    "url": "assets/js/38.cf23f869.js",
    "revision": "947dc8fd4aab665836df3e8aaca338c7"
  },
  {
    "url": "assets/js/39.57892497.js",
    "revision": "90dd2c230ccedf57201dab0066d87b53"
  },
  {
    "url": "assets/js/4.5425a346.js",
    "revision": "c84f87c4572c716c9182350da37f15a8"
  },
  {
    "url": "assets/js/5.e5896c8f.js",
    "revision": "ba28eb0111e654359f3c3ad595b2a449"
  },
  {
    "url": "assets/js/6.9ab48af5.js",
    "revision": "a47f990dc397d57edf114e407c1a6467"
  },
  {
    "url": "assets/js/7.08e110fa.js",
    "revision": "0e34d28a6e87ced1a76e49fa255b3001"
  },
  {
    "url": "assets/js/8.f3bd0953.js",
    "revision": "bdac0cdd5cd6232485c89bcb1a078257"
  },
  {
    "url": "assets/js/9.dbbcbe84.js",
    "revision": "51e58a551f828b7bcfa37b4e3ee5a59b"
  },
  {
    "url": "assets/js/app.73c5308c.js",
    "revision": "cb6f134020b5de9c205c7207429779ac"
  },
  {
    "url": "avatar.jpg",
    "revision": "7e47b3898849d62a1c8dbbdd9276e310"
  },
  {
    "url": "avatar288.jpg",
    "revision": "eae3060651158ee4c1da6d5f520f9edb"
  },
  {
    "url": "avatar52.jpg",
    "revision": "dcbaa4e2fe602878034dd55a562f7189"
  },
  {
    "url": "Bug/git.html",
    "revision": "4406c49bd1492da1ed041f09ab60c497"
  },
  {
    "url": "Bug/html.html",
    "revision": "ad4bab4ba1c0fa2ac8b1741eedf8ea10"
  },
  {
    "url": "Bug/index.html",
    "revision": "3811f1a2f346feb2f7515c58ba217b58"
  },
  {
    "url": "categories/index.html",
    "revision": "53244967671e4dae0b1cd5927f4ac49e"
  },
  {
    "url": "dog.jpg",
    "revision": "d3fc3601376d8749b1fa849444ee6158"
  },
  {
    "url": "GIT/index.html",
    "revision": "8af2f7ea154ef376f64ca79451d15b2b"
  },
  {
    "url": "index.html",
    "revision": "3f0488f2f7f0391564405e0e3b32d384"
  },
  {
    "url": "Others/index.html",
    "revision": "c161c48e34459ebc7014122589125e44"
  },
  {
    "url": "SQL/aa_introduce.html",
    "revision": "c7b4255e905ebc13bb6aef8d98de6f67"
  },
  {
    "url": "SQL/ab_select.html",
    "revision": "04063bc23b5f4d6b4f7afac09c47769d"
  },
  {
    "url": "SQL/ac_distinct.html",
    "revision": "040d82b6c51b77922a7fd4a649df158c"
  },
  {
    "url": "SQL/ad_where.html",
    "revision": "4d83da362de2340dac97038c6e74e3a1"
  },
  {
    "url": "SQL/ae_insert_into.html",
    "revision": "e3a8fe458923fe5d7dac4ca34e581bfa"
  },
  {
    "url": "SQL/af_update.html",
    "revision": "b227c7300f76094a6a152305f4efe717"
  },
  {
    "url": "SQL/ag_delete.html",
    "revision": "e14072f5b72b5f0130133320e05a07a6"
  },
  {
    "url": "SQL/ah_and_or_not.html",
    "revision": "b21102751949ddeec47e37f8e1f92b2d"
  },
  {
    "url": "SQL/ai_in.html",
    "revision": "e41fe78a13157c007fa9de2872438143"
  },
  {
    "url": "SQL/aj_bewteen_and.html",
    "revision": "dbb999e93695ae80e9036a00b2202b78"
  },
  {
    "url": "SQL/al_like.html",
    "revision": "4172b1e0203a1e942a4057299db31090"
  },
  {
    "url": "SQL/am_order_by.html",
    "revision": "a8f0b9decf7402ee4660bd2ed9fb0d87"
  },
  {
    "url": "SQL/an_limit.html",
    "revision": "1425221a77e672f7c88b66f776565c85"
  },
  {
    "url": "SQL/ao_avg.html",
    "revision": "9f54e7f3c92b5e6baef8e7f6e2f9daff"
  },
  {
    "url": "SQL/ap_time.html",
    "revision": "eb641813f6eb9537ab10fe15ef38cd79"
  },
  {
    "url": "SQL/aq_notnull.html",
    "revision": "70d0f897951302e3f4b6301ca30f9a75"
  },
  {
    "url": "SQL/ar_join.html",
    "revision": "76a65b95153e5fa654dc1c8fdf5bf873"
  },
  {
    "url": "SQL/as_group.html",
    "revision": "5d0478e5f8a7891a96edf00c1d98bae8"
  },
  {
    "url": "SQL/at_often.html",
    "revision": "d7b1ee4957f1b4a4f2a36e26cf45b491"
  },
  {
    "url": "SQL/index.html",
    "revision": "079a04629ab72d47b553794096cca9bd"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d390cfa02734469bb5df2e985218c2ba"
  },
  {
    "url": "tag/index.html",
    "revision": "10b7efb21e1978384868bd0f5191a11c"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "e82b5ceed6a18b2d72cc1c28babe0713"
  },
  {
    "url": "tag/SQL/page/2/index.html",
    "revision": "507bc0b00cc5efd87f05f77145f8fda2"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "8e8fd57d35b7392241ec2d3d17070845"
  },
  {
    "url": "timeline/index.html",
    "revision": "9edaab4928b63f6e382c628fc208547a"
  },
  {
    "url": "Vue/aa_introduce.html",
    "revision": "c29a4373e7da4de6e22a911bdada7adb"
  },
  {
    "url": "Vue/index.html",
    "revision": "21e25f425cfa8ab06a69c1584f9f3c84"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
