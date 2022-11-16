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
    "revision": "2640c83dc69f4a0392563e26adf4f70d"
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
    "url": "assets/img/byq.0bffdd0c.png",
    "revision": "0bffdd0cde498330b1463fcb0d045c3a"
  },
  {
    "url": "assets/img/distance.83195985.png",
    "revision": "83195985144e4d1d6cd2a43d4004c490"
  },
  {
    "url": "assets/img/gitUpdate.92f3cbbe.png",
    "revision": "92f3cbbe5db2a6ed9d2595a45f2e023f"
  },
  {
    "url": "assets/img/render2.b67c159d.png",
    "revision": "b67c159d229e9fb8d96d59a2257133bc"
  },
  {
    "url": "assets/img/rollup01.83891f59.png",
    "revision": "83891f5998334eb0b0f8178c13eb1b5f"
  },
  {
    "url": "assets/img/rollup02.c1740d24.png",
    "revision": "c1740d24fcd404f9ec9caf22c6d03fdf"
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
    "url": "assets/js/10.e597cd83.js",
    "revision": "3e2b7e2bdb0e9fe6034b9fce42110869"
  },
  {
    "url": "assets/js/11.b5617f97.js",
    "revision": "a270954800977eb8d1ec3e210ef0aec3"
  },
  {
    "url": "assets/js/12.2eefdfa2.js",
    "revision": "5d91ab705e5f4240de78e8b78bc8bbfb"
  },
  {
    "url": "assets/js/13.b0f73d68.js",
    "revision": "e56b82cf3d49b750a7b0fdf39e2b0d33"
  },
  {
    "url": "assets/js/14.af638f6f.js",
    "revision": "0b901261ff3ad543b78db3b58a1b12b0"
  },
  {
    "url": "assets/js/15.e04f3374.js",
    "revision": "79458226ab5c4bab7436e7ddf1bc0d02"
  },
  {
    "url": "assets/js/16.4e4acfff.js",
    "revision": "b4c2a61444ff573d71b010a1d394fb0d"
  },
  {
    "url": "assets/js/17.6bd1aab0.js",
    "revision": "b63962c4835eac28aa9c1c8158498283"
  },
  {
    "url": "assets/js/18.7edaed4b.js",
    "revision": "5aeb5d82cd040b635cbd4b61208976a3"
  },
  {
    "url": "assets/js/19.0b393f42.js",
    "revision": "d99c3e46b12193cc8327a829daa3e8f9"
  },
  {
    "url": "assets/js/20.e631b184.js",
    "revision": "a727f744eac08fccbd203305f7f0b239"
  },
  {
    "url": "assets/js/21.657c6dff.js",
    "revision": "16a5899caa4bb1d6e3a94b9cf2a9049b"
  },
  {
    "url": "assets/js/22.721cb048.js",
    "revision": "2d91cb6a69d7d7d094c611af58be525e"
  },
  {
    "url": "assets/js/23.4a7294b5.js",
    "revision": "f18a49a2a648380c6b85eb9dccf6ed36"
  },
  {
    "url": "assets/js/24.6b8f7c27.js",
    "revision": "6cbea9180712d4046800d51876239f96"
  },
  {
    "url": "assets/js/25.be977d6d.js",
    "revision": "0e099c9a6aa578099aa52c0a1f3d0b76"
  },
  {
    "url": "assets/js/26.b499f0b5.js",
    "revision": "c51c367a0a0e80ed7af229bf983727fb"
  },
  {
    "url": "assets/js/27.92d769ca.js",
    "revision": "5d55287fd357464d05fec684a9ffe9b6"
  },
  {
    "url": "assets/js/28.1d99763a.js",
    "revision": "c9dc4790b21e515dd91dc087ae88cf7a"
  },
  {
    "url": "assets/js/29.4474a5dd.js",
    "revision": "4950e027bf3fa89477b2511e1863b96f"
  },
  {
    "url": "assets/js/3.a3e8eeab.js",
    "revision": "87d5b1cd1afdf6ea6964157920d1716c"
  },
  {
    "url": "assets/js/30.b6888233.js",
    "revision": "eafe738f517084e812a7c2bf86eed053"
  },
  {
    "url": "assets/js/31.fbd0c401.js",
    "revision": "76d5aecc91648ef198637a42cf6553e5"
  },
  {
    "url": "assets/js/32.bbce1fdf.js",
    "revision": "27950e912a6a1776354c5d6f37454c93"
  },
  {
    "url": "assets/js/33.0c5a0dde.js",
    "revision": "0ef88f821f4bf3e288461fe3dce03484"
  },
  {
    "url": "assets/js/34.c6a8362d.js",
    "revision": "9e1188ec6e1703633cfa88a6ff30ced6"
  },
  {
    "url": "assets/js/35.05a88d27.js",
    "revision": "5784593e25c0426e0e122f09dddd5e23"
  },
  {
    "url": "assets/js/36.eb36741f.js",
    "revision": "315ce8420e3d001ac5672ada99e06a35"
  },
  {
    "url": "assets/js/37.0a79bd73.js",
    "revision": "ee07b47f652c1cd3816a485440ea4d6a"
  },
  {
    "url": "assets/js/38.24e2abba.js",
    "revision": "bc7ce625c0f6bc2bbd4a24ae9356084b"
  },
  {
    "url": "assets/js/39.b4ce76b0.js",
    "revision": "4160998fdcd655d5bc577e5346d652be"
  },
  {
    "url": "assets/js/4.d3a89c27.js",
    "revision": "0a46f4eb6786c7fdb9fe3618ac5ef6f8"
  },
  {
    "url": "assets/js/40.6d15a675.js",
    "revision": "22e4c916e8a5f8e46d9a0ea94519ad9c"
  },
  {
    "url": "assets/js/41.b2bb962e.js",
    "revision": "67d7a99a8d57a5bc65191c5aeab03a22"
  },
  {
    "url": "assets/js/42.ccc75b30.js",
    "revision": "b40e34d3c87731cf70fa8de6381a183a"
  },
  {
    "url": "assets/js/43.d0f5111c.js",
    "revision": "874b64ce37f175097d232a02b274d533"
  },
  {
    "url": "assets/js/44.4339796c.js",
    "revision": "43baf11b7109d82d0584ebb528356e52"
  },
  {
    "url": "assets/js/5.64a4f0eb.js",
    "revision": "7327a5f1e78fd85405a37ed2395b831d"
  },
  {
    "url": "assets/js/6.26ff2aee.js",
    "revision": "e4c9ae8d5cf2acc38056575d588fb882"
  },
  {
    "url": "assets/js/7.d788d7e0.js",
    "revision": "757485814a6f863b70410f8c20ee0a81"
  },
  {
    "url": "assets/js/8.9a55c023.js",
    "revision": "a418012a3e91f11370c5eb15b5b932ba"
  },
  {
    "url": "assets/js/9.76a8c6c7.js",
    "revision": "6a6fc940ac49e9a6821ce11649d316bc"
  },
  {
    "url": "assets/js/app.939d2385.js",
    "revision": "5f17be356853f32bb0359b6b13d5708d"
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
    "revision": "b934d4c49f285c88c557fd92aed4ea6c"
  },
  {
    "url": "Bug/index.html",
    "revision": "47fe261e001aa08e0a91aab321eda3a2"
  },
  {
    "url": "categories/index.html",
    "revision": "69881af885afb5a8f92f612c65a972a4"
  },
  {
    "url": "dog.jpg",
    "revision": "d3fc3601376d8749b1fa849444ee6158"
  },
  {
    "url": "GIT/index.html",
    "revision": "769a46e82fd425f0ab5e2f46040f4d98"
  },
  {
    "url": "index.html",
    "revision": "0fec2fbff02dae1b847925f3929406ea"
  },
  {
    "url": "JSCode/index.html",
    "revision": "c9500639b086031f589ee449443aabd8"
  },
  {
    "url": "JSFoundation/aa-set.html",
    "revision": "2dcb0de62214bbf7806ac6e10a366d26"
  },
  {
    "url": "JSFoundation/index.html",
    "revision": "d5cd13ee0108a2d641a204a54fce45bb"
  },
  {
    "url": "Others/index.html",
    "revision": "a1afab041d9b984eb11c7d0af025f616"
  },
  {
    "url": "SQL/aa_introduce.html",
    "revision": "3cccd17770fe05cf1af7f1c56c37aa90"
  },
  {
    "url": "SQL/ab_select.html",
    "revision": "593f01310f471c813637243561c0feb3"
  },
  {
    "url": "SQL/ac_distinct.html",
    "revision": "fd1a036e48aebd05b704bbdc98d788e6"
  },
  {
    "url": "SQL/ad_where.html",
    "revision": "3d91d99b7d742449c2fc01c892dcad8f"
  },
  {
    "url": "SQL/ae_insert_into.html",
    "revision": "a9d304ecbb09e82dc29ec0534c88a487"
  },
  {
    "url": "SQL/af_update.html",
    "revision": "1165982c55d53befba630f4d782227a2"
  },
  {
    "url": "SQL/ag_delete.html",
    "revision": "22140ea44405e9863fee11fcf94c6f0c"
  },
  {
    "url": "SQL/ah_and_or_not.html",
    "revision": "dccc59cbbc6f83d663aab147d6e42f34"
  },
  {
    "url": "SQL/ai_in.html",
    "revision": "c54990096f3e2d9c288bee17efc6c175"
  },
  {
    "url": "SQL/aj_bewteen_and.html",
    "revision": "3905ae0c2f23ec5db7b4482f14f24096"
  },
  {
    "url": "SQL/al_like.html",
    "revision": "ec07545d1ac038b33c8c69263ad9b86b"
  },
  {
    "url": "SQL/am_order_by.html",
    "revision": "7fc343be00f68f0497cb3b36034f1446"
  },
  {
    "url": "SQL/an_limit.html",
    "revision": "d4e97359fbf72c9af62c79c132835ff1"
  },
  {
    "url": "SQL/ao_avg.html",
    "revision": "3f7be152e5d20ef96f39a38576e6d00c"
  },
  {
    "url": "SQL/ap_time.html",
    "revision": "0c3e2a0d31715252015097d42c37aaf1"
  },
  {
    "url": "SQL/aq_notnull.html",
    "revision": "95942310953c05dc0c34b10347d29363"
  },
  {
    "url": "SQL/ar_join.html",
    "revision": "14ccada3bf23d3785f71987d3382309a"
  },
  {
    "url": "SQL/as_group.html",
    "revision": "cdbc750dc5b977889514e6b3193d1c89"
  },
  {
    "url": "SQL/at_often.html",
    "revision": "b7f43d8baa185d2fdd89c58bebed6552"
  },
  {
    "url": "SQL/index.html",
    "revision": "73befa13813925dce59305ea5ffce8bc"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b482b22f49925077d127d1d4743be33b"
  },
  {
    "url": "tag/index.html",
    "revision": "43c8661e39e82c90352455e2f2e08d37"
  },
  {
    "url": "tag/JSCode/index.html",
    "revision": "17998f21b65103d9e48173c53195a380"
  },
  {
    "url": "tag/JS基础/index.html",
    "revision": "c5f924c570263805abe2df7046d77588"
  },
  {
    "url": "tag/Set/index.html",
    "revision": "cca583fd2e20ac424f95e59aa4a5506e"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "a80216fd58dafbf5bda89aef08411bbd"
  },
  {
    "url": "tag/SQL/page/2/index.html",
    "revision": "db405d0087355b4dfd61fcacfddbf041"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "8c0f115912d3d07dac666c72bc209e4f"
  },
  {
    "url": "timeline/index.html",
    "revision": "e7f1765753e4cf0bf39ea5011f4a18e7"
  },
  {
    "url": "Vue/aa_introduce.html",
    "revision": "10717b2406141013b21c064781627d14"
  },
  {
    "url": "Vue/ab.html",
    "revision": "4047f771934324d3bb1fbbb9993d2dad"
  },
  {
    "url": "Vue/ac.html",
    "revision": "4907998e1e35482ddd25504d3ea1f360"
  },
  {
    "url": "Vue/ad.html",
    "revision": "02e710fd84ba72e407185099e4a355d1"
  },
  {
    "url": "Vue/index.html",
    "revision": "0037227cf769416b48c6ed0393cd6436"
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
