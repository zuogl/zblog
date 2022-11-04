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
    "revision": "39db6a745dfd4ccf50ac4f4c3bf74190"
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
    "url": "assets/js/10.101aaadd.js",
    "revision": "b39f820e0d657126bcc232b7ef583b8a"
  },
  {
    "url": "assets/js/11.28a5b276.js",
    "revision": "a322894420e567f298793a16c0867fe5"
  },
  {
    "url": "assets/js/12.e3919144.js",
    "revision": "e55505163bf8718ad0699d8b9c065d30"
  },
  {
    "url": "assets/js/13.68f07b89.js",
    "revision": "ef6da282053cd221cc683d06604ed0b8"
  },
  {
    "url": "assets/js/14.94d5e094.js",
    "revision": "62b1aa81762e716ec86c9928d59777f2"
  },
  {
    "url": "assets/js/15.f81a5dc2.js",
    "revision": "dc8f6ee0ae5f6d7297181151dadea425"
  },
  {
    "url": "assets/js/16.90e15762.js",
    "revision": "a2d6850225502b4f146bef5793960244"
  },
  {
    "url": "assets/js/17.f40192da.js",
    "revision": "3dabe2bd3e81ac6d1ebe6ec2d9d88800"
  },
  {
    "url": "assets/js/18.84a7fffa.js",
    "revision": "cfb708ddae43a343cbdbd15da711548d"
  },
  {
    "url": "assets/js/19.35af8805.js",
    "revision": "297e6b80264908d6d9e1d6625b3d9afe"
  },
  {
    "url": "assets/js/20.14c682e0.js",
    "revision": "30a9a59bab106e7c577fdbab5457e3b1"
  },
  {
    "url": "assets/js/21.8651072b.js",
    "revision": "a2c865ad93e416c6bf1eba78034aadab"
  },
  {
    "url": "assets/js/22.24557495.js",
    "revision": "583ac741644a7be6ccf5bbab58f7c31f"
  },
  {
    "url": "assets/js/23.0d57b09b.js",
    "revision": "c226133181cd45a98121e15dc075c07b"
  },
  {
    "url": "assets/js/24.1e23684e.js",
    "revision": "77b32c593120d2da86008bc18c9179d4"
  },
  {
    "url": "assets/js/25.8ea50b16.js",
    "revision": "4fbad1b24b24ee47da36a7423006ec44"
  },
  {
    "url": "assets/js/26.8c30e280.js",
    "revision": "36d66a65612b475c85d5fc86208e7ddd"
  },
  {
    "url": "assets/js/27.db7e594b.js",
    "revision": "5950ee3b7cdb7e6edd1e58c148c31466"
  },
  {
    "url": "assets/js/28.19301fb2.js",
    "revision": "12e28449332e520b01649cb4905f168b"
  },
  {
    "url": "assets/js/29.b34980b6.js",
    "revision": "c670a807083937e96821ec3f65d57854"
  },
  {
    "url": "assets/js/3.f34f841a.js",
    "revision": "fd4d50b90feabf4821252f27f5189f78"
  },
  {
    "url": "assets/js/30.431d3274.js",
    "revision": "3a8f0286ef45974552bf3ec8f6380e30"
  },
  {
    "url": "assets/js/31.87542aec.js",
    "revision": "d30ee152c0e286874f504c103399920a"
  },
  {
    "url": "assets/js/32.bc516b6c.js",
    "revision": "d0692628dabceafcee0b857843b02d38"
  },
  {
    "url": "assets/js/33.7bf65c14.js",
    "revision": "9f1ff6134cafa91fd16a98b8d5edde0a"
  },
  {
    "url": "assets/js/34.9793ffc0.js",
    "revision": "e19e797e9562dbf3305f3dd17129d4ef"
  },
  {
    "url": "assets/js/35.484723ab.js",
    "revision": "9e858202c2375a8bf99e05af7ae28875"
  },
  {
    "url": "assets/js/36.41c00775.js",
    "revision": "a06872fa327142414bacdbed1e2e7833"
  },
  {
    "url": "assets/js/37.15b1c9d2.js",
    "revision": "4a0ff8f60bc542c8ff5787bdd46beae3"
  },
  {
    "url": "assets/js/38.5aa2907b.js",
    "revision": "8843ff5af420765adff7c14fcdc9d899"
  },
  {
    "url": "assets/js/39.7a0d2d11.js",
    "revision": "da1aadb9dd50153b7487e303377097bf"
  },
  {
    "url": "assets/js/4.80150299.js",
    "revision": "33ad069eed7f39b3a7287fb47cb5b5e0"
  },
  {
    "url": "assets/js/40.f02ea3c1.js",
    "revision": "c728e58efc1694aab68cc81e7ed7f274"
  },
  {
    "url": "assets/js/5.15362833.js",
    "revision": "750e93d13516d9d6f6eaa6d1a5e031d3"
  },
  {
    "url": "assets/js/6.698b4a0a.js",
    "revision": "b04e8eac711e7c15f85516012ea368f3"
  },
  {
    "url": "assets/js/7.8cc03cd5.js",
    "revision": "891af6d1d8f969518727dfbde725bb83"
  },
  {
    "url": "assets/js/8.fba9a4fd.js",
    "revision": "dc870e17fc511cda1e8c546a71a964d7"
  },
  {
    "url": "assets/js/9.888174df.js",
    "revision": "405cdf69e3a71c72546046fb1e5b5b4c"
  },
  {
    "url": "assets/js/app.dd1510b3.js",
    "revision": "fe1448d2b5e01564fe6d1967ec209552"
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
    "revision": "ac69e729bd4b3ded1665267d7582e36c"
  },
  {
    "url": "Bug/index.html",
    "revision": "cec9c56712a2dd1b550287d9beabe379"
  },
  {
    "url": "categories/index.html",
    "revision": "fb6cb2c4c5fb51b22110bdf8494a640f"
  },
  {
    "url": "dog.jpg",
    "revision": "d3fc3601376d8749b1fa849444ee6158"
  },
  {
    "url": "GIT/index.html",
    "revision": "f3ac71033ce08378d39b3428b94e9018"
  },
  {
    "url": "index.html",
    "revision": "456c93852a3718b75d993ec27a664dd2"
  },
  {
    "url": "JSCode/index.html",
    "revision": "19f56c52d2dca2e47e1e5916225bb1d1"
  },
  {
    "url": "Others/index.html",
    "revision": "c679446fd2674c0396b2c7bb31f70a40"
  },
  {
    "url": "SQL/aa_introduce.html",
    "revision": "5b58a32a93a3fcfaa6b67e8ffad35641"
  },
  {
    "url": "SQL/ab_select.html",
    "revision": "9e7ede1f64cc9af99bc35af97f83a342"
  },
  {
    "url": "SQL/ac_distinct.html",
    "revision": "2f550ca79249e33ab1d5bb129818c307"
  },
  {
    "url": "SQL/ad_where.html",
    "revision": "0793ee404b5dc88f2614820177e892b8"
  },
  {
    "url": "SQL/ae_insert_into.html",
    "revision": "b79c3b6b1fd145bc8a0655c9a263b6ff"
  },
  {
    "url": "SQL/af_update.html",
    "revision": "7fc7eb87a3eeeed065035eea2afca6a5"
  },
  {
    "url": "SQL/ag_delete.html",
    "revision": "1a3300b5ff8df649f7494946496d39cb"
  },
  {
    "url": "SQL/ah_and_or_not.html",
    "revision": "64ad2c742ee59e839b469a9386543810"
  },
  {
    "url": "SQL/ai_in.html",
    "revision": "3f7fe0134059c60ee5f406cd53cee614"
  },
  {
    "url": "SQL/aj_bewteen_and.html",
    "revision": "65bee02d05816d2f905bd33031e6a9c0"
  },
  {
    "url": "SQL/al_like.html",
    "revision": "8dcc7271820a7130597e7b3418720374"
  },
  {
    "url": "SQL/am_order_by.html",
    "revision": "e562727c3b6a19f2cf59d48bcd66adda"
  },
  {
    "url": "SQL/an_limit.html",
    "revision": "56ddb67f5473b1bdbfd36a2e66503970"
  },
  {
    "url": "SQL/ao_avg.html",
    "revision": "4192612efea2e34446abfca216ad3b9e"
  },
  {
    "url": "SQL/ap_time.html",
    "revision": "3a2574cff6eedbf78a58f4a8fcb3d9df"
  },
  {
    "url": "SQL/aq_notnull.html",
    "revision": "80da9659d9ec225424bfee5ea62a66ec"
  },
  {
    "url": "SQL/ar_join.html",
    "revision": "d443e26525cf2c883d2115a65123502b"
  },
  {
    "url": "SQL/as_group.html",
    "revision": "48451fde75eee8e84cd5cbfb716a5104"
  },
  {
    "url": "SQL/at_often.html",
    "revision": "61a71c0fc6d8c905f21a5fe2aa190604"
  },
  {
    "url": "SQL/index.html",
    "revision": "c82d43cc1450c6cbc4799f687c9270bf"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2402499f09a0adb886adf9216c06fd14"
  },
  {
    "url": "tag/index.html",
    "revision": "f25ad3cccc833531d4d6bf92ecb0f63f"
  },
  {
    "url": "tag/JSCode/index.html",
    "revision": "9605a14433748a9f48e2917e91fdf9c5"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "4feb87af1e5a473266d4ed3febc3e1b4"
  },
  {
    "url": "tag/SQL/page/2/index.html",
    "revision": "8168c29d2ddbe9d01eb7ba88c6b4c664"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "75647adda7bbec4b4eaf3b0dc00b0e79"
  },
  {
    "url": "timeline/index.html",
    "revision": "c9523cad29b1c3fd8156dbc893eed332"
  },
  {
    "url": "Vue/aa_introduce.html",
    "revision": "545c24843b2bfe579f93e23fd72de48e"
  },
  {
    "url": "Vue/ab.html",
    "revision": "28f95a1f892c91bf4da672a3b3078d52"
  },
  {
    "url": "Vue/index.html",
    "revision": "ce454e2360b82e6cd05d87eeebfd9544"
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
