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
    "revision": "3759c43cfa0caca69cd469e8bedcae7d"
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
    "url": "assets/img/distance.83195985.png",
    "revision": "83195985144e4d1d6cd2a43d4004c490"
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
    "url": "assets/js/10.d0a5e49e.js",
    "revision": "cb1cf926b746041e3951f0ddcabeba87"
  },
  {
    "url": "assets/js/11.d3a3eb23.js",
    "revision": "6036efeed2b63345a2bf615502bc8f6c"
  },
  {
    "url": "assets/js/12.d85149e1.js",
    "revision": "86f16380884d9437044025710f4a9adf"
  },
  {
    "url": "assets/js/13.9bdfb1d4.js",
    "revision": "68eaf57f692956e26896db872adaf39d"
  },
  {
    "url": "assets/js/14.652d8a19.js",
    "revision": "1c130f7c7bf5ccf2b6078bf9a33e80f1"
  },
  {
    "url": "assets/js/15.0c6ba7c9.js",
    "revision": "23314ddae31ba1d213c89c67469ac371"
  },
  {
    "url": "assets/js/16.9abbdfea.js",
    "revision": "c9cc506b036611c084d8e9ea9f5daba3"
  },
  {
    "url": "assets/js/17.991ef148.js",
    "revision": "822a65c957e796228f1b60a8172e8523"
  },
  {
    "url": "assets/js/18.7566916f.js",
    "revision": "3d79d837792ed61831b3e07184674035"
  },
  {
    "url": "assets/js/19.de734847.js",
    "revision": "b090f8b68e5b158161e85b629480b87f"
  },
  {
    "url": "assets/js/20.cdba4bdf.js",
    "revision": "91a380dcc1a8ecfc7dd280d54b072ec6"
  },
  {
    "url": "assets/js/21.0e106023.js",
    "revision": "0fd509e8daef8218983f9a8248012759"
  },
  {
    "url": "assets/js/22.fa0c6a75.js",
    "revision": "98bfab2e58d8758cb6714873b1a47db7"
  },
  {
    "url": "assets/js/23.a1f378a8.js",
    "revision": "38472cad297690ad4eb31f45afacb9e6"
  },
  {
    "url": "assets/js/24.6936853c.js",
    "revision": "e3dd36d5081a4bd81842416c0cf81892"
  },
  {
    "url": "assets/js/25.a64eb288.js",
    "revision": "2d0aaaf1b25dd1042bb24b57bb2fbb2d"
  },
  {
    "url": "assets/js/26.77d9f972.js",
    "revision": "72dd48d83464c1ebeeb2743b326c6885"
  },
  {
    "url": "assets/js/27.f21932d5.js",
    "revision": "0c9d451b4bcd3df722371362fe03eac6"
  },
  {
    "url": "assets/js/28.206c36ec.js",
    "revision": "209e7b137f4ed0ad5b7cb027db94af0c"
  },
  {
    "url": "assets/js/29.71c38a23.js",
    "revision": "3ac6da33c10e12f5db28b1a419ea0659"
  },
  {
    "url": "assets/js/3.6c699ec7.js",
    "revision": "93e51c3939e6da1ae6ebd7050f00e7be"
  },
  {
    "url": "assets/js/30.8ec4d972.js",
    "revision": "7b2310948cc56500e48a366f78f6f50f"
  },
  {
    "url": "assets/js/31.24c913c3.js",
    "revision": "ff4947f985da5165d0098672a523747f"
  },
  {
    "url": "assets/js/32.0421865b.js",
    "revision": "92ba613d5efbdffe8a1fd409528fe56c"
  },
  {
    "url": "assets/js/33.fdfba2f3.js",
    "revision": "e3cee58777c267517183299a324bd422"
  },
  {
    "url": "assets/js/34.c164b520.js",
    "revision": "768443ca73c05fb99737942975367ecf"
  },
  {
    "url": "assets/js/35.ca917d43.js",
    "revision": "586c03e5b529c3638c42e7f0327126ee"
  },
  {
    "url": "assets/js/36.adecfeaa.js",
    "revision": "ae5f33d9a1942645c0d8dfa8c5748e12"
  },
  {
    "url": "assets/js/37.3930d26c.js",
    "revision": "b2a0fb612d54e26d0361e4f53e56179c"
  },
  {
    "url": "assets/js/38.498a24ec.js",
    "revision": "62f0ed70808c2d59c2a9b54898ef7d92"
  },
  {
    "url": "assets/js/39.cc2e0775.js",
    "revision": "6f47ce659d7b117f9b952f243f7e8a84"
  },
  {
    "url": "assets/js/4.990580cd.js",
    "revision": "eb0e2f1176b1b5823eff875915ef290b"
  },
  {
    "url": "assets/js/40.5345de59.js",
    "revision": "35c4fc863b53b755b04459c2ca7a60ea"
  },
  {
    "url": "assets/js/5.cefb280a.js",
    "revision": "34e3aca3518675ed48c46c5222424b3f"
  },
  {
    "url": "assets/js/6.1a8c4e11.js",
    "revision": "d924ff4a7b4d4ca59f26a858afb18f8f"
  },
  {
    "url": "assets/js/7.0e5fb097.js",
    "revision": "0299a12f5bac33584473d7bc3f8b09cd"
  },
  {
    "url": "assets/js/8.8007dc57.js",
    "revision": "b3baea2cc3fd2cb3f51f8deb6974f6e5"
  },
  {
    "url": "assets/js/9.19aec3c7.js",
    "revision": "4ecd791dc9c016ac0d5fd6cb4ef10394"
  },
  {
    "url": "assets/js/app.73a6f761.js",
    "revision": "bf54c7268d39b937fa67c7f419e30956"
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
    "revision": "3ecbbb6148a82124690cf71ae5da2ca4"
  },
  {
    "url": "Bug/index.html",
    "revision": "efb7af36c50fe2ff9c31bee9582de2da"
  },
  {
    "url": "categories/index.html",
    "revision": "6a99648ed58a174c0ac0960f32ac744a"
  },
  {
    "url": "dog.jpg",
    "revision": "d3fc3601376d8749b1fa849444ee6158"
  },
  {
    "url": "GIT/index.html",
    "revision": "5864c5cb071d53dd9c72befe2a0bea02"
  },
  {
    "url": "index.html",
    "revision": "63c44028e8378b0d2d5a79b5c16edb5f"
  },
  {
    "url": "JSCode/index.html",
    "revision": "f3f08e439c6e7c59bda3c1e049ca4071"
  },
  {
    "url": "Others/index.html",
    "revision": "eb3d4362107d0eb3c32553c9a31bbd8e"
  },
  {
    "url": "SQL/aa_introduce.html",
    "revision": "8c5e79046c66cdb07942d2462342701e"
  },
  {
    "url": "SQL/ab_select.html",
    "revision": "eaca7297b373066f59af2f0b9b2a4e55"
  },
  {
    "url": "SQL/ac_distinct.html",
    "revision": "61162a4075ebc3c8903faf1175dd4a35"
  },
  {
    "url": "SQL/ad_where.html",
    "revision": "67b248554485f5dbf8b93f2b3d1ce04f"
  },
  {
    "url": "SQL/ae_insert_into.html",
    "revision": "041f1338036241392f0d4e288604331b"
  },
  {
    "url": "SQL/af_update.html",
    "revision": "2e140bff7e0f6ccc22eb31c7ae294936"
  },
  {
    "url": "SQL/ag_delete.html",
    "revision": "e784c5609db398e598ebad4893ced979"
  },
  {
    "url": "SQL/ah_and_or_not.html",
    "revision": "52f6552cca49714b9dd8c932f2b56bc3"
  },
  {
    "url": "SQL/ai_in.html",
    "revision": "f3c8cc89f62f981ddab89dea20a6e92d"
  },
  {
    "url": "SQL/aj_bewteen_and.html",
    "revision": "945efdc6ea3f5ab2cd8d907aec585823"
  },
  {
    "url": "SQL/al_like.html",
    "revision": "c03ae99f47522ad0d7f3ec40417f1f38"
  },
  {
    "url": "SQL/am_order_by.html",
    "revision": "19a9cbf222d8856ebd422eae88322063"
  },
  {
    "url": "SQL/an_limit.html",
    "revision": "796f980d499b413ba4f6785e2707bab1"
  },
  {
    "url": "SQL/ao_avg.html",
    "revision": "0a54eea3ea9049bab26a65062d6224dd"
  },
  {
    "url": "SQL/ap_time.html",
    "revision": "dbfd0690b5e3e8fe26495ad3f1541e7a"
  },
  {
    "url": "SQL/aq_notnull.html",
    "revision": "3668f9d417b91d444f680dfc158c8ab5"
  },
  {
    "url": "SQL/ar_join.html",
    "revision": "42300fc52148675b3403ad650d3c865f"
  },
  {
    "url": "SQL/as_group.html",
    "revision": "9555af0ebac5a7abd5b71a1797e9c6a9"
  },
  {
    "url": "SQL/at_often.html",
    "revision": "cddd044a3204cf6e8f3fe3b4cbe36e9c"
  },
  {
    "url": "SQL/index.html",
    "revision": "7af88f9203078efc734e1b9cd71b13b7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c27e881aa9f999e6b2b705ea116bb2b1"
  },
  {
    "url": "tag/index.html",
    "revision": "10a4ba3c3dffff4d9691ed6947ae5877"
  },
  {
    "url": "tag/JSCode/index.html",
    "revision": "194a818d3b551bf5483f62c7c96af683"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "2b5bda466418feb59a54a93f1c35dc4f"
  },
  {
    "url": "tag/SQL/page/2/index.html",
    "revision": "15cd7e93029516208081a7b4c2d1424c"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "9f77c95894544cc385d52c77598d17cb"
  },
  {
    "url": "timeline/index.html",
    "revision": "6a4066f517ec4ac97163959681822919"
  },
  {
    "url": "Vue/aa_introduce.html",
    "revision": "da061c311af5e51353e34c174089c1f8"
  },
  {
    "url": "Vue/ab.html",
    "revision": "8b1d6022c0a58368c6bffbc2c42713d1"
  },
  {
    "url": "Vue/index.html",
    "revision": "1a1890d271e4ebd3e2f6bbbb62a3adee"
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
