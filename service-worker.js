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
    "revision": "23d1f40c3adbe77f22c749f08c3a1c8b"
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
    "url": "assets/img/config.5a4d6020.png",
    "revision": "5a4d6020ced62c55520184c285553064"
  },
  {
    "url": "assets/img/maopao.e1964495.png",
    "revision": "e19644959c4264c599877e0a836fc76b"
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
    "url": "assets/js/10.d3fae578.js",
    "revision": "22ed270316d4efe0687efa57e80eabe4"
  },
  {
    "url": "assets/js/11.1bd5ca32.js",
    "revision": "456e3839634dcdd7c8e27f3f0dacd76a"
  },
  {
    "url": "assets/js/12.7f963d7e.js",
    "revision": "4bafb43efd856f6eaffe663d3b404b58"
  },
  {
    "url": "assets/js/13.cf470dc4.js",
    "revision": "95f3e6621aa3c264c7733d1a36860b81"
  },
  {
    "url": "assets/js/14.bd1b7ca4.js",
    "revision": "a4ebc89f9707fb38cdbb318152c21a71"
  },
  {
    "url": "assets/js/15.04547f5c.js",
    "revision": "b8a9bcbe9a0f07cf37fc25877e538c5f"
  },
  {
    "url": "assets/js/16.36dad13a.js",
    "revision": "958c47ac3025a6dbc23bab2f1058b0f2"
  },
  {
    "url": "assets/js/17.e834bc96.js",
    "revision": "fd245608728b8628cac432c1a61b6183"
  },
  {
    "url": "assets/js/18.2a7e072d.js",
    "revision": "cb2d0b8a55d941aff56b7a254f00889b"
  },
  {
    "url": "assets/js/19.ea663e9d.js",
    "revision": "f2368550d5895bb097d8e7a66797ef2b"
  },
  {
    "url": "assets/js/20.d77ba736.js",
    "revision": "2d916fd8a03f78396a911f06e76e9dff"
  },
  {
    "url": "assets/js/21.d6d0c832.js",
    "revision": "9d41974e5f7086cfb3dfa3e071a7d480"
  },
  {
    "url": "assets/js/22.f0b2b4d3.js",
    "revision": "49378a8964d7b58f5e913c6618349c79"
  },
  {
    "url": "assets/js/23.33c03341.js",
    "revision": "55b22d14289642f61416e4bff8c99b98"
  },
  {
    "url": "assets/js/24.cd21e154.js",
    "revision": "221dce48b6897e07ff546dc860e58302"
  },
  {
    "url": "assets/js/25.e21f820e.js",
    "revision": "5c6a2bbb5a9acaa5fc2410271e93a2d8"
  },
  {
    "url": "assets/js/26.e9a16379.js",
    "revision": "990d9465b54dc5574891f7eda1043288"
  },
  {
    "url": "assets/js/27.d25470a5.js",
    "revision": "92d1dcdfb48fd7a2fb59f83402bac4f1"
  },
  {
    "url": "assets/js/28.9d5cd3eb.js",
    "revision": "0a79e527a1f2328dbba7b5f28a7078b4"
  },
  {
    "url": "assets/js/29.abbc7c2b.js",
    "revision": "677d72863a1b7583b71c28bfcdda9a9e"
  },
  {
    "url": "assets/js/3.a7ca9a77.js",
    "revision": "2ce0e8fe91dda64acccabff2002e8e24"
  },
  {
    "url": "assets/js/30.c8e40f9c.js",
    "revision": "c60ae8c637e9582fc89de90dddb9c5fe"
  },
  {
    "url": "assets/js/31.78d2a4d7.js",
    "revision": "ff0179c3023f651c17670331bebc1849"
  },
  {
    "url": "assets/js/32.806c771c.js",
    "revision": "d7ab91dca5bb7981df9a81009501e38c"
  },
  {
    "url": "assets/js/33.e4a65d9f.js",
    "revision": "334c3ceb1af5ef59f3d6c9796c76bf69"
  },
  {
    "url": "assets/js/34.0696da70.js",
    "revision": "f71f55f9f226031f2123ed52419f001e"
  },
  {
    "url": "assets/js/35.1844c244.js",
    "revision": "abec884e68207934e7100e121c0e7c33"
  },
  {
    "url": "assets/js/36.e1b24f55.js",
    "revision": "b3529baafc343284ef23e2899415e925"
  },
  {
    "url": "assets/js/37.433b1be0.js",
    "revision": "5f2558d436ef74202888b5b8464df283"
  },
  {
    "url": "assets/js/38.aad20c02.js",
    "revision": "bb1e98e1591aa91db57b05e855d9920b"
  },
  {
    "url": "assets/js/39.4cb477db.js",
    "revision": "2c3088823d40cbdd55c257bb836f38ce"
  },
  {
    "url": "assets/js/4.a01f3b1c.js",
    "revision": "fb6c20a7287dd2e7ce48fcd7a0885753"
  },
  {
    "url": "assets/js/40.e13a6caa.js",
    "revision": "335caa5d53ddeffb7f39701e1e800050"
  },
  {
    "url": "assets/js/41.00cb3092.js",
    "revision": "82aead1bca66f51e08a455e1fc0a68d7"
  },
  {
    "url": "assets/js/42.6d47a421.js",
    "revision": "3a3fd446bf3138a13be23db80843dda9"
  },
  {
    "url": "assets/js/43.a8027459.js",
    "revision": "b840556ac37f3a4761954501b6822ba6"
  },
  {
    "url": "assets/js/44.86c789b2.js",
    "revision": "f1e761b62ec74c9735a7e56da61c3114"
  },
  {
    "url": "assets/js/45.3f3103d4.js",
    "revision": "f181e4bc3d76aba436d15a5c79b321ee"
  },
  {
    "url": "assets/js/46.e8363a31.js",
    "revision": "803e73c40bc391eac534aeb76bf903f4"
  },
  {
    "url": "assets/js/47.2b858275.js",
    "revision": "f4aa629fd39649de8ac18c6c3f2f55b4"
  },
  {
    "url": "assets/js/48.53fd4227.js",
    "revision": "145402cf0dd7c060f6b16177fec84750"
  },
  {
    "url": "assets/js/49.71f202a7.js",
    "revision": "96f36a41b4372e3b7fb4e4267451ec60"
  },
  {
    "url": "assets/js/5.47c12684.js",
    "revision": "eca94c0ff11b34b17261fa9efe00a05b"
  },
  {
    "url": "assets/js/50.f75765ce.js",
    "revision": "c43f35d9122026504afa85fa28cc0d71"
  },
  {
    "url": "assets/js/51.f3b51962.js",
    "revision": "f2fa2951f7766b409492a3835be52e68"
  },
  {
    "url": "assets/js/52.2423dbc7.js",
    "revision": "d512b29c89bea9bd0ee9265550f86dbd"
  },
  {
    "url": "assets/js/53.fc362154.js",
    "revision": "e9c0a8deb17883f62ff1d0c817b2c8de"
  },
  {
    "url": "assets/js/54.703bcf0f.js",
    "revision": "80a83a9b3270e6973a370c03570a8542"
  },
  {
    "url": "assets/js/6.f5d01790.js",
    "revision": "739d91aeb5b52d4c57dc877118622419"
  },
  {
    "url": "assets/js/7.43e219eb.js",
    "revision": "281a7c87ec63c5a3c1b70eb74deb8bf7"
  },
  {
    "url": "assets/js/8.a5608b2b.js",
    "revision": "a5cbeef6bd90ab4a93d09cc72c6d5ce0"
  },
  {
    "url": "assets/js/9.1218bd24.js",
    "revision": "37215804df72b519159f3a073acc1b2f"
  },
  {
    "url": "assets/js/app.283be9c2.js",
    "revision": "9562ae26beea52ef460fca6fab68a86f"
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
    "revision": "a827223d7d123ea46f9c9e93a6c8f4bc"
  },
  {
    "url": "Bug/html.html",
    "revision": "3e222f7ef2a6e9871cdb61f611f77810"
  },
  {
    "url": "Bug/index.html",
    "revision": "a206ee680225a866bae77aab0ac4be92"
  },
  {
    "url": "categories/index.html",
    "revision": "c9a3e0a16f41f4f7e244e1c43a2854e0"
  },
  {
    "url": "dog.jpg",
    "revision": "d3fc3601376d8749b1fa849444ee6158"
  },
  {
    "url": "GIT/index.html",
    "revision": "eb7425367df74875457470082220aa0a"
  },
  {
    "url": "index.html",
    "revision": "08ab9794b56c59cf05cd3f886fc8d157"
  },
  {
    "url": "Mini/aa_introduce.html",
    "revision": "a0dc20ad274983e8c68ecaf03c6ee3fd"
  },
  {
    "url": "Mini/ab_note.html",
    "revision": "e6c4db35f752c7ffddce76846a3547e6"
  },
  {
    "url": "Mini/az_message.html",
    "revision": "5df78cd9a1d4a3271a87fd0ff7abb97e"
  },
  {
    "url": "Mini/index.html",
    "revision": "8f2f5651e95df08e5cce6a343b20d775"
  },
  {
    "url": "Others/index.html",
    "revision": "9283a1cf55d512f7c93141cd7fbfbac0"
  },
  {
    "url": "React/index.html",
    "revision": "581d5e09fe9567cc2fc0e40243ea4402"
  },
  {
    "url": "React/test01.html",
    "revision": "7a0f70ca0a49e923e2f7dc0f73a699dc"
  },
  {
    "url": "React/test02.html",
    "revision": "59e7ce295010d6dcbc2524b30e02358f"
  },
  {
    "url": "SQL/aa_introduce.html",
    "revision": "2561481717c60b2cb87e58dd6d9d0ff8"
  },
  {
    "url": "SQL/ab_select.html",
    "revision": "1cadb4b559b9f1162b5ad688e3d1b414"
  },
  {
    "url": "SQL/ac_distinct.html",
    "revision": "102ac8a5f7d10b52cc248d0ece84c944"
  },
  {
    "url": "SQL/ad_where.html",
    "revision": "0552310f95c1f68a1be8a287b570dbf6"
  },
  {
    "url": "SQL/ae_insert_into.html",
    "revision": "e22bac8a3a6e9202a6e3f874175eeb7a"
  },
  {
    "url": "SQL/af_update.html",
    "revision": "dfc7c352f861763fa7d017f4d4b8e28c"
  },
  {
    "url": "SQL/ag_delete.html",
    "revision": "f9a0f762d5a7662ff6af40d7a206d430"
  },
  {
    "url": "SQL/ah_and_or_not.html",
    "revision": "59db5772649026ad279bee58fa39b48f"
  },
  {
    "url": "SQL/ai_in.html",
    "revision": "cbf6bba7a9c97a42da2bf97c165ec201"
  },
  {
    "url": "SQL/aj_bewteen_and.html",
    "revision": "845276e1aab13824f188c34e80a7101e"
  },
  {
    "url": "SQL/al_like.html",
    "revision": "bd823e43aa18f90b2ef57ce247cc77f2"
  },
  {
    "url": "SQL/am_order_by.html",
    "revision": "e13fc6e842a71ed3693eb6abe0be11f9"
  },
  {
    "url": "SQL/an_limit.html",
    "revision": "3fa2dc0e83daf5a749a0cec8582228e2"
  },
  {
    "url": "SQL/ao_avg.html",
    "revision": "6a086cef27c83fffed42a065cc9790dc"
  },
  {
    "url": "SQL/ap_time.html",
    "revision": "28cb401311aa9e9c8e407ff3ee8da67a"
  },
  {
    "url": "SQL/aq_notnull.html",
    "revision": "d41bc5248eb43cb6b250ce6872cda39b"
  },
  {
    "url": "SQL/ar_join.html",
    "revision": "c4c5898c3ad304b7488178ab8c126a54"
  },
  {
    "url": "SQL/as_group.html",
    "revision": "74ccb837e2aa53dd0479507d73b21978"
  },
  {
    "url": "SQL/at_often.html",
    "revision": "7b0994bcfdc90c4add2c2113ca0e2a60"
  },
  {
    "url": "SQL/index.html",
    "revision": "0a1edd2e453b276650310336d97fbe9c"
  },
  {
    "url": "tag/and/index.html",
    "revision": "aa80e99a88e4eb5d417a2757fa94aead"
  },
  {
    "url": "tag/avg/index.html",
    "revision": "7c72fad90ddba4d0f2791a54574c920f"
  },
  {
    "url": "tag/between/index.html",
    "revision": "15300840083f82ccf34edd3c6642963d"
  },
  {
    "url": "tag/count/index.html",
    "revision": "8a7c4f91e2cb50e68f6d12b90e992576"
  },
  {
    "url": "tag/delete/index.html",
    "revision": "29db911c076c14897262759357da10e3"
  },
  {
    "url": "tag/distinct/index.html",
    "revision": "99fb385bd60217132e91ed1539b341b8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "054adc6548e45adda350f16894e66f53"
  },
  {
    "url": "tag/ifnull/index.html",
    "revision": "15183a2a81c101ed8269b73dafb8a662"
  },
  {
    "url": "tag/in/index.html",
    "revision": "bfe103f66cc9a37e6f94cc30fc8f1460"
  },
  {
    "url": "tag/index.html",
    "revision": "3d6498f4b839a9f0d909b75552700b7a"
  },
  {
    "url": "tag/insert into/index.html",
    "revision": "353ce402ed085b60d595fff7019b6241"
  },
  {
    "url": "tag/isnull/index.html",
    "revision": "75e060aea397ef95c71948674f2e1dac"
  },
  {
    "url": "tag/like/index.html",
    "revision": "fbb498a914376f8c2e49e82b69a9fbee"
  },
  {
    "url": "tag/limit/index.html",
    "revision": "68731eda9cc0284fcc4737e9a476e234"
  },
  {
    "url": "tag/max/index.html",
    "revision": "63028926d9511b55b89258a560d2a746"
  },
  {
    "url": "tag/min/index.html",
    "revision": "3edb9325f698331f51cfe6529265111f"
  },
  {
    "url": "tag/not/index.html",
    "revision": "ae6616ea4f847a5b2d5cb59db1cc6280"
  },
  {
    "url": "tag/or/index.html",
    "revision": "a304e4773d68c9ed0aebbf8360acb172"
  },
  {
    "url": "tag/order by/index.html",
    "revision": "19bddc7d2590e833c23d9c6380f30dd5"
  },
  {
    "url": "tag/round/index.html",
    "revision": "27b6b40e22b59e7e1641d8ddab500b5e"
  },
  {
    "url": "tag/select/index.html",
    "revision": "6cab628fdaf118a3f1138968cf64304f"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "f23531f896b38d10236a13b54c16591e"
  },
  {
    "url": "tag/SQL/page/2/index.html",
    "revision": "c07c0591cb021852cb9c9b3b7046a2ad"
  },
  {
    "url": "tag/sum/index.html",
    "revision": "a670cbe0536cd1b7457abea7ce914769"
  },
  {
    "url": "tag/update/index.html",
    "revision": "f70f12ff8595f876efaa258d22e9a312"
  },
  {
    "url": "tag/where/index.html",
    "revision": "e346e940ba2e5a61208db8fdb2df05eb"
  },
  {
    "url": "tag/分组/index.html",
    "revision": "b65df9618743d4985dd44aed6a2a4c57"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "c2b8532e00e07908367dfd5fd7592f9b"
  },
  {
    "url": "tag/常用命令/index.html",
    "revision": "afbc52daa28f41ffbd101a7d160a2d76"
  },
  {
    "url": "tag/时间函数/index.html",
    "revision": "d94eb6886b521b26dd176c54fd651b91"
  },
  {
    "url": "tag/视频号变现/index.html",
    "revision": "0cdd2cf1a8866b76b178fba446202638"
  },
  {
    "url": "tag/视频号工具/index.html",
    "revision": "bb5b51fdf6570898857dec6ad136d419"
  },
  {
    "url": "tag/视频号爆款/index.html",
    "revision": "cee79b3a625a9d56fb20b58b72ff050e"
  },
  {
    "url": "tag/视频号笔记/index.html",
    "revision": "dac3997968466dc398fe29e7c72145fa"
  },
  {
    "url": "tag/约束/index.html",
    "revision": "191372e2ef23187de38eb9948c68c827"
  },
  {
    "url": "tag/联结/index.html",
    "revision": "ef6dc086a1ba8ef2cbaa9ef997b14c67"
  },
  {
    "url": "timeline/index.html",
    "revision": "5f236fb201aab39f0c4341f898c82f9e"
  },
  {
    "url": "Vue/index.html",
    "revision": "1b0d652f5d18aa2ffbb2797aa288a3b3"
  },
  {
    "url": "Vue/test01.html",
    "revision": "acb4be1753795203309440c506d8f04b"
  },
  {
    "url": "Vue/Vuemd.html",
    "revision": "b47485f8549b4de569cd52b69d4d52b7"
  },
  {
    "url": "Webpack/index.html",
    "revision": "e5636fe9a618a26e1f4b8059b272532d"
  },
  {
    "url": "Webpack/jichu.html",
    "revision": "1d9cd361ab9f98d3e5a35e94e146d76e"
  },
  {
    "url": "Webpack/jinji.html",
    "revision": "b9eb8d58a60e942b43a3194e01e7ad90"
  },
  {
    "url": "WeChatVideoChannel/aa_shipinhao.html",
    "revision": "a97fe73841a50f7405ab6d932a55eb16"
  },
  {
    "url": "WeChatVideoChannel/ab_money.html",
    "revision": "7ca51edc2ed4d8065c6fb476cfa80f86"
  },
  {
    "url": "WeChatVideoChannel/ac_tools.html",
    "revision": "0d7a8660e70e59bb4c36f69b444841e0"
  },
  {
    "url": "WeChatVideoChannel/index.html",
    "revision": "f5d0c1bb3cb435ed5957fd835dd3638f"
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
