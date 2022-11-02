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
    "revision": "89925f1180e77f0f7578f5443b620f50"
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
    "url": "assets/js/11.a70e94be.js",
    "revision": "8001c28a5631fb624d5df5a37efb822e"
  },
  {
    "url": "assets/js/12.8b7da823.js",
    "revision": "e1443986750a99f606d4ecef0379d99a"
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
    "url": "assets/js/16.df925f94.js",
    "revision": "7c1244a46245636241c4ea44b1b56ac7"
  },
  {
    "url": "assets/js/17.342949ab.js",
    "revision": "7dbe9fd1c80cb6c4b135438a09e92dec"
  },
  {
    "url": "assets/js/18.17e3a2a0.js",
    "revision": "97ecc7bdda21e43b888cc274af6ca9a0"
  },
  {
    "url": "assets/js/19.90c5b0e7.js",
    "revision": "5427087c07cdd668b5dd1ca083edb927"
  },
  {
    "url": "assets/js/20.98c5c6db.js",
    "revision": "bd13796e5cdf28361f38c60b5efe4aad"
  },
  {
    "url": "assets/js/21.c7ae390d.js",
    "revision": "fa10ad4aa9f87f850f57ab59d0d8fa93"
  },
  {
    "url": "assets/js/22.a29e33cb.js",
    "revision": "2f28badbb375d1658af06bd62a02c992"
  },
  {
    "url": "assets/js/23.57acf5c0.js",
    "revision": "8a47d4d195e6814118094def613bb586"
  },
  {
    "url": "assets/js/24.823f2cfc.js",
    "revision": "b04843bbb12fc7a5f085758d16b35d16"
  },
  {
    "url": "assets/js/25.8cd6563e.js",
    "revision": "f78a5eea340c887ac4d11df61f2d3f65"
  },
  {
    "url": "assets/js/26.54d75c02.js",
    "revision": "bffc0ef7e01abf9ed2980fd846e4725f"
  },
  {
    "url": "assets/js/27.714de37e.js",
    "revision": "202ceccd3d785d9e37195b70ce1d42db"
  },
  {
    "url": "assets/js/28.75a5e404.js",
    "revision": "3a3bf252d8f7bc83c913b5f193cbbc17"
  },
  {
    "url": "assets/js/29.7ffe12ee.js",
    "revision": "9df25650e897dde4b247a9e628b6d8a3"
  },
  {
    "url": "assets/js/3.213ca10d.js",
    "revision": "dab472a7035b6000e2c38eb0f9a5c55d"
  },
  {
    "url": "assets/js/30.22b5ef94.js",
    "revision": "6998baaea53bd3a92d3e4873dad525e9"
  },
  {
    "url": "assets/js/31.59e4a261.js",
    "revision": "3875d3b12e5d04e5f158066867585d1f"
  },
  {
    "url": "assets/js/32.ae7f968c.js",
    "revision": "886e2fe4e9871e673413b884cde57422"
  },
  {
    "url": "assets/js/33.de5dd85b.js",
    "revision": "da035416d339acce3c20718ba7c66c0b"
  },
  {
    "url": "assets/js/34.7c7c9736.js",
    "revision": "6395cbe7b12d8090ca8ea42d453d2566"
  },
  {
    "url": "assets/js/35.0363b881.js",
    "revision": "02c3a5c0f7a73c762617dca2d14f73ba"
  },
  {
    "url": "assets/js/36.705c1387.js",
    "revision": "4836f0e47495210ce3c6ec13ff9df26e"
  },
  {
    "url": "assets/js/37.8e5b530b.js",
    "revision": "344e2691682b277ce6df8a8b72fcf052"
  },
  {
    "url": "assets/js/38.364a5b36.js",
    "revision": "4193dd5c83a768781870ad2ac3a149d0"
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
    "url": "assets/js/app.d2d5b842.js",
    "revision": "07c5175d0ec22d2e847a961ea1393e63"
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
    "revision": "47e4e3c280d2581f94d5b3981f5a84d0"
  },
  {
    "url": "Bug/html.html",
    "revision": "a47864adfc2f9b3694a3c07f8ced9b91"
  },
  {
    "url": "Bug/index.html",
    "revision": "fcbf8cc52574f6fbb87a2ace93032a04"
  },
  {
    "url": "categories/index.html",
    "revision": "41f03f94d15c8880c01852d11062734f"
  },
  {
    "url": "dog.jpg",
    "revision": "d3fc3601376d8749b1fa849444ee6158"
  },
  {
    "url": "GIT/index.html",
    "revision": "7ef1d70f7e6c299239234af8e2f5e595"
  },
  {
    "url": "index.html",
    "revision": "d89da4e126cb7fdff14c3d77a921d715"
  },
  {
    "url": "Others/index.html",
    "revision": "47db03e50c52583abdc92d2d078251a8"
  },
  {
    "url": "SQL/aa_introduce.html",
    "revision": "37f2b1553d8b0958fd98df723fae58f7"
  },
  {
    "url": "SQL/ab_select.html",
    "revision": "928223f39bde5688514cd12f1fca1de7"
  },
  {
    "url": "SQL/ac_distinct.html",
    "revision": "e3f261da831e08a4737696e8e5ea7b0b"
  },
  {
    "url": "SQL/ad_where.html",
    "revision": "793f027f600ffcb846942da04faf41ff"
  },
  {
    "url": "SQL/ae_insert_into.html",
    "revision": "0f8f301bb2fefa070159e63ecdac459a"
  },
  {
    "url": "SQL/af_update.html",
    "revision": "5491b84bc278ead98086e2a4d77a7cf2"
  },
  {
    "url": "SQL/ag_delete.html",
    "revision": "4eccb054549b1776e16aa3f94923b45f"
  },
  {
    "url": "SQL/ah_and_or_not.html",
    "revision": "530feeab391c1a031fb9c88277d6f015"
  },
  {
    "url": "SQL/ai_in.html",
    "revision": "9232c7d7a0dbd5dc4b6c2647f64c170b"
  },
  {
    "url": "SQL/aj_bewteen_and.html",
    "revision": "881a12dfdfba7f204edc8f12636fc399"
  },
  {
    "url": "SQL/al_like.html",
    "revision": "06ab43cb5c885921608d7e9c094b1a6a"
  },
  {
    "url": "SQL/am_order_by.html",
    "revision": "cbe9d83ad9a58ecdaca6bbaea884e07b"
  },
  {
    "url": "SQL/an_limit.html",
    "revision": "5ebd08ab9cc05afec1ff539bf24ade70"
  },
  {
    "url": "SQL/ao_avg.html",
    "revision": "5651975e523861d578bb73b4f25de139"
  },
  {
    "url": "SQL/ap_time.html",
    "revision": "a7e3112d8b0f38065bff659c48272b05"
  },
  {
    "url": "SQL/aq_notnull.html",
    "revision": "0eb26d4c3fc7092a6d665646bb2cb7c4"
  },
  {
    "url": "SQL/ar_join.html",
    "revision": "c231d36db697bece647adb70daa53e66"
  },
  {
    "url": "SQL/as_group.html",
    "revision": "8bc403d816d00609004463ce04c9c2f7"
  },
  {
    "url": "SQL/at_often.html",
    "revision": "c45af000b131a8abd07214d140a19779"
  },
  {
    "url": "SQL/index.html",
    "revision": "4105f0b7c539557bc6324d156f35b5e7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "bfe47c4fe39a7d8aed3989f014eecb05"
  },
  {
    "url": "tag/index.html",
    "revision": "7fd80560c52efd797481022da51d7a79"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "6583926a836f9af8e7bbb5b29200379e"
  },
  {
    "url": "tag/SQL/page/2/index.html",
    "revision": "d01ce37b26958567033da1cafc7076d6"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "c03169ef01adeca56d0791537da6cb5e"
  },
  {
    "url": "timeline/index.html",
    "revision": "31532e2dbc765fda9ed1f363e664b4d3"
  },
  {
    "url": "Vue/aa_introduce.html",
    "revision": "e4c6188112fc8bba28f8f10c0e1062b5"
  },
  {
    "url": "Vue/index.html",
    "revision": "ea2cc91b4809b4c4cd4f69c2ad4381be"
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
