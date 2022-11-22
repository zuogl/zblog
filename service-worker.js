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
    "revision": "9ce4e7560b2d2fe892ab467c7580e4f8"
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
    "url": "assets/js/14.3b8bab8a.js",
    "revision": "684faf0daf1c6d29cc0595683d2c3296"
  },
  {
    "url": "assets/js/15.64edf44f.js",
    "revision": "db61fc00f045647e33014a6a14f941ab"
  },
  {
    "url": "assets/js/16.b6e27eef.js",
    "revision": "86eeb31689c2041330e6970e03d25d1f"
  },
  {
    "url": "assets/js/17.da7c2482.js",
    "revision": "bb43d395b836e61aa340f6d8dd76b47d"
  },
  {
    "url": "assets/js/18.7edaed4b.js",
    "revision": "5aeb5d82cd040b635cbd4b61208976a3"
  },
  {
    "url": "assets/js/19.ef50e743.js",
    "revision": "0c64fc6fae20c5cfc5c25ce8ce413bfd"
  },
  {
    "url": "assets/js/20.ca7082c9.js",
    "revision": "2375da4c933e3202ac25bfda5a9f2af0"
  },
  {
    "url": "assets/js/21.549bc995.js",
    "revision": "b23e8a17d103fc430a745580cf8aa824"
  },
  {
    "url": "assets/js/22.721cb048.js",
    "revision": "2d91cb6a69d7d7d094c611af58be525e"
  },
  {
    "url": "assets/js/23.102bc6b7.js",
    "revision": "0bc99a05cee76d9812622d0100f37d8c"
  },
  {
    "url": "assets/js/24.30dfd7e7.js",
    "revision": "819c5478075e98d2d09d6a199c469baf"
  },
  {
    "url": "assets/js/25.86d23f56.js",
    "revision": "42564139507a52e7321db94a297caf3f"
  },
  {
    "url": "assets/js/26.7605cbd2.js",
    "revision": "4a7b818c20d4f646dc2cc7eca4c14a57"
  },
  {
    "url": "assets/js/27.92d769ca.js",
    "revision": "5d55287fd357464d05fec684a9ffe9b6"
  },
  {
    "url": "assets/js/28.71551459.js",
    "revision": "711897415475f7d8f4cf155f0679bb48"
  },
  {
    "url": "assets/js/29.905b2386.js",
    "revision": "49928694590f439dfb52d6aea774054c"
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
    "url": "assets/js/31.9f01cc2f.js",
    "revision": "5f346039d72762643d9937800dee55b2"
  },
  {
    "url": "assets/js/32.bbce1fdf.js",
    "revision": "27950e912a6a1776354c5d6f37454c93"
  },
  {
    "url": "assets/js/33.2b97436a.js",
    "revision": "25761b3f82e22a568eebb072f745003d"
  },
  {
    "url": "assets/js/34.4e63bb08.js",
    "revision": "6cea6384f8185f6025450763f5eea698"
  },
  {
    "url": "assets/js/35.76d5c263.js",
    "revision": "321b01769365db9af60ddffb58cccd46"
  },
  {
    "url": "assets/js/36.5ad90021.js",
    "revision": "2ae9729b18e77404b8ce089a0bd0bffd"
  },
  {
    "url": "assets/js/37.2f5182b8.js",
    "revision": "4192a2c00382eb9e1136da29c8d41260"
  },
  {
    "url": "assets/js/38.24e2abba.js",
    "revision": "bc7ce625c0f6bc2bbd4a24ae9356084b"
  },
  {
    "url": "assets/js/39.acad98b4.js",
    "revision": "6a1b10503950fe2603b2ad0431f928c0"
  },
  {
    "url": "assets/js/4.d3a89c27.js",
    "revision": "0a46f4eb6786c7fdb9fe3618ac5ef6f8"
  },
  {
    "url": "assets/js/40.7d27a930.js",
    "revision": "4f4336cba7a368d76b0f74d5a2468c6b"
  },
  {
    "url": "assets/js/41.694cdd6a.js",
    "revision": "cf3ee63d77959ccbd7ead75912828206"
  },
  {
    "url": "assets/js/42.ccc75b30.js",
    "revision": "b40e34d3c87731cf70fa8de6381a183a"
  },
  {
    "url": "assets/js/43.9ed75aa7.js",
    "revision": "fcab4bba58931a1844f504abc9b3058a"
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
    "url": "assets/js/9.4fae7217.js",
    "revision": "36790505bf280ba48d39dead3d5326f1"
  },
  {
    "url": "assets/js/app.803ca7dd.js",
    "revision": "a9d3a732d144af62b7971aa69ec69ac3"
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
    "revision": "7aa993b3f4b4fe2345e6520911626383"
  },
  {
    "url": "Bug/index.html",
    "revision": "d7ecfec9631e98b79a88bdc49f66a713"
  },
  {
    "url": "categories/index.html",
    "revision": "91e9d635cba76f3a831c5442f4b75dff"
  },
  {
    "url": "dog.jpg",
    "revision": "d3fc3601376d8749b1fa849444ee6158"
  },
  {
    "url": "GIT/index.html",
    "revision": "1d14c9685e6a48e799a9195c73395b1f"
  },
  {
    "url": "index.html",
    "revision": "44bc3a9d83d6d319f4c59fe148db3b85"
  },
  {
    "url": "JSCode/index.html",
    "revision": "df85817c35b8fe288fb6680c995cce08"
  },
  {
    "url": "JSFoundation/aa-set.html",
    "revision": "72e15153b3f1b409725cf10649bb6917"
  },
  {
    "url": "JSFoundation/index.html",
    "revision": "36e43b60c5fcc5c2a2b5a891b644061b"
  },
  {
    "url": "Others/index.html",
    "revision": "a3b7096c9c8c584c299dec5370ab58d0"
  },
  {
    "url": "SQL/aa_introduce.html",
    "revision": "4e5f6ef3d522b998d10e1c3f63a1df95"
  },
  {
    "url": "SQL/ab_select.html",
    "revision": "9748ce48c8977a24acb466635b2c4776"
  },
  {
    "url": "SQL/ac_distinct.html",
    "revision": "2b9852c8041edd7479bbe49d396a5d72"
  },
  {
    "url": "SQL/ad_where.html",
    "revision": "f1bce944a0e83e8320da7ad3d13b7cd2"
  },
  {
    "url": "SQL/ae_insert_into.html",
    "revision": "4778f73e1b51da95e44e6e68c66f7c97"
  },
  {
    "url": "SQL/af_update.html",
    "revision": "d95831c59d5bad65dc3bf91bf234af87"
  },
  {
    "url": "SQL/ag_delete.html",
    "revision": "286f252b1b5e8016e013dcde9de74d01"
  },
  {
    "url": "SQL/ah_and_or_not.html",
    "revision": "199ce3f57f806607ad783076cd6e62fc"
  },
  {
    "url": "SQL/ai_in.html",
    "revision": "cac29bdfc63c53369bf8ce687204cb0d"
  },
  {
    "url": "SQL/aj_bewteen_and.html",
    "revision": "2cbc5dd68989dab5b78f8855d970cf1d"
  },
  {
    "url": "SQL/al_like.html",
    "revision": "5ff47852e567001059cc4d6dc66c7f8b"
  },
  {
    "url": "SQL/am_order_by.html",
    "revision": "b9d69f141e7033aaccc82845498ecc71"
  },
  {
    "url": "SQL/an_limit.html",
    "revision": "be7efe87030477fee7fd10e242b06804"
  },
  {
    "url": "SQL/ao_avg.html",
    "revision": "244599b0785e0658639aae83eaccb3f6"
  },
  {
    "url": "SQL/ap_time.html",
    "revision": "2099fac5020565efbc8c35ea657be556"
  },
  {
    "url": "SQL/aq_notnull.html",
    "revision": "76ca0cfa5fdde634f464a95c002edae1"
  },
  {
    "url": "SQL/ar_join.html",
    "revision": "da8afe94e4a3c1a4ff60818dc9b2ed96"
  },
  {
    "url": "SQL/as_group.html",
    "revision": "2ee7c674ff1bd502445b5a1eb83e22a9"
  },
  {
    "url": "SQL/at_often.html",
    "revision": "28860da4c34337962af18f2f682d070f"
  },
  {
    "url": "SQL/index.html",
    "revision": "f609373b09ae1af720a922dc973d09f5"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b4fa84f22221af16a89161ad6395ec2e"
  },
  {
    "url": "tag/index.html",
    "revision": "67b5b8c827f8c2a4aab016bc1dc0c9d6"
  },
  {
    "url": "tag/JSCode/index.html",
    "revision": "b6d2de7d25900d75ce725c91f7ac6fa2"
  },
  {
    "url": "tag/JS基础/index.html",
    "revision": "c09a30593ccd89f9a2ecff7e962d8a02"
  },
  {
    "url": "tag/Set/index.html",
    "revision": "0651ee3d36e641f6de557d1760c66f0c"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "ae0c8fae0a4ccf737172d7323640eda6"
  },
  {
    "url": "tag/SQL/page/2/index.html",
    "revision": "2c48566dc730eb3c53442fda670ebc75"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "23be6c884f21591d037defef43b1be1a"
  },
  {
    "url": "timeline/index.html",
    "revision": "1319df18d38b1652b18c83438e436bb6"
  },
  {
    "url": "Vue/aa_introduce.html",
    "revision": "7c4be0bc230c8839fed5d0f0eaffc969"
  },
  {
    "url": "Vue/ab.html",
    "revision": "66bda9e7ebb3464943ae786587b1cf19"
  },
  {
    "url": "Vue/ac.html",
    "revision": "7b315d5fffc037879bcc2f1a6a927cc0"
  },
  {
    "url": "Vue/ad.html",
    "revision": "b4150d65f066d171441bb9559a3ab942"
  },
  {
    "url": "Vue/index.html",
    "revision": "eda013c0b96b1141d45cd341e2c476db"
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
