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
    "revision": "743f1a04188211390370099080b1fc18"
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
    "url": "assets/js/11.6704cf35.js",
    "revision": "5f4dd71bc07303ae3f80b50446e34d4d"
  },
  {
    "url": "assets/js/12.ecfa7522.js",
    "revision": "f22f1391698a1d39b9a3ae5fe8d9a5be"
  },
  {
    "url": "assets/js/13.de1de04f.js",
    "revision": "4703234539f70bf393cdacbf906b086a"
  },
  {
    "url": "assets/js/14.5b48681d.js",
    "revision": "d7b7390e10f51f566eb9d411b92ee509"
  },
  {
    "url": "assets/js/15.f3ced232.js",
    "revision": "d4bd0b18d141e83e738de20032ceff13"
  },
  {
    "url": "assets/js/16.948d6240.js",
    "revision": "403b384281cd52113eded8fa38c9af9c"
  },
  {
    "url": "assets/js/17.8a9da951.js",
    "revision": "249e8fa999ef138e1190d0399db7059f"
  },
  {
    "url": "assets/js/18.2e4f319f.js",
    "revision": "5b32f4e156954993bb01c49387caded8"
  },
  {
    "url": "assets/js/19.97a99269.js",
    "revision": "cdd85111651478dcb208b04745ab1d2c"
  },
  {
    "url": "assets/js/20.6c5853fb.js",
    "revision": "35fe4af5f02764edcf394ddf53f253d3"
  },
  {
    "url": "assets/js/21.72466cd6.js",
    "revision": "ba0780c515bb6feaf3194cb9f66362c4"
  },
  {
    "url": "assets/js/22.1f47d5fd.js",
    "revision": "971f6bafb67b729935453c4551ec5785"
  },
  {
    "url": "assets/js/23.76d406b4.js",
    "revision": "c8f3f08bf296e3a212902c5db062de31"
  },
  {
    "url": "assets/js/24.b87d4564.js",
    "revision": "f7543224d4f4de7aa51677927bf65d72"
  },
  {
    "url": "assets/js/25.2dc22963.js",
    "revision": "43a9c8cc2718d6c15e1c96bff088ce8c"
  },
  {
    "url": "assets/js/26.208acddb.js",
    "revision": "aa35a497dc2a2bb6dae5db68d62ba63e"
  },
  {
    "url": "assets/js/27.4c8e2d5e.js",
    "revision": "60cd84b688d34a547e43b1c188f2cdd7"
  },
  {
    "url": "assets/js/28.75d39be2.js",
    "revision": "9c6c47c0a460e10428dc97221437aaf3"
  },
  {
    "url": "assets/js/29.0ea3e66f.js",
    "revision": "44bd2434e1ec18a8a80b4169783c1571"
  },
  {
    "url": "assets/js/3.f34f841a.js",
    "revision": "fd4d50b90feabf4821252f27f5189f78"
  },
  {
    "url": "assets/js/30.1637e086.js",
    "revision": "141da8c9d28c30615756e24e4eb155b8"
  },
  {
    "url": "assets/js/31.cca8ccc9.js",
    "revision": "bf2a93c876e62431b1d1673dcc42df7e"
  },
  {
    "url": "assets/js/32.6ff04201.js",
    "revision": "03deac6b45127c07ac8bcb8862bd0ee6"
  },
  {
    "url": "assets/js/33.c1def9b3.js",
    "revision": "334303a9a89189e73940d5abbcfb9110"
  },
  {
    "url": "assets/js/34.bc3c61b7.js",
    "revision": "a27ad696c0930d67956fff5a620e6b6f"
  },
  {
    "url": "assets/js/35.b91b8ce0.js",
    "revision": "4c39474006b038e5ca41be2484b9924a"
  },
  {
    "url": "assets/js/36.30a5bf9d.js",
    "revision": "7c0f47c5175a797337cbdfb3e599737b"
  },
  {
    "url": "assets/js/37.580600e0.js",
    "revision": "a41b2dd9884be5b3e133137ef954d53e"
  },
  {
    "url": "assets/js/38.1986be5f.js",
    "revision": "8993fdba83df382513e385e4fb51be3b"
  },
  {
    "url": "assets/js/39.ba21f634.js",
    "revision": "867ebbf2962ac97898b384d2f3f7ac1d"
  },
  {
    "url": "assets/js/4.80150299.js",
    "revision": "33ad069eed7f39b3a7287fb47cb5b5e0"
  },
  {
    "url": "assets/js/40.6c0012ac.js",
    "revision": "06f41ce73f9f2a0d09438aa5ac1abef7"
  },
  {
    "url": "assets/js/41.9d773efa.js",
    "revision": "72c089e849047db710eb76af6f83c93b"
  },
  {
    "url": "assets/js/42.145b62cf.js",
    "revision": "685fab926bc92e089d08374973edc41e"
  },
  {
    "url": "assets/js/43.592208a9.js",
    "revision": "a6c7afd690d407275747d4f6a8ba205e"
  },
  {
    "url": "assets/js/44.3f7a50df.js",
    "revision": "0902cf17679d468069873e73ed34ce0e"
  },
  {
    "url": "assets/js/45.b0fc6312.js",
    "revision": "47b205ef0d4472604156e8c4ffc460dc"
  },
  {
    "url": "assets/js/46.2a1b7245.js",
    "revision": "0c50353c0e2f783357c9b3945af0206e"
  },
  {
    "url": "assets/js/47.bd3a3f42.js",
    "revision": "85254faa21141a68ee2a9488bd813ba9"
  },
  {
    "url": "assets/js/48.c50d6003.js",
    "revision": "5d07aa2846ce95e369bc6313dabc8712"
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
    "url": "assets/js/8.dda8a44b.js",
    "revision": "17fe1d97aecfd07cfdf975f36126663e"
  },
  {
    "url": "assets/js/9.5a3dbc05.js",
    "revision": "5f4397bb07f2ec5440b4085c7ea2c968"
  },
  {
    "url": "assets/js/app.f430d331.js",
    "revision": "9278b52dd5da2b8b687ed2d0ff8656ff"
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
    "revision": "c12a371c849e9563ec13b8034c79a575"
  },
  {
    "url": "Bug/index.html",
    "revision": "c46c11c7036e3c292e871b9b5430ec3c"
  },
  {
    "url": "categories/index.html",
    "revision": "5e563fefdcea4d9db4dd1c0b65ed4185"
  },
  {
    "url": "dog.jpg",
    "revision": "d3fc3601376d8749b1fa849444ee6158"
  },
  {
    "url": "GIT/index.html",
    "revision": "4366a8922172b964e8aa5f8f78e8b0b5"
  },
  {
    "url": "index.html",
    "revision": "1f2d1ea4b7a8ab1f03b2261ae5ca1e28"
  },
  {
    "url": "Mini/firstMP.html",
    "revision": "a8f962cfae6af2514cae2de85925aa88"
  },
  {
    "url": "Mini/index.html",
    "revision": "0cedb5056a8c80b2180e801921e67fc1"
  },
  {
    "url": "Mini/introduce.html",
    "revision": "5bb0ef6be8ecc79a9428dc0722c021cd"
  },
  {
    "url": "NonTechnical/index.html",
    "revision": "3189a1df6b2f7e7f7706b478e4261ec2"
  },
  {
    "url": "React/index.html",
    "revision": "069468baeae3900ccf5ffb835e60d696"
  },
  {
    "url": "React/test01.html",
    "revision": "cc9ec9ce9dba9f7c7c109fd232356d63"
  },
  {
    "url": "React/test02.html",
    "revision": "ba2dda2e0b2a802a93fe95236310644b"
  },
  {
    "url": "SQL/aa_introduce.html",
    "revision": "b97130ef191f7c065f210732ef34081a"
  },
  {
    "url": "SQL/ab_select.html",
    "revision": "ad192a470f2de399bd9496c4cb719c7c"
  },
  {
    "url": "SQL/ac_distinct.html",
    "revision": "17697a0be8f4954fbe6e39389c33ce80"
  },
  {
    "url": "SQL/ad_where.html",
    "revision": "9264e2d1f7fbeeebe098d225c0df4207"
  },
  {
    "url": "SQL/ae_insert_into.html",
    "revision": "c4973adf5ab6565634520847ee2e08ce"
  },
  {
    "url": "SQL/af_update.html",
    "revision": "10ea9e3d8e4627e8f705d3716fa1f05c"
  },
  {
    "url": "SQL/ag_delete.html",
    "revision": "6697bfeb6c7a0b913fe0dd8f1a272f6d"
  },
  {
    "url": "SQL/ah_and_or_not.html",
    "revision": "25e1fe5414e2fd3686cce9593e688292"
  },
  {
    "url": "SQL/ai_in.html",
    "revision": "d4e2929aabeb2163f17d382fe7b1d3d8"
  },
  {
    "url": "SQL/aj_bewteen_and.html",
    "revision": "f45279484515b80de0d25eaf5182f84f"
  },
  {
    "url": "SQL/al_like.html",
    "revision": "2bd8ea7c3afc6fecc0a1f09a617574e8"
  },
  {
    "url": "SQL/am_order_by.html",
    "revision": "1536e9fd133c23173975f000af9de127"
  },
  {
    "url": "SQL/an_limit.html",
    "revision": "e4de378942ed852d320d07044fcfcd48"
  },
  {
    "url": "SQL/ao_avg.html",
    "revision": "3090597e6529f58ef3069a6798f33635"
  },
  {
    "url": "SQL/ap_time.html",
    "revision": "8f7fef6967bfc2d2c4bc1dda56125863"
  },
  {
    "url": "SQL/aq_notnull.html",
    "revision": "d1534413ef3cdf248d17586af5f2066c"
  },
  {
    "url": "SQL/ar_join.html",
    "revision": "333709fe7814b9a64d36a67375c71e05"
  },
  {
    "url": "SQL/as_group.html",
    "revision": "1336ae46732d6c9abd8f3128dbfdba1c"
  },
  {
    "url": "SQL/at_often.html",
    "revision": "8d6a24af2abe0414b1877f20ff86e164"
  },
  {
    "url": "SQL/index.html",
    "revision": "1beeb42bcd0ed4f9cfde1f4baa225df2"
  },
  {
    "url": "tag/and/index.html",
    "revision": "2ffec5a7d6c469a2a6d26a9d74b2e4cc"
  },
  {
    "url": "tag/avg/index.html",
    "revision": "c574c71ad9a7ca896d1551f03215a918"
  },
  {
    "url": "tag/between/index.html",
    "revision": "794795352064ad2f9d0bbfcecb139b83"
  },
  {
    "url": "tag/count/index.html",
    "revision": "79b2731ccad9712fdb4f6c5c00181e2d"
  },
  {
    "url": "tag/delete/index.html",
    "revision": "2cb5289c10e9d27aa0e7d89e3e2eee8d"
  },
  {
    "url": "tag/distinct/index.html",
    "revision": "dfbf882e58d3fff5b4cb748a38a9ae57"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6a6fece5ea4a35d9456e5de3436a17d9"
  },
  {
    "url": "tag/ifnull/index.html",
    "revision": "401c3e31a74327212fbb6290c1e61376"
  },
  {
    "url": "tag/in/index.html",
    "revision": "34ca6044f0cc6860ab6e76acfcc82d32"
  },
  {
    "url": "tag/index.html",
    "revision": "39a89b67e0a73d305d3c887248e494f7"
  },
  {
    "url": "tag/insert into/index.html",
    "revision": "987e38d006c8dd068514a5cdd9aec19d"
  },
  {
    "url": "tag/isnull/index.html",
    "revision": "e5dd9bf02b54c0858658eb06773e5531"
  },
  {
    "url": "tag/like/index.html",
    "revision": "1146dc0008a89313c72285bfcb18d578"
  },
  {
    "url": "tag/limit/index.html",
    "revision": "0b1b614e287b906e5f91c6968b272f97"
  },
  {
    "url": "tag/max/index.html",
    "revision": "6e38343bf1c7ba8a40d1c94ebf0c652d"
  },
  {
    "url": "tag/min/index.html",
    "revision": "48a44f54d1debe34fe975a230a86934b"
  },
  {
    "url": "tag/not/index.html",
    "revision": "fb4babe69b9de1862ea3d45020359f1a"
  },
  {
    "url": "tag/or/index.html",
    "revision": "eb9fe9466f8d0c47e1b172bf11a38be5"
  },
  {
    "url": "tag/order by/index.html",
    "revision": "eae95ebfe8f4f25136b44925858c70d0"
  },
  {
    "url": "tag/round/index.html",
    "revision": "ed37ba4f6ffbe6179ec49bb97f167d69"
  },
  {
    "url": "tag/select/index.html",
    "revision": "5357b0deba5853f24086c169f07e3a18"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "023700192acce9999f35850ba2dc3df1"
  },
  {
    "url": "tag/SQL/page/2/index.html",
    "revision": "22569faecd3bc0398fd8a047c2ffcf97"
  },
  {
    "url": "tag/sum/index.html",
    "revision": "44cd24d5ecd1ea616946df2e5a50b5f5"
  },
  {
    "url": "tag/update/index.html",
    "revision": "6ddeb662e029292f0c916ed53c12b0b8"
  },
  {
    "url": "tag/where/index.html",
    "revision": "7e4b512f0551d6166449835bd903b44e"
  },
  {
    "url": "tag/分组/index.html",
    "revision": "7e9bd938cc81509b3d15a5715ff0fbd1"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "55dd8bc2e6405e6a7be671a1d4221949"
  },
  {
    "url": "tag/常用命令/index.html",
    "revision": "21c19d6a9c5572bbdc3ea2d41a16f679"
  },
  {
    "url": "tag/时间函数/index.html",
    "revision": "660bea3b45987d1206be15e796d468a9"
  },
  {
    "url": "tag/环境配置/index.html",
    "revision": "e2021f5b9752d844ea40885a72296c12"
  },
  {
    "url": "tag/约束/index.html",
    "revision": "79c6aed64ca4f273874faec3acbf6036"
  },
  {
    "url": "tag/联结/index.html",
    "revision": "e981ebe3902ad29e6d4e704457e14699"
  },
  {
    "url": "timeline/index.html",
    "revision": "6fc7509faaf4586b46ffe9758fdf2f1e"
  },
  {
    "url": "Vue/index.html",
    "revision": "9a652617dbf39ef9a6c868a0961e3be3"
  },
  {
    "url": "Vue/test01.html",
    "revision": "aa8128a5260103553837350637a845d8"
  },
  {
    "url": "Vue/Vuemd.html",
    "revision": "2203c0c50d8438941ea59635e58bf30c"
  },
  {
    "url": "Webpack/index.html",
    "revision": "d99d512c3404a9c6c874833d23dae8da"
  },
  {
    "url": "Webpack/jichu.html",
    "revision": "95f84fc1651249ea11facc9ed5520073"
  },
  {
    "url": "Webpack/jinji.html",
    "revision": "5dcefa233fb6f6143a2111353b30a418"
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
