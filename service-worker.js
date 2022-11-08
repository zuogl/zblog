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
    "revision": "3af54130226d5f49cce260bb75dac0bb"
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
    "url": "assets/img/gitUpdate.92f3cbbe.png",
    "revision": "92f3cbbe5db2a6ed9d2595a45f2e023f"
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
    "url": "assets/js/10.f396b6c6.js",
    "revision": "e9d03b8e8717b9b9776983be43d1c193"
  },
  {
    "url": "assets/js/11.bb2c7966.js",
    "revision": "630ee4a77bbfc68cc5893d5f2ff868a0"
  },
  {
    "url": "assets/js/12.83dc219b.js",
    "revision": "bc3047dfbf885e02532511984109e72d"
  },
  {
    "url": "assets/js/13.98224b1b.js",
    "revision": "987cb30f255cfd2ca70c671309466180"
  },
  {
    "url": "assets/js/14.bbc4f9cc.js",
    "revision": "8174e92906b07b155766d758f6ac226d"
  },
  {
    "url": "assets/js/15.2a94d7f7.js",
    "revision": "0c0c9765257908eb011fb6330012a87c"
  },
  {
    "url": "assets/js/16.a4c1be4f.js",
    "revision": "e3320b4a995b932feaebc1a1ad484ac8"
  },
  {
    "url": "assets/js/17.4628a51c.js",
    "revision": "d915c1628753077d24ba8533d6f56ea4"
  },
  {
    "url": "assets/js/18.84a7fffa.js",
    "revision": "cfb708ddae43a343cbdbd15da711548d"
  },
  {
    "url": "assets/js/19.99be5a3f.js",
    "revision": "3441a28526e8ad16002bcea23dc90b47"
  },
  {
    "url": "assets/js/20.dabea0bf.js",
    "revision": "91fd223853c6548519346315fda78102"
  },
  {
    "url": "assets/js/21.b76380b3.js",
    "revision": "abb665fe37d69c94ae024f66858482e9"
  },
  {
    "url": "assets/js/22.17c4205a.js",
    "revision": "bf739717851d231a1ce1f9dbb467fd48"
  },
  {
    "url": "assets/js/23.fb00b6cd.js",
    "revision": "dff1df27861371d2c7d89e5e100874ec"
  },
  {
    "url": "assets/js/24.1e23684e.js",
    "revision": "77b32c593120d2da86008bc18c9179d4"
  },
  {
    "url": "assets/js/25.d81bfdf4.js",
    "revision": "27cef1f4962078ba6d00ffcf700d67e5"
  },
  {
    "url": "assets/js/26.bb59940f.js",
    "revision": "36894f42030bbfda5fdaf72cdcb4c9e0"
  },
  {
    "url": "assets/js/27.4dc8a631.js",
    "revision": "ee0412765b84cf56b2cc095ee0a31f60"
  },
  {
    "url": "assets/js/28.ff4832d9.js",
    "revision": "001b1ddb9fdaf107dd89dd8d24524780"
  },
  {
    "url": "assets/js/29.88112b97.js",
    "revision": "e29384c4c1878cea703040f8bad4d59b"
  },
  {
    "url": "assets/js/3.b6494d21.js",
    "revision": "7230dddf74530dc16663c47d220094b9"
  },
  {
    "url": "assets/js/30.870fd65d.js",
    "revision": "7837b675f90e72a326caca3b9ff2660c"
  },
  {
    "url": "assets/js/31.87542aec.js",
    "revision": "d30ee152c0e286874f504c103399920a"
  },
  {
    "url": "assets/js/32.8345cfa4.js",
    "revision": "1e9efa469e71ceeba8a3a02dae79063c"
  },
  {
    "url": "assets/js/33.4cf57279.js",
    "revision": "197faa9b0ef04e9bb7073f70d1c4cf60"
  },
  {
    "url": "assets/js/34.f19c118c.js",
    "revision": "f13eaa8bf77b61c9ed5e14f163282033"
  },
  {
    "url": "assets/js/35.bbc22170.js",
    "revision": "4f3873bfd99ac5bcdfb08c30611b8f36"
  },
  {
    "url": "assets/js/36.a828a2cd.js",
    "revision": "149396b937b5547a76fda81367473f92"
  },
  {
    "url": "assets/js/37.c5a17af0.js",
    "revision": "33c03e43a5e871e8696a11096fa10502"
  },
  {
    "url": "assets/js/38.5aa2907b.js",
    "revision": "8843ff5af420765adff7c14fcdc9d899"
  },
  {
    "url": "assets/js/39.c0e1fbba.js",
    "revision": "72486794ade2c25c321321b3dbe700e0"
  },
  {
    "url": "assets/js/4.e8f7a26f.js",
    "revision": "a11acb4196d8ad52138b01263317516d"
  },
  {
    "url": "assets/js/40.242e78ea.js",
    "revision": "e944548906a3dc5995908b0bc68c522c"
  },
  {
    "url": "assets/js/5.f5c5dfc3.js",
    "revision": "f1a55d8a36ad7d8ec16386508168168a"
  },
  {
    "url": "assets/js/6.2574d428.js",
    "revision": "673629e1309c3cb4d8b680cfc3e794f1"
  },
  {
    "url": "assets/js/7.336669af.js",
    "revision": "2c07552769b0953db003c949e11a99e6"
  },
  {
    "url": "assets/js/8.4b3cd62b.js",
    "revision": "afa77d8dc146b1b99b1ca361e0a1a9ea"
  },
  {
    "url": "assets/js/9.1a894185.js",
    "revision": "95e3f07bc8ca3fb4e4ebd17386b956c9"
  },
  {
    "url": "assets/js/app.56ffc746.js",
    "revision": "7b0b1ffc8addd714ee6cad88ee442b4f"
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
    "revision": "baab78c3639ee01a55f10bb60a7cf334"
  },
  {
    "url": "Bug/index.html",
    "revision": "475183b449d2d88ba7c86b6b2e4f0968"
  },
  {
    "url": "categories/index.html",
    "revision": "b5eaf56df84a601b89ec61f1dd872513"
  },
  {
    "url": "dog.jpg",
    "revision": "d3fc3601376d8749b1fa849444ee6158"
  },
  {
    "url": "GIT/index.html",
    "revision": "74eb48ef053fd4d6a1510c007a0d2c25"
  },
  {
    "url": "index.html",
    "revision": "3320ab68470ccaa2c6d1a928f3065663"
  },
  {
    "url": "JSCode/index.html",
    "revision": "eda87ce71d3e56af560ed5ade297a09f"
  },
  {
    "url": "Others/index.html",
    "revision": "d565b433b5e9c1d5721b7fc96e8c5fc2"
  },
  {
    "url": "SQL/aa_introduce.html",
    "revision": "55a2d1c349587e75ef04df19a1e37e24"
  },
  {
    "url": "SQL/ab_select.html",
    "revision": "5aa86fb98c5b80925b29a5ae3cfd18a8"
  },
  {
    "url": "SQL/ac_distinct.html",
    "revision": "b623697cdfaf36a37f92b66555bf5732"
  },
  {
    "url": "SQL/ad_where.html",
    "revision": "b78248206d17899799b26d786de01026"
  },
  {
    "url": "SQL/ae_insert_into.html",
    "revision": "ad0aa0b25194108754b136530aaa224c"
  },
  {
    "url": "SQL/af_update.html",
    "revision": "92ab95b12593363ea548c0f68efc67ac"
  },
  {
    "url": "SQL/ag_delete.html",
    "revision": "6ee9ad126671990dc11cc19e616ff8b5"
  },
  {
    "url": "SQL/ah_and_or_not.html",
    "revision": "41e56dd8060f5d5efa302dc31e08305c"
  },
  {
    "url": "SQL/ai_in.html",
    "revision": "2afe0c1175644c123df8e3ef4afda41b"
  },
  {
    "url": "SQL/aj_bewteen_and.html",
    "revision": "5019af94979a868fcdc05897e898ffb5"
  },
  {
    "url": "SQL/al_like.html",
    "revision": "604b30dac015f7bfc5f7a950bf244e52"
  },
  {
    "url": "SQL/am_order_by.html",
    "revision": "7e72e16bc76b3c20e95dd6b22c492a72"
  },
  {
    "url": "SQL/an_limit.html",
    "revision": "67acc24a60c1e8e79e163f46dd7d96f2"
  },
  {
    "url": "SQL/ao_avg.html",
    "revision": "b2a8f2d8084b30c2058f1e9e96ff68f7"
  },
  {
    "url": "SQL/ap_time.html",
    "revision": "8563593051b8c8258f48be62daddbfa2"
  },
  {
    "url": "SQL/aq_notnull.html",
    "revision": "edfd9fe8b95ed0f9313db67d648c7bc6"
  },
  {
    "url": "SQL/ar_join.html",
    "revision": "f65fc2965cf00cba90a4e6f2c918b9c7"
  },
  {
    "url": "SQL/as_group.html",
    "revision": "ef024000dda9c43e55880481c183022b"
  },
  {
    "url": "SQL/at_often.html",
    "revision": "15eceb646c04b3fb781f6ee3b5a3038b"
  },
  {
    "url": "SQL/index.html",
    "revision": "6620356112ac102ad4e599ca627d4794"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6f7f9b3d98e18442425b1be15f8b440a"
  },
  {
    "url": "tag/index.html",
    "revision": "b044e10b7656ca1ae9d29be17df5d302"
  },
  {
    "url": "tag/JSCode/index.html",
    "revision": "d8a3cebfe67e0317c17ca46981384374"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "45ca291c56e6a6d59ac9f18b1fcf012e"
  },
  {
    "url": "tag/SQL/page/2/index.html",
    "revision": "98ca18b0a8373b4294590eb383f17cfd"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "b3237af313e9a606aaf4726fcc3cf433"
  },
  {
    "url": "timeline/index.html",
    "revision": "d7fa23d5f36eb0486cf102a5294dbdc6"
  },
  {
    "url": "Vue/aa_introduce.html",
    "revision": "8dda118e3b91da8afc7541c145d5c823"
  },
  {
    "url": "Vue/ab.html",
    "revision": "6a3243c75f87ae2e17c0a972f9e1d85c"
  },
  {
    "url": "Vue/index.html",
    "revision": "70686431ca0b1037c1ea3534441f19ea"
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
