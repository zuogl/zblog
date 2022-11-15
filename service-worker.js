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
    "revision": "de2c72fbb1df7567fd59753781ce46d1"
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
    "url": "assets/js/10.1f115a22.js",
    "revision": "aff2a692c7cb04e35af72b5c0669db83"
  },
  {
    "url": "assets/js/11.b5617f97.js",
    "revision": "a270954800977eb8d1ec3e210ef0aec3"
  },
  {
    "url": "assets/js/12.6d76f96a.js",
    "revision": "d8242b29bfec31fdf4f4fddf241714a9"
  },
  {
    "url": "assets/js/13.b0f73d68.js",
    "revision": "e56b82cf3d49b750a7b0fdf39e2b0d33"
  },
  {
    "url": "assets/js/14.3fec60db.js",
    "revision": "a038a02f815747e4d95ec021025cb80a"
  },
  {
    "url": "assets/js/15.d4ec79c2.js",
    "revision": "a60f368739d7eaeb2990ad1c2a8e6b66"
  },
  {
    "url": "assets/js/16.b8281dac.js",
    "revision": "35027920489ee7c688377e1e5f8cf543"
  },
  {
    "url": "assets/js/17.1228a2d0.js",
    "revision": "e0074ee1604f636343b7a209ed7d397c"
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
    "url": "assets/js/20.3ecf4260.js",
    "revision": "99a2547b9e3246fef1fb063336e0ae91"
  },
  {
    "url": "assets/js/21.155a2bae.js",
    "revision": "4d2a372afa404a930184355f01c15e63"
  },
  {
    "url": "assets/js/22.94377cae.js",
    "revision": "40248535d4dc8df85e610fba6a14ca02"
  },
  {
    "url": "assets/js/23.945a2ac3.js",
    "revision": "1d73b21303896d1732c512ff7e5eb20c"
  },
  {
    "url": "assets/js/24.6e01187d.js",
    "revision": "c20e3fa8ae8b1c9de5ea6feefb8b456d"
  },
  {
    "url": "assets/js/25.b9dbb02a.js",
    "revision": "8e3b65398cb187addc6496cfcc10fc83"
  },
  {
    "url": "assets/js/26.e0bb7e93.js",
    "revision": "afcb61019edd766ec0a7efb2f9ac752b"
  },
  {
    "url": "assets/js/27.2004056d.js",
    "revision": "32666478e0a7b0f6a6e55bc51aa22b36"
  },
  {
    "url": "assets/js/28.26ee4691.js",
    "revision": "837d1b865da6695c0baebff0c9055f32"
  },
  {
    "url": "assets/js/29.79afc311.js",
    "revision": "6dfe1b080b72b0181b1bd7c132cd172f"
  },
  {
    "url": "assets/js/3.a3e8eeab.js",
    "revision": "87d5b1cd1afdf6ea6964157920d1716c"
  },
  {
    "url": "assets/js/30.6fca7bed.js",
    "revision": "485281334428a0ed57925ea44bc3d618"
  },
  {
    "url": "assets/js/31.e43cd64a.js",
    "revision": "3ab1738cd293002dd290738caa6af7f7"
  },
  {
    "url": "assets/js/32.e12f85fa.js",
    "revision": "b5182dfd37badadb5b702b447fa7fd7d"
  },
  {
    "url": "assets/js/33.3697de82.js",
    "revision": "3f625575961db72747969de5e5cbc0a6"
  },
  {
    "url": "assets/js/34.5c499ffa.js",
    "revision": "eeacf43832a2aa0531fe402f1ce42612"
  },
  {
    "url": "assets/js/35.a24b7e73.js",
    "revision": "59a52d3156b697e4716e7a2350b47576"
  },
  {
    "url": "assets/js/36.d170c174.js",
    "revision": "c33caa89b46e82ba053cdca49f6f579d"
  },
  {
    "url": "assets/js/37.134fe996.js",
    "revision": "da213b791df2ba0ae8ba9e8e7320c0b2"
  },
  {
    "url": "assets/js/38.f0d6c443.js",
    "revision": "e95e87b44a3c6123d5b0895b243e5c5a"
  },
  {
    "url": "assets/js/39.d5bb6dd0.js",
    "revision": "9ad46ec3e5d14aba038cce6881b2cf31"
  },
  {
    "url": "assets/js/4.d3a89c27.js",
    "revision": "0a46f4eb6786c7fdb9fe3618ac5ef6f8"
  },
  {
    "url": "assets/js/40.fd8ca71b.js",
    "revision": "1829a1425cd904f2e35082b39363e088"
  },
  {
    "url": "assets/js/41.1c56ca44.js",
    "revision": "1267a7183cbdbf2ef303af5ae6c239ea"
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
    "url": "assets/js/9.253df2b5.js",
    "revision": "ab474c940b0606de5b6a3ce050a68425"
  },
  {
    "url": "assets/js/app.87352623.js",
    "revision": "d487bcf946b99eb4b8c2f5a6fae68d45"
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
    "revision": "fc8709851f11c4f1f4558d6b43c4df03"
  },
  {
    "url": "Bug/index.html",
    "revision": "be28d8ab2a8b3954f4a0f5841332dbab"
  },
  {
    "url": "categories/index.html",
    "revision": "44b6674b13a0ee75d2dcdc819fc71328"
  },
  {
    "url": "dog.jpg",
    "revision": "d3fc3601376d8749b1fa849444ee6158"
  },
  {
    "url": "GIT/index.html",
    "revision": "d2af4688702c31329c73602bdfa1d42e"
  },
  {
    "url": "index.html",
    "revision": "2764601ed97a0131f87ce977eaa41a25"
  },
  {
    "url": "JSCode/index.html",
    "revision": "bcce32be8514a8d5fc9dc5f93eb27291"
  },
  {
    "url": "Others/index.html",
    "revision": "2419381933fb40afc4997885c7e95d43"
  },
  {
    "url": "SQL/aa_introduce.html",
    "revision": "e8aa3fb5e06f6e7b25a3e96491eab1f6"
  },
  {
    "url": "SQL/ab_select.html",
    "revision": "b7aad59c352d6ea5058ff814150fb230"
  },
  {
    "url": "SQL/ac_distinct.html",
    "revision": "382cea86a9a21a64f67d0713c5c47b36"
  },
  {
    "url": "SQL/ad_where.html",
    "revision": "faf67af7be6a715849ce8009200bde5e"
  },
  {
    "url": "SQL/ae_insert_into.html",
    "revision": "6c98ffce711c1ff104b3a60482382df5"
  },
  {
    "url": "SQL/af_update.html",
    "revision": "0edbd834f14fac796de78efb8a418649"
  },
  {
    "url": "SQL/ag_delete.html",
    "revision": "3d7caa740c06c7f04c78b1dfdd2e3850"
  },
  {
    "url": "SQL/ah_and_or_not.html",
    "revision": "62a11a940aaaf9e013f516a9b451ceb7"
  },
  {
    "url": "SQL/ai_in.html",
    "revision": "7186d6372dd72b6f127dccc9e8aac63a"
  },
  {
    "url": "SQL/aj_bewteen_and.html",
    "revision": "0118892da37805b920e37440d8d1c3e4"
  },
  {
    "url": "SQL/al_like.html",
    "revision": "46fff7872bc0d105c7fd2bea07a38546"
  },
  {
    "url": "SQL/am_order_by.html",
    "revision": "369f3ee950b3f1fbacb20eefd9a9dde8"
  },
  {
    "url": "SQL/an_limit.html",
    "revision": "f377788056db191e17fe688ea7d764db"
  },
  {
    "url": "SQL/ao_avg.html",
    "revision": "f35585222c31ccaff06b58ff31c6160e"
  },
  {
    "url": "SQL/ap_time.html",
    "revision": "4eff6f854f12ce7a63e1d801b5e2e736"
  },
  {
    "url": "SQL/aq_notnull.html",
    "revision": "2e793f706aec812221f5fabea56d72a3"
  },
  {
    "url": "SQL/ar_join.html",
    "revision": "ebf22296d9d49f1417390bdbf53897ff"
  },
  {
    "url": "SQL/as_group.html",
    "revision": "9397515a4e42b193416dd3bccd6dd049"
  },
  {
    "url": "SQL/at_often.html",
    "revision": "21a5fb602d309d5494d12b3ea81fe24a"
  },
  {
    "url": "SQL/index.html",
    "revision": "fc6fc4caa34e9a2d6c2fa32fa1601371"
  },
  {
    "url": "tag/git/index.html",
    "revision": "0695f1147d42925f66e766d491ae714a"
  },
  {
    "url": "tag/index.html",
    "revision": "d923056ac50bb8efdbdc862a95c2cfcd"
  },
  {
    "url": "tag/JSCode/index.html",
    "revision": "6cf150a69aed26ecffe345837609e958"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "625e5d81f56532816b169a8adb392237"
  },
  {
    "url": "tag/SQL/page/2/index.html",
    "revision": "07e607156611dad11a2d4de040abd6c3"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "aed4eebe6a86607862a8d63f04b06f79"
  },
  {
    "url": "timeline/index.html",
    "revision": "7f8cf583fe1bc48fcd77f906c881adf6"
  },
  {
    "url": "Vue/aa_introduce.html",
    "revision": "328dc3c97b6b5e418b3e6ce19e20ec14"
  },
  {
    "url": "Vue/ab.html",
    "revision": "483ac29a32a35b12d07a87ec4c5c7501"
  },
  {
    "url": "Vue/ac.html",
    "revision": "5e4ab63bd97bf300649801b338b35229"
  },
  {
    "url": "Vue/index.html",
    "revision": "78456d91d45a4b9763e1b49ef014b1cd"
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
