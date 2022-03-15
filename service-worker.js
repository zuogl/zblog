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
    "revision": "ace6e030a5cde7a5ec96605c39c22d6f"
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
    "url": "assets/img/01.6c5ab54d.png",
    "revision": "6c5ab54dc01fae1a52fe5b4f6bd285be"
  },
  {
    "url": "assets/img/01.88aa19e8.jpg",
    "revision": "88aa19e894cc4fccf2c24477b8c4138c"
  },
  {
    "url": "assets/img/02.0da5d3af.png",
    "revision": "0da5d3af66190a5ca141f88e0d4e802d"
  },
  {
    "url": "assets/img/03.9b43a30d.png",
    "revision": "9b43a30dbe96e549834fad2afb788cc3"
  },
  {
    "url": "assets/img/04.e08ca8fc.png",
    "revision": "e08ca8fc3949019df4fe47ec947b678a"
  },
  {
    "url": "assets/img/05.2e646c86.png",
    "revision": "2e646c86a46a83056a5521726f73cc76"
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
    "url": "assets/js/1.b1e3c327.js",
    "revision": "b85ad7cb66f1b6ec39ff1d866d45de2f"
  },
  {
    "url": "assets/js/10.38bac566.js",
    "revision": "4be6af8a87d57dc3f427ef8d94ee7ac6"
  },
  {
    "url": "assets/js/11.726c50b5.js",
    "revision": "4aa075a41c8e702ec8ca5b87e7f5a4cd"
  },
  {
    "url": "assets/js/12.8b7da823.js",
    "revision": "e1443986750a99f606d4ecef0379d99a"
  },
  {
    "url": "assets/js/13.da452240.js",
    "revision": "4d970b14955e1c00f3a38d72a0482e73"
  },
  {
    "url": "assets/js/14.543da6e4.js",
    "revision": "4e15e7d72c21443e3b78c66680132d34"
  },
  {
    "url": "assets/js/15.f3ced232.js",
    "revision": "d4bd0b18d141e83e738de20032ceff13"
  },
  {
    "url": "assets/js/16.b4b91acb.js",
    "revision": "b94c33eb0de31433e558556f03174d3a"
  },
  {
    "url": "assets/js/17.fa68dd54.js",
    "revision": "4eaa53dfb9bf454b0999c4c54d1540ad"
  },
  {
    "url": "assets/js/18.af4b680a.js",
    "revision": "8fae8d38a8ffb07809c1b82e35f8beb9"
  },
  {
    "url": "assets/js/19.617a3832.js",
    "revision": "e95164e7b2cb7649e913df38073619de"
  },
  {
    "url": "assets/js/20.e1a19994.js",
    "revision": "3b1345cc2cec3f1b862fe419292a272d"
  },
  {
    "url": "assets/js/21.55756a10.js",
    "revision": "87520461294ef362a17e4b3803784adf"
  },
  {
    "url": "assets/js/22.63025924.js",
    "revision": "a92ce8f294ae3182db732e28d05caf5a"
  },
  {
    "url": "assets/js/23.4a7294b5.js",
    "revision": "f18a49a2a648380c6b85eb9dccf6ed36"
  },
  {
    "url": "assets/js/24.418f5c65.js",
    "revision": "74dcdf8369d278a5fe6b5aa205dc8fdb"
  },
  {
    "url": "assets/js/25.61f9b899.js",
    "revision": "b6db43698d229157bf0615f2c91fe3d1"
  },
  {
    "url": "assets/js/26.7605cbd2.js",
    "revision": "4a7b818c20d4f646dc2cc7eca4c14a57"
  },
  {
    "url": "assets/js/27.008262ab.js",
    "revision": "51d914ddb02b4af21d229295a0528ca8"
  },
  {
    "url": "assets/js/28.12187972.js",
    "revision": "48fae343b9c0aeef73660358c0290c7f"
  },
  {
    "url": "assets/js/29.87a869e4.js",
    "revision": "723fff1d9374120200dd0383e97561a8"
  },
  {
    "url": "assets/js/3.f34f841a.js",
    "revision": "fd4d50b90feabf4821252f27f5189f78"
  },
  {
    "url": "assets/js/30.6602a44e.js",
    "revision": "ba9dff0a852b679fcafdcfb0b63dfae6"
  },
  {
    "url": "assets/js/31.60e63587.js",
    "revision": "484071f3331fe7bc81c543cbbb8ed202"
  },
  {
    "url": "assets/js/32.74cd141b.js",
    "revision": "8cf661639d868453dbe17482b92ad058"
  },
  {
    "url": "assets/js/33.e828967e.js",
    "revision": "878919d3e774b0d3f8ef4e413f97bc36"
  },
  {
    "url": "assets/js/34.888268f7.js",
    "revision": "76d6473be91d94a787fa5d48a7452cbe"
  },
  {
    "url": "assets/js/35.8f11b0f6.js",
    "revision": "4eea2acdf8162b81f28149239493d769"
  },
  {
    "url": "assets/js/36.473a4377.js",
    "revision": "cf9702dfe387e84cb7df9f67c1550437"
  },
  {
    "url": "assets/js/37.2f5182b8.js",
    "revision": "4192a2c00382eb9e1136da29c8d41260"
  },
  {
    "url": "assets/js/38.11e5cf4d.js",
    "revision": "b627feb853d7f4fc511efcf1c39d3700"
  },
  {
    "url": "assets/js/39.017403a2.js",
    "revision": "fbc6e76a927d2f0c03e68438c785d736"
  },
  {
    "url": "assets/js/4.80150299.js",
    "revision": "33ad069eed7f39b3a7287fb47cb5b5e0"
  },
  {
    "url": "assets/js/40.47d0ec6c.js",
    "revision": "811caddff1b0dfd2ec28ca64c4b2213f"
  },
  {
    "url": "assets/js/41.2fb5b5f7.js",
    "revision": "daa39aba87bea97b7df00a18d308538d"
  },
  {
    "url": "assets/js/42.2b2899dc.js",
    "revision": "1616b847d9f8b9ae40f71ffa33eee678"
  },
  {
    "url": "assets/js/43.7e20e5f6.js",
    "revision": "c4684bbd602c35a089b5e85d3d42b03e"
  },
  {
    "url": "assets/js/44.36f34b4f.js",
    "revision": "696aab996b5ed25028b52cde29b72403"
  },
  {
    "url": "assets/js/45.082ebb15.js",
    "revision": "f80c96c06afad86d521a2532abf65a0c"
  },
  {
    "url": "assets/js/46.1775cffc.js",
    "revision": "f147dc0b2c9f2ae92a6d929e84a4d159"
  },
  {
    "url": "assets/js/47.7020b31e.js",
    "revision": "1df497842fff896963f36b14ab234c08"
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
    "url": "assets/js/8.f0b17bc0.js",
    "revision": "5a424b3938e677743d18abedc6f5eaeb"
  },
  {
    "url": "assets/js/9.5a3dbc05.js",
    "revision": "5f4397bb07f2ec5440b4085c7ea2c968"
  },
  {
    "url": "assets/js/app.6f6193ac.js",
    "revision": "9ef78094f77c09bb7ee47a4689d24fbd"
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
    "revision": "27e96cc46f27236311203313b175023c"
  },
  {
    "url": "Bug/index.html",
    "revision": "f279c020cc2768bfd8b002d1eacb7b29"
  },
  {
    "url": "categories/index.html",
    "revision": "b79c5bb8fa95230a9c9290aa5291c9b4"
  },
  {
    "url": "dog.jpg",
    "revision": "d3fc3601376d8749b1fa849444ee6158"
  },
  {
    "url": "index.html",
    "revision": "fd20556f34da0fefedda5831f8aa30ce"
  },
  {
    "url": "Mini/firstMP.html",
    "revision": "6b03df753b81910d65777ffb1876b3ee"
  },
  {
    "url": "Mini/index.html",
    "revision": "7f3cd743f13dea8630e1ad8c067e3426"
  },
  {
    "url": "Mini/introduce.html",
    "revision": "b028b287d20e18b27717c9e7fd3eb84e"
  },
  {
    "url": "NonTechnical/index.html",
    "revision": "e9ee233dd793af60416ef5ba8bbf6ee8"
  },
  {
    "url": "React/index.html",
    "revision": "5cb3dac9cc660538793ec7581c76d9fe"
  },
  {
    "url": "React/test01.html",
    "revision": "ceb58bb3cef9dd8deef177e595f46c87"
  },
  {
    "url": "React/test02.html",
    "revision": "0bd5ab74b7c71094c838f599fae869ff"
  },
  {
    "url": "SQL/aa_introduce.html",
    "revision": "38e6da50680060b334a37fac34d9a3b7"
  },
  {
    "url": "SQL/ab_select.html",
    "revision": "bf63a8b8574dab8760b4d81f36f17700"
  },
  {
    "url": "SQL/ac_distinct.html",
    "revision": "9473a8a3546fbd2e491665089265e741"
  },
  {
    "url": "SQL/ad_where.html",
    "revision": "abdf1dde7ee64e1aae105ccb854d64a3"
  },
  {
    "url": "SQL/ae_insert_into.html",
    "revision": "313a8849766be642e3c9277d4680d7f6"
  },
  {
    "url": "SQL/af_update.html",
    "revision": "add441f61405dbd7f9db019dda3984a5"
  },
  {
    "url": "SQL/ag_delete.html",
    "revision": "6bc16d9dd97ea597ee1b34fe41dfd32a"
  },
  {
    "url": "SQL/ah_and_or_not.html",
    "revision": "57e6b1723580d3dc59c35cbf3ab3b8f0"
  },
  {
    "url": "SQL/ai_in.html",
    "revision": "b90cf926a8fb22eb50456644d6a9f60e"
  },
  {
    "url": "SQL/aj_bewteen_and.html",
    "revision": "7a2e5df76c2546c2707b7b90d251ea33"
  },
  {
    "url": "SQL/al_like.html",
    "revision": "a9b8e392e9188110550dd5a64225d12f"
  },
  {
    "url": "SQL/am_order_by.html",
    "revision": "6922d5d14bf0f45f1be33950ace554db"
  },
  {
    "url": "SQL/an_limit.html",
    "revision": "ac54421e66175719a04ae81585740f89"
  },
  {
    "url": "SQL/ao_avg.html",
    "revision": "be5dc798cb3f4380085bbf1127abc4b1"
  },
  {
    "url": "SQL/ap_time.html",
    "revision": "f6d999883a76b96e986467de228d6003"
  },
  {
    "url": "SQL/aq_notnull.html",
    "revision": "048e99351987abd83380520c264c0207"
  },
  {
    "url": "SQL/ar_join.html",
    "revision": "512eb4d3c58280dad440005b4e44b09d"
  },
  {
    "url": "SQL/as_group.html",
    "revision": "df8a26b9b7a261e5f2e051068ce39697"
  },
  {
    "url": "SQL/at_often.html",
    "revision": "32b3b802bea6565079a55511513c2a89"
  },
  {
    "url": "SQL/index.html",
    "revision": "d2cc52f0875e4cfde0bbc0f9fb69f420"
  },
  {
    "url": "tag/and/index.html",
    "revision": "3c1280af29f6807f7762d7b197d53bdd"
  },
  {
    "url": "tag/avg/index.html",
    "revision": "cb9619d26c729c8e26653576b793cb0b"
  },
  {
    "url": "tag/between/index.html",
    "revision": "48a9d104ab39219cf6aeeec58b185d88"
  },
  {
    "url": "tag/count/index.html",
    "revision": "6aee53e9831c349a8dd9de0997e3562b"
  },
  {
    "url": "tag/delete/index.html",
    "revision": "82051133c566ed05b180136f229017d1"
  },
  {
    "url": "tag/distinct/index.html",
    "revision": "f3f3d25504228fe6677e31e8950beffa"
  },
  {
    "url": "tag/git/index.html",
    "revision": "968652ee5c6f19fd8dffeea33fa31d28"
  },
  {
    "url": "tag/ifnull/index.html",
    "revision": "1c400e86712837d79a99e3b324dd9738"
  },
  {
    "url": "tag/in/index.html",
    "revision": "5095596a36643e1af1934c956d6e8030"
  },
  {
    "url": "tag/index.html",
    "revision": "00a61163a45008e4679ce92b7dee5dca"
  },
  {
    "url": "tag/insert into/index.html",
    "revision": "69d740f7d475fc5932bb0955ca46e4d9"
  },
  {
    "url": "tag/isnull/index.html",
    "revision": "18e74f1feea4810828d298660c602999"
  },
  {
    "url": "tag/like/index.html",
    "revision": "38474de94e81eca0230289b200f04593"
  },
  {
    "url": "tag/limit/index.html",
    "revision": "f00ed58daaeaffb654137f7b266483a6"
  },
  {
    "url": "tag/max/index.html",
    "revision": "b02ac3bd5fd037339479d19cc474aaab"
  },
  {
    "url": "tag/min/index.html",
    "revision": "e076ef424b6d0f27c99ecaa6b8cc2557"
  },
  {
    "url": "tag/not/index.html",
    "revision": "2d65a5d00528ef5775d2d34f6448e6c7"
  },
  {
    "url": "tag/or/index.html",
    "revision": "02e96f5a7599f8dc788c4f25f3c34adf"
  },
  {
    "url": "tag/order by/index.html",
    "revision": "8bcf45e7f58d4a84d3a48e533d09626d"
  },
  {
    "url": "tag/round/index.html",
    "revision": "a1ed115164d7445d08d5186c6b8c913c"
  },
  {
    "url": "tag/select/index.html",
    "revision": "fefee3b45e230b3e049566ec11e4028b"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "e0197f4a5e006f50d8ffde564c234316"
  },
  {
    "url": "tag/SQL/page/2/index.html",
    "revision": "5ba1e174b8e68c65ad2aed026a4c1612"
  },
  {
    "url": "tag/sum/index.html",
    "revision": "ec6d0c884b3f58e9df3a389d88c8ada7"
  },
  {
    "url": "tag/update/index.html",
    "revision": "2465b9a998bd7a8a8a6d7d818852d99e"
  },
  {
    "url": "tag/where/index.html",
    "revision": "0145cabfe6e6001ccbe98d3d792c87a7"
  },
  {
    "url": "tag/分组/index.html",
    "revision": "8d09e82f2242c60d75d6d8a91de73b40"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "3e1deb8488c366c1dca961b1650302f0"
  },
  {
    "url": "tag/常用命令/index.html",
    "revision": "9decc4bbdceeb32478610ab20427115f"
  },
  {
    "url": "tag/时间函数/index.html",
    "revision": "639bc16026ffebf70f3db04c2dc70b1e"
  },
  {
    "url": "tag/环境配置/index.html",
    "revision": "d02dc057c14f200d6f0f76c6326dae18"
  },
  {
    "url": "tag/约束/index.html",
    "revision": "2539a8f0806f443a375740e372fe90e0"
  },
  {
    "url": "tag/联结/index.html",
    "revision": "cda8a6e6ca6e2ccc888014c0a9caef65"
  },
  {
    "url": "timeline/index.html",
    "revision": "f9a7a18794bdc2f6cc3593be877e4598"
  },
  {
    "url": "Vue/index.html",
    "revision": "b1251d4ff0a699da824c3e0e4fbf4025"
  },
  {
    "url": "Vue/test01.html",
    "revision": "fb1b357cfea3359ff369736281e5b233"
  },
  {
    "url": "Vue/Vuemd.html",
    "revision": "0b6045f301968b37675e9ec4d68a1d25"
  },
  {
    "url": "Webpack/index.html",
    "revision": "a3de6f3aa54cdbfeffec057d415d5ea3"
  },
  {
    "url": "Webpack/jichu.html",
    "revision": "0b0b83a60d0a3978158c9be8d03f0ab1"
  },
  {
    "url": "Webpack/jinji.html",
    "revision": "4bdd597edf9a95239f79eb038ac6d78f"
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
