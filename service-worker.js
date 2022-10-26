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
    "revision": "7e226ca36cd44e6e6a6df741dfde57ad"
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
    "url": "assets/img/01.88aa19e8.jpg",
    "revision": "88aa19e894cc4fccf2c24477b8c4138c"
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
    "url": "assets/js/1.b1e3c327.js",
    "revision": "b85ad7cb66f1b6ec39ff1d866d45de2f"
  },
  {
    "url": "assets/js/10.97011a49.js",
    "revision": "ef02caac73eec0aca37a160915451534"
  },
  {
    "url": "assets/js/11.214714e0.js",
    "revision": "232fa31233d3a47df08e3277316e8cc1"
  },
  {
    "url": "assets/js/12.fa08dbdb.js",
    "revision": "0645427457985b91affed2552f299a95"
  },
  {
    "url": "assets/js/13.b493dc67.js",
    "revision": "262cf039e3be90d2ad3460e50c7cf306"
  },
  {
    "url": "assets/js/14.b0ae25f3.js",
    "revision": "95d3c270e31b279bf27b3f2449b15fd5"
  },
  {
    "url": "assets/js/15.8d5423ef.js",
    "revision": "db3edba02845a2b107a80cbcb917e393"
  },
  {
    "url": "assets/js/16.9b751e25.js",
    "revision": "7eb1792017f0f37469cc92b8a846b2d0"
  },
  {
    "url": "assets/js/17.991ef148.js",
    "revision": "822a65c957e796228f1b60a8172e8523"
  },
  {
    "url": "assets/js/18.bf049e6e.js",
    "revision": "8ada5d2c17e89d5c9fe83c9a752ea8b2"
  },
  {
    "url": "assets/js/19.90c5b0e7.js",
    "revision": "5427087c07cdd668b5dd1ca083edb927"
  },
  {
    "url": "assets/js/20.39a51d05.js",
    "revision": "e181a80ec33314ba126d1e5171720218"
  },
  {
    "url": "assets/js/21.b0c39c98.js",
    "revision": "7c3d6fbe2abbc37a832dbabe960a4d96"
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
    "url": "assets/js/24.e064c580.js",
    "revision": "dc2d9d9b6e6f2a321ccbe8b52f95f820"
  },
  {
    "url": "assets/js/25.8cd6563e.js",
    "revision": "f78a5eea340c887ac4d11df61f2d3f65"
  },
  {
    "url": "assets/js/26.0ebfd383.js",
    "revision": "f7f70b24727ab0dd872c0200c170a4bf"
  },
  {
    "url": "assets/js/27.5745b7ae.js",
    "revision": "68335eca619826195698d31a82aa1ee5"
  },
  {
    "url": "assets/js/28.7ada8213.js",
    "revision": "2b53507d327eee91146c60fc841e11db"
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
    "url": "assets/js/30.a61534da.js",
    "revision": "d85524bb9b9ffc24200247759fbc891e"
  },
  {
    "url": "assets/js/31.59e4a261.js",
    "revision": "3875d3b12e5d04e5f158066867585d1f"
  },
  {
    "url": "assets/js/32.aa06839e.js",
    "revision": "b584b8faec6216ccd6b2fe753ed5f2f0"
  },
  {
    "url": "assets/js/33.de5dd85b.js",
    "revision": "da035416d339acce3c20718ba7c66c0b"
  },
  {
    "url": "assets/js/34.f4529fa8.js",
    "revision": "5f0ce3c1a63cfa6f513cc6b70b4d0ada"
  },
  {
    "url": "assets/js/35.1c9ca647.js",
    "revision": "3cd72bedaa3b1b7751e5630480684ddb"
  },
  {
    "url": "assets/js/36.f50efa57.js",
    "revision": "613b28fb45b2e986e053e457fae2cc9c"
  },
  {
    "url": "assets/js/37.eb689397.js",
    "revision": "2be74af0de98d4e78eab5a353ec5df70"
  },
  {
    "url": "assets/js/38.c86111a9.js",
    "revision": "dce231c54c3ecab9bce730bc0386a9ae"
  },
  {
    "url": "assets/js/39.74a8127b.js",
    "revision": "a00397a09797b8d8d8f718f3f725adbc"
  },
  {
    "url": "assets/js/4.5425a346.js",
    "revision": "c84f87c4572c716c9182350da37f15a8"
  },
  {
    "url": "assets/js/40.f6b36a10.js",
    "revision": "acf667230d4dab6ada7c135f73b3452f"
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
    "url": "assets/js/9.08e742ba.js",
    "revision": "cf98879062f456da32ba5436a1581427"
  },
  {
    "url": "assets/js/app.467230c7.js",
    "revision": "c16d9c4c4a2c78242a6ddf71e1125567"
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
    "revision": "c98c1d3a3114475c0ab8d314f06ea554"
  },
  {
    "url": "Bug/html.html",
    "revision": "83c4471af539d4197c9f1c32b6536d32"
  },
  {
    "url": "Bug/index.html",
    "revision": "b6ac6747f107e71d59d7416e2fb9ef81"
  },
  {
    "url": "categories/index.html",
    "revision": "2d6534b9d84e21979acdcc7360397965"
  },
  {
    "url": "dog.jpg",
    "revision": "d3fc3601376d8749b1fa849444ee6158"
  },
  {
    "url": "GIT/index.html",
    "revision": "762103190fe5b4b0a10f3ee37edd49e2"
  },
  {
    "url": "index.html",
    "revision": "52dd1c3516482df931f99371f43fafaa"
  },
  {
    "url": "Others/index.html",
    "revision": "e7f1a480bbc399a6252bd40e91298fc1"
  },
  {
    "url": "SQL/aa_introduce.html",
    "revision": "f016e97bfb564781eca08bc6966c01b2"
  },
  {
    "url": "SQL/ab_select.html",
    "revision": "cbe4b5bc79b7a1f1a80c42250eb42d17"
  },
  {
    "url": "SQL/ac_distinct.html",
    "revision": "66627a37ba547abfdf6faf6b2817a961"
  },
  {
    "url": "SQL/ad_where.html",
    "revision": "81ec53ab026891986d0b075a49e42ece"
  },
  {
    "url": "SQL/ae_insert_into.html",
    "revision": "24f68cb28bceb01fc790c97eeac7120d"
  },
  {
    "url": "SQL/af_update.html",
    "revision": "f4fcd2d24f3d892e84b92ddcbaf850b3"
  },
  {
    "url": "SQL/ag_delete.html",
    "revision": "5c690fa222556c05c63d8c793ffd46e9"
  },
  {
    "url": "SQL/ah_and_or_not.html",
    "revision": "7b7be8676bf21c21e547bc276d9c9bb8"
  },
  {
    "url": "SQL/ai_in.html",
    "revision": "cb95c805bfdaa56281170cc748a4b3cd"
  },
  {
    "url": "SQL/aj_bewteen_and.html",
    "revision": "557aaf01328c03627da7725e63594e6b"
  },
  {
    "url": "SQL/al_like.html",
    "revision": "9ba6f69b41b5d307952edc8cbf795f6f"
  },
  {
    "url": "SQL/am_order_by.html",
    "revision": "d63b343b2f45034537e7ed70bf439890"
  },
  {
    "url": "SQL/an_limit.html",
    "revision": "e5b53af3db135c8c4198ab8486a2f812"
  },
  {
    "url": "SQL/ao_avg.html",
    "revision": "827bfd30512e18efd678d6af38a5191d"
  },
  {
    "url": "SQL/ap_time.html",
    "revision": "89836a15c58d253c333b17d8ed4cb23d"
  },
  {
    "url": "SQL/aq_notnull.html",
    "revision": "f0ef25e615306b91bd3d4db1f60a3f48"
  },
  {
    "url": "SQL/ar_join.html",
    "revision": "8537551e888c825cf8ee805e1e886f32"
  },
  {
    "url": "SQL/as_group.html",
    "revision": "316ef5bc4fc60f5eed643d79d3dda274"
  },
  {
    "url": "SQL/at_often.html",
    "revision": "58442762e8399e699ce89c069081bcd4"
  },
  {
    "url": "SQL/index.html",
    "revision": "50d147011947a362e6d5048776cb6b33"
  },
  {
    "url": "tag/and/index.html",
    "revision": "8fd4e4c9ef0954d1c5a40a482cbfe22c"
  },
  {
    "url": "tag/avg/index.html",
    "revision": "60bd746acfdf847cccfc743f952f3e29"
  },
  {
    "url": "tag/between/index.html",
    "revision": "50fd6654aa629f0a2c75dacbbb7bd060"
  },
  {
    "url": "tag/count/index.html",
    "revision": "79741413e56b0fe1eace3636c3af110a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "09901e4733ab2c526e05fd9e0224d12d"
  },
  {
    "url": "tag/ifnull/index.html",
    "revision": "a0d7a454e091bdde3fb56354d298461f"
  },
  {
    "url": "tag/in/index.html",
    "revision": "4b9135759ae83734857cbcec9ea0dce7"
  },
  {
    "url": "tag/index.html",
    "revision": "75288c994e8b2e1c7a0a498e54e292b3"
  },
  {
    "url": "tag/isnull/index.html",
    "revision": "98f2fd481cd1ea8e332a095151712aff"
  },
  {
    "url": "tag/like/index.html",
    "revision": "96b04453bb2f64af1b67c0101b5efef1"
  },
  {
    "url": "tag/limit/index.html",
    "revision": "876b4f1bb07758cdca258a666d519c76"
  },
  {
    "url": "tag/max/index.html",
    "revision": "f9ae25138afd786eff7cb91c06615fc2"
  },
  {
    "url": "tag/min/index.html",
    "revision": "a8fbb5aff3f1222cd3f5b4dde607cf77"
  },
  {
    "url": "tag/not/index.html",
    "revision": "6214a8f6167fe73b128db49233bae273"
  },
  {
    "url": "tag/or/index.html",
    "revision": "dc7f92215b86afe26f706125991c4fc2"
  },
  {
    "url": "tag/order by/index.html",
    "revision": "5f80780090516cc95b318c3fa30519c1"
  },
  {
    "url": "tag/round/index.html",
    "revision": "93f0a83059db5e56078b1638c734837d"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "c4d154ba5d5c72b5878fe7c11bcc3f50"
  },
  {
    "url": "tag/SQL/page/2/index.html",
    "revision": "f5fa0b79afec129003f712da8cc8c499"
  },
  {
    "url": "tag/sum/index.html",
    "revision": "6de5006b7128f66f775df442a9c6b2ea"
  },
  {
    "url": "tag/分组/index.html",
    "revision": "8f25860bf96629f4524149b610e3fdf7"
  },
  {
    "url": "tag/常用命令/index.html",
    "revision": "7c0f628d72b80f09684f18bee2025230"
  },
  {
    "url": "tag/时间函数/index.html",
    "revision": "d9c321c22e9b30122597e1cdd6c25ba0"
  },
  {
    "url": "tag/约束/index.html",
    "revision": "3f955b4b01724b4aeaf369eaf72de84b"
  },
  {
    "url": "tag/联结/index.html",
    "revision": "7659afe5cea8d9651dc8b4e67b1086c4"
  },
  {
    "url": "timeline/index.html",
    "revision": "69e7642a1f84b18298b36ae9c2291520"
  },
  {
    "url": "Vue/index.html",
    "revision": "09568700948bbf649fc50578576d992c"
  },
  {
    "url": "Vue/test01.html",
    "revision": "7bd8421d2af33bb29db08125fd64af50"
  },
  {
    "url": "Vue/Vuemd.html",
    "revision": "a4df871e09f1a2f0899b68f2bd318362"
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
