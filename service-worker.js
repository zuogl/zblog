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
    "revision": "ebba40b2e3c5f207cf90896b80fc71d6"
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
    "url": "assets/js/11.fc4e295f.js",
    "revision": "9236477022f881146aef8ee65b2fec6c"
  },
  {
    "url": "assets/js/12.97ea7522.js",
    "revision": "2818f4f94ff0c998cdf135ad3dd8b076"
  },
  {
    "url": "assets/js/13.73249bc9.js",
    "revision": "10e0dd36a3c913f33f445edf2e17f0fa"
  },
  {
    "url": "assets/js/14.577c9e6b.js",
    "revision": "4caf049f14e26a659f1b903c65078652"
  },
  {
    "url": "assets/js/15.62ef53d1.js",
    "revision": "bd19f30177fe82c0979589a9c3b4af0e"
  },
  {
    "url": "assets/js/16.c28e0174.js",
    "revision": "13a07de19d6072a8f7de8ea7fdec322b"
  },
  {
    "url": "assets/js/17.d1e3c464.js",
    "revision": "b7e84306daef6f45ac769d4534d0f63e"
  },
  {
    "url": "assets/js/18.2a7e072d.js",
    "revision": "cb2d0b8a55d941aff56b7a254f00889b"
  },
  {
    "url": "assets/js/19.2dd4b80f.js",
    "revision": "e32a8195b1ce1e582177a3861ebc9489"
  },
  {
    "url": "assets/js/20.d77ba736.js",
    "revision": "2d916fd8a03f78396a911f06e76e9dff"
  },
  {
    "url": "assets/js/21.0b45d56e.js",
    "revision": "7801c51ecaf1f02fceca336245a4c22e"
  },
  {
    "url": "assets/js/22.65722b7e.js",
    "revision": "7ff43c96ad50ce0a83147d10e2756353"
  },
  {
    "url": "assets/js/23.524160fb.js",
    "revision": "353c534238afae9168f60e8d5553e44a"
  },
  {
    "url": "assets/js/24.a2038294.js",
    "revision": "152a9732bfd93b5d25d16936c1c8c06a"
  },
  {
    "url": "assets/js/25.a931cdb6.js",
    "revision": "e7f2614cabc337e5b0bdb1175d009390"
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
    "url": "assets/js/29.5174461e.js",
    "revision": "8b507bc805df43c6d3121c0dcd9b6545"
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
    "url": "assets/js/31.c3af56df.js",
    "revision": "d875662014f42c967374bd8495c0d80d"
  },
  {
    "url": "assets/js/32.8ece26ef.js",
    "revision": "9e680adbb58aa17059de6e69ecb06929"
  },
  {
    "url": "assets/js/33.c81d99dd.js",
    "revision": "69bb2381c3bd1998b641b969045b7306"
  },
  {
    "url": "assets/js/34.22fb21ec.js",
    "revision": "23eea39db32e8d535de10818936e1275"
  },
  {
    "url": "assets/js/35.1844c244.js",
    "revision": "abec884e68207934e7100e121c0e7c33"
  },
  {
    "url": "assets/js/36.765d3c72.js",
    "revision": "55d3ceccd4eb739378511e6dfd83558a"
  },
  {
    "url": "assets/js/37.79f1aba5.js",
    "revision": "34ca40b9daa1f231239eaacbaff6dafc"
  },
  {
    "url": "assets/js/38.72c93d43.js",
    "revision": "78c86a197a90464f7db5272d18d652f6"
  },
  {
    "url": "assets/js/39.c8398cae.js",
    "revision": "b90792f368549ab836cafefbf9b48cb9"
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
    "url": "assets/js/41.c51dd68b.js",
    "revision": "af9b173ff4b587c7ed2f51ab88bc8369"
  },
  {
    "url": "assets/js/42.73e3db8f.js",
    "revision": "27ab90275c78be58b060b242b6407b37"
  },
  {
    "url": "assets/js/43.526952e5.js",
    "revision": "7de0d0f7c4cf2abd864dc082b0fdc0ce"
  },
  {
    "url": "assets/js/44.c78df492.js",
    "revision": "418d9abd2e4a9b2fb26171d67a29b631"
  },
  {
    "url": "assets/js/45.338c45da.js",
    "revision": "bde225b5ffccb4b021698ef554828e9b"
  },
  {
    "url": "assets/js/46.e8363a31.js",
    "revision": "803e73c40bc391eac534aeb76bf903f4"
  },
  {
    "url": "assets/js/47.2fcad04e.js",
    "revision": "27577652a97bc81351a957e663c36b7d"
  },
  {
    "url": "assets/js/48.a42be310.js",
    "revision": "d0342c6b10fe4c01bb69f3a4c962d638"
  },
  {
    "url": "assets/js/49.f49e9acc.js",
    "revision": "04cb72479506d27e82d1ce9995ae1e4d"
  },
  {
    "url": "assets/js/5.47c12684.js",
    "revision": "eca94c0ff11b34b17261fa9efe00a05b"
  },
  {
    "url": "assets/js/50.b747bf15.js",
    "revision": "60805f82e4d87fb4ba4b78157d09ab88"
  },
  {
    "url": "assets/js/51.f97453ec.js",
    "revision": "d00b31255b323be340c11cba6076b17b"
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
    "url": "assets/js/8.8ac39040.js",
    "revision": "bda99c025b589dcebe2f9ed97e69a30d"
  },
  {
    "url": "assets/js/9.1218bd24.js",
    "revision": "37215804df72b519159f3a073acc1b2f"
  },
  {
    "url": "assets/js/app.d3faf7e3.js",
    "revision": "7b306a04ceb6a32971540c603e91fa1a"
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
    "revision": "af6be0e2cea6c0aed4579f173ee0b32e"
  },
  {
    "url": "Bug/html.html",
    "revision": "1a8cceebb88b694f43931359bf8c6543"
  },
  {
    "url": "Bug/index.html",
    "revision": "1c3a612904e1d881428518be9b40aadf"
  },
  {
    "url": "categories/index.html",
    "revision": "e3d378634eccff8b490d2d72d62efabb"
  },
  {
    "url": "dog.jpg",
    "revision": "d3fc3601376d8749b1fa849444ee6158"
  },
  {
    "url": "GIT/index.html",
    "revision": "a03e91972338e61741356db4cb7b4064"
  },
  {
    "url": "index.html",
    "revision": "d3e270ae0efd3509ff63dcfab4dc1d1a"
  },
  {
    "url": "Mini/aa_introduce.html",
    "revision": "f4a1b7caeb7d7f840a5531cc51d01ba2"
  },
  {
    "url": "Mini/ab_note.html",
    "revision": "17f75ca3e5e67c4e9792ba0cddbc3499"
  },
  {
    "url": "Mini/az_message.html",
    "revision": "a87d9619e2f363799843864f61463bc5"
  },
  {
    "url": "Mini/index.html",
    "revision": "0f2fce839219bc6baa4fb4211e3745e5"
  },
  {
    "url": "Others/index.html",
    "revision": "0693459ccb97c480dc17200f740570bf"
  },
  {
    "url": "React/index.html",
    "revision": "b07506f86bc46e71ddbaa46f13f8d35e"
  },
  {
    "url": "React/test01.html",
    "revision": "090c94c4c4a1ea95c745eb5ab0326c1f"
  },
  {
    "url": "React/test02.html",
    "revision": "3b1458c5cc4c0a13443769f0dda19b81"
  },
  {
    "url": "SQL/aa_introduce.html",
    "revision": "81f85419ec2cd47c4b847e17ef0305de"
  },
  {
    "url": "SQL/ab_select.html",
    "revision": "65d5b4507ce360771fe928c8a2434dd4"
  },
  {
    "url": "SQL/ac_distinct.html",
    "revision": "2639b689bbc7dc5411ac79eaee523355"
  },
  {
    "url": "SQL/ad_where.html",
    "revision": "db49ec2db4600fab2acf28b7f31935e4"
  },
  {
    "url": "SQL/ae_insert_into.html",
    "revision": "2fc223e366dc008e072e5fcfcc8e606b"
  },
  {
    "url": "SQL/af_update.html",
    "revision": "e9ea72e39a3c69149d292b424ad27eaa"
  },
  {
    "url": "SQL/ag_delete.html",
    "revision": "627cffd902de0351a68b934c3fe7294c"
  },
  {
    "url": "SQL/ah_and_or_not.html",
    "revision": "60ee801151080537b453f02b774dc28f"
  },
  {
    "url": "SQL/ai_in.html",
    "revision": "a2bf03e49a25b91dcd0790c1eef9d55d"
  },
  {
    "url": "SQL/aj_bewteen_and.html",
    "revision": "cea254c9db7972cb60bc3529e6e21211"
  },
  {
    "url": "SQL/al_like.html",
    "revision": "7429d2ed40e4b8d7de563592df117344"
  },
  {
    "url": "SQL/am_order_by.html",
    "revision": "2427b9158eef9bab3b9f7428279b3b29"
  },
  {
    "url": "SQL/an_limit.html",
    "revision": "2d432c4233811402defb118f96212e91"
  },
  {
    "url": "SQL/ao_avg.html",
    "revision": "cc81487727a6c81dd70b8a07c919788c"
  },
  {
    "url": "SQL/ap_time.html",
    "revision": "a26f0833cfc79031f6edb04f17e29b62"
  },
  {
    "url": "SQL/aq_notnull.html",
    "revision": "8bc455aac4a1210e747fbd7730d163c9"
  },
  {
    "url": "SQL/ar_join.html",
    "revision": "1aa7fdadf8eab2a8996005cbfd3da86f"
  },
  {
    "url": "SQL/as_group.html",
    "revision": "7b94e6bb67e763324160f313b4f20029"
  },
  {
    "url": "SQL/at_often.html",
    "revision": "c59fb534887c9cd836dd999d1daea293"
  },
  {
    "url": "SQL/index.html",
    "revision": "af9a28e335b8a69d61f2c98e27f585eb"
  },
  {
    "url": "tag/and/index.html",
    "revision": "3bba60425b6e00171e84d8895f4a7790"
  },
  {
    "url": "tag/avg/index.html",
    "revision": "2607a5a488c865cffe3de1592660d847"
  },
  {
    "url": "tag/between/index.html",
    "revision": "79092a27e6c15090be1869ae12ecd069"
  },
  {
    "url": "tag/count/index.html",
    "revision": "ee89805233f5d008319c65c1ea69e3e0"
  },
  {
    "url": "tag/delete/index.html",
    "revision": "b4343ba4ece3c16391ff30d459f3ce83"
  },
  {
    "url": "tag/distinct/index.html",
    "revision": "4f17b9e8699c8c0d1c0eb8e84cfea658"
  },
  {
    "url": "tag/git/index.html",
    "revision": "29f1c472a8d4718c9c4c5984aeae5486"
  },
  {
    "url": "tag/ifnull/index.html",
    "revision": "4f247a47f53b43d1054aba4ce1ca5529"
  },
  {
    "url": "tag/in/index.html",
    "revision": "781a824a28af4bab0d2240c2daf57ec5"
  },
  {
    "url": "tag/index.html",
    "revision": "50fd7a671f29b8f6cbb1427308f68aa8"
  },
  {
    "url": "tag/insert into/index.html",
    "revision": "d7e90c8f21a1a0dde066e74ad9059aba"
  },
  {
    "url": "tag/isnull/index.html",
    "revision": "a13f237bd068e434643d6b9cd02b32a5"
  },
  {
    "url": "tag/like/index.html",
    "revision": "ab80a68ae2e1925184a321bca0bdcfa1"
  },
  {
    "url": "tag/limit/index.html",
    "revision": "0b99d1fb5ef7ffb1e2cb4fbd3d3e1a26"
  },
  {
    "url": "tag/max/index.html",
    "revision": "4ff0b732aa60a2f7f8758820a91e6bf6"
  },
  {
    "url": "tag/min/index.html",
    "revision": "d21680be1f73e531a8dcf8207b9b15e9"
  },
  {
    "url": "tag/not/index.html",
    "revision": "dfb64bbeff0a191e2924c3d501ca967f"
  },
  {
    "url": "tag/or/index.html",
    "revision": "26dd5647a99c4aa143f6fe11e84f9bb8"
  },
  {
    "url": "tag/order by/index.html",
    "revision": "458ee85c5fbc13cef06c0abaaa56e6e9"
  },
  {
    "url": "tag/round/index.html",
    "revision": "979dba8552d333bea6f4265ccd4a799e"
  },
  {
    "url": "tag/select/index.html",
    "revision": "14aef0621a3a320599da78cfd8f50dfa"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "ca8a8213653615bca5ee760eaedde36f"
  },
  {
    "url": "tag/SQL/page/2/index.html",
    "revision": "222d4c6ca6bcce0eb843e0c104eeb924"
  },
  {
    "url": "tag/sum/index.html",
    "revision": "fd3e875373708e6df2d05ebe617f2232"
  },
  {
    "url": "tag/update/index.html",
    "revision": "afa8efc606675611fac16a4787acf5dc"
  },
  {
    "url": "tag/where/index.html",
    "revision": "8e36cb721de52c816cc1df1518c81495"
  },
  {
    "url": "tag/分组/index.html",
    "revision": "09870485b3a2176d61afbc1e80cec088"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "3428237ec4be6aed9b6cebfb5f36d0bb"
  },
  {
    "url": "tag/常用命令/index.html",
    "revision": "48fa86770461a8b5314943259888c58b"
  },
  {
    "url": "tag/时间函数/index.html",
    "revision": "98c469eeb2f194d4be55ad89e169c4cc"
  },
  {
    "url": "tag/视频号变现/index.html",
    "revision": "b0584e410ebaf005c3e7b40053f6dd7d"
  },
  {
    "url": "tag/视频号工具/index.html",
    "revision": "425cc2914ed41972983c42fb82c06dc7"
  },
  {
    "url": "tag/视频号爆款/index.html",
    "revision": "96e9867e21afc07707250aae3aa85aaf"
  },
  {
    "url": "tag/视频号笔记/index.html",
    "revision": "0aa7a06efaa1a6551a3bbd09d92b88da"
  },
  {
    "url": "tag/约束/index.html",
    "revision": "79159daf9353e0e31a4440e48b0275d0"
  },
  {
    "url": "tag/联结/index.html",
    "revision": "bb7863b63b2337fff74a44d884e41c30"
  },
  {
    "url": "timeline/index.html",
    "revision": "3ac185ca6e6c38683c038ae4f7a6f25a"
  },
  {
    "url": "Vue/index.html",
    "revision": "2454b0eb1cfda627c2ae6be29de677a8"
  },
  {
    "url": "Vue/test01.html",
    "revision": "a7c96344591782ee516acfe909bc2f21"
  },
  {
    "url": "Vue/Vuemd.html",
    "revision": "8fe13226eeea764f2da12a59e4e8b462"
  },
  {
    "url": "WeChatVideoChannel/aa_shipinhao.html",
    "revision": "d6ebe15c240cff129ac40adb4fef7393"
  },
  {
    "url": "WeChatVideoChannel/ab_money.html",
    "revision": "da91dd04b1dbd8f47a82767c27269b5d"
  },
  {
    "url": "WeChatVideoChannel/ac_tools.html",
    "revision": "ab8e3a63880d26c8d974d38f7fac5f4d"
  },
  {
    "url": "WeChatVideoChannel/index.html",
    "revision": "660db265db8bd3336e13e84cfd0cd09d"
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
