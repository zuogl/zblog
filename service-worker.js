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
    "revision": "b6165e13683916e99c5d5aa79fa4fa0c"
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
    "url": "assets/js/10.923891a1.js",
    "revision": "c327f9687746552a1fc9eab82d42b602"
  },
  {
    "url": "assets/js/11.c034eedf.js",
    "revision": "f6ae5d8efc46b8b41694be9cd8d7c573"
  },
  {
    "url": "assets/js/12.ddc21891.js",
    "revision": "b3db80f9a6c044d8c70dc0a555a45510"
  },
  {
    "url": "assets/js/13.10c54d25.js",
    "revision": "f640628f2e14e5a0870cf0484cf7789e"
  },
  {
    "url": "assets/js/14.b2413413.js",
    "revision": "f70077fb9300301c14eeee964d8f77f3"
  },
  {
    "url": "assets/js/15.63ab2ceb.js",
    "revision": "08d126d56eeac5aca4510b2c7cef87b1"
  },
  {
    "url": "assets/js/16.b4f03f81.js",
    "revision": "3912a1236efc2f54f431c9512bf367af"
  },
  {
    "url": "assets/js/17.321d7040.js",
    "revision": "fae2101973922c24141e28549cd2e02c"
  },
  {
    "url": "assets/js/18.fcbd296c.js",
    "revision": "3a3535062eab1c85ed3e917ad3388a8b"
  },
  {
    "url": "assets/js/19.4f8253cf.js",
    "revision": "22fd64d92ad8e20d56dca2421253d3f6"
  },
  {
    "url": "assets/js/20.3ecf4260.js",
    "revision": "99a2547b9e3246fef1fb063336e0ae91"
  },
  {
    "url": "assets/js/21.c3873a8b.js",
    "revision": "754c82388cbce433c56299b898e716c1"
  },
  {
    "url": "assets/js/22.94377cae.js",
    "revision": "40248535d4dc8df85e610fba6a14ca02"
  },
  {
    "url": "assets/js/23.3e452a25.js",
    "revision": "93b5fffac4e205bc412fc261665d9db0"
  },
  {
    "url": "assets/js/24.96fb7f6f.js",
    "revision": "51c85ad355d33fad649b3125e564bcf5"
  },
  {
    "url": "assets/js/25.54f980a3.js",
    "revision": "78275f310434afe8df96ab10239b9727"
  },
  {
    "url": "assets/js/26.5db1937e.js",
    "revision": "7832d1fc8043675494d04950233661f1"
  },
  {
    "url": "assets/js/27.4a062c4c.js",
    "revision": "dc6db5d1ee7152eb4dd8af670e7e433f"
  },
  {
    "url": "assets/js/28.f78a6a8a.js",
    "revision": "45aff4162f0ea76b90311164f6f28729"
  },
  {
    "url": "assets/js/29.bc8786fc.js",
    "revision": "8a6c3af0e953898143f6dbce5b8fdd2f"
  },
  {
    "url": "assets/js/3.27615fbb.js",
    "revision": "32cf8ce61711c3dbc13178ba50bbec10"
  },
  {
    "url": "assets/js/30.9aae7866.js",
    "revision": "52935323e2e9117a740468f04e62f3b7"
  },
  {
    "url": "assets/js/31.60b21714.js",
    "revision": "c5a672155f767d94bbf32ff1c65fd1ae"
  },
  {
    "url": "assets/js/32.1181067a.js",
    "revision": "5d6aa6db5c5dd7a8e20487b7a84e2fa5"
  },
  {
    "url": "assets/js/33.6038d113.js",
    "revision": "190aabaf61d908716eeacf414ec0c03e"
  },
  {
    "url": "assets/js/34.816e6b05.js",
    "revision": "3074974833aede3bcb1c293e740948bd"
  },
  {
    "url": "assets/js/35.66714aa5.js",
    "revision": "5ad03658393e788140cee7e1efff3db1"
  },
  {
    "url": "assets/js/36.8feb2108.js",
    "revision": "72a836eca8314bbcc679746b1f3e7dbe"
  },
  {
    "url": "assets/js/37.ce2151f3.js",
    "revision": "9cff63b49cab68f5255d1ac4bb9fd888"
  },
  {
    "url": "assets/js/38.47f987bf.js",
    "revision": "6baec483faeda01365dd0497a18e5c29"
  },
  {
    "url": "assets/js/39.e7843f03.js",
    "revision": "6ffe5cddfc888aaee8827b5fedacf828"
  },
  {
    "url": "assets/js/4.77631e70.js",
    "revision": "82bc431712c6e0b6d01937dfb063df91"
  },
  {
    "url": "assets/js/40.aae64fad.js",
    "revision": "ef14091e1bc001baf2830a5471516d5c"
  },
  {
    "url": "assets/js/41.9e9ac5e6.js",
    "revision": "93411657f452edf49bbc7000d10e9f2c"
  },
  {
    "url": "assets/js/5.ace30ad7.js",
    "revision": "d9c963d5ffcfe864570db279b80b5540"
  },
  {
    "url": "assets/js/6.bdf1fa68.js",
    "revision": "b371720f8456d05950969bf534d2c488"
  },
  {
    "url": "assets/js/7.155dada2.js",
    "revision": "28a54882a7392359796669888e04776b"
  },
  {
    "url": "assets/js/8.5730a086.js",
    "revision": "e8e8ab8b533c6efca66e8b508ef7d2a5"
  },
  {
    "url": "assets/js/9.fcffac57.js",
    "revision": "d3ae61b56b966ae7a7366a3d44ab33ea"
  },
  {
    "url": "assets/js/app.9bcd0f0d.js",
    "revision": "6ac1a28681819abdfbe84367fdab357a"
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
    "revision": "bce030c67d33e07bd67eb1bbf8e4e4df"
  },
  {
    "url": "Bug/index.html",
    "revision": "c42969bdb6453ed8228f14f04d0a7fcb"
  },
  {
    "url": "categories/index.html",
    "revision": "6c55eb485cde725fa6a6f53a2170b5cc"
  },
  {
    "url": "dog.jpg",
    "revision": "d3fc3601376d8749b1fa849444ee6158"
  },
  {
    "url": "GIT/index.html",
    "revision": "2080cbf4aa31c5a6013206c9daee36e8"
  },
  {
    "url": "index.html",
    "revision": "97ed23425fb7848eca91576bd7aca6fe"
  },
  {
    "url": "JSCode/index.html",
    "revision": "5d7141921bfe13428a3dbbd93cf80b66"
  },
  {
    "url": "Others/index.html",
    "revision": "6e6baf2ff9c362110b88d17f5b647993"
  },
  {
    "url": "SQL/aa_introduce.html",
    "revision": "e804aa17ff669e0ee97530ca14eba6f9"
  },
  {
    "url": "SQL/ab_select.html",
    "revision": "9aa61e92734ee75a806b75ad136b9ac0"
  },
  {
    "url": "SQL/ac_distinct.html",
    "revision": "2ad48110c9d700dc8f3f68c6c82bbc08"
  },
  {
    "url": "SQL/ad_where.html",
    "revision": "b1434d82b72eb4d3f999f6061915f476"
  },
  {
    "url": "SQL/ae_insert_into.html",
    "revision": "0b334c7063bfcad5d6e3a40bfcbf73c9"
  },
  {
    "url": "SQL/af_update.html",
    "revision": "b156f62397959a70a1556b8554710ccd"
  },
  {
    "url": "SQL/ag_delete.html",
    "revision": "9ec1a531db0f7cc6e7a6be14994d0a1d"
  },
  {
    "url": "SQL/ah_and_or_not.html",
    "revision": "7909801cb7a48badeaa38c87cd24d5ef"
  },
  {
    "url": "SQL/ai_in.html",
    "revision": "73c4ddf2ef61774aa72add2d2233bb70"
  },
  {
    "url": "SQL/aj_bewteen_and.html",
    "revision": "e7d944315e9c00ca0ec5fdf0b65f997f"
  },
  {
    "url": "SQL/al_like.html",
    "revision": "31d784c274344cb637f783589cffc924"
  },
  {
    "url": "SQL/am_order_by.html",
    "revision": "f68d770c043c61fd1c8dc17e42ce3711"
  },
  {
    "url": "SQL/an_limit.html",
    "revision": "6ddd0c8df7068a632cd7242d82ca0117"
  },
  {
    "url": "SQL/ao_avg.html",
    "revision": "dce94a680f293756792afa370448da6c"
  },
  {
    "url": "SQL/ap_time.html",
    "revision": "f6e6e7a630438736bed24d4f9bfe044a"
  },
  {
    "url": "SQL/aq_notnull.html",
    "revision": "3b70a7d1ac969dcff6b9d97c6c4a7355"
  },
  {
    "url": "SQL/ar_join.html",
    "revision": "0af4c33eacc7903289f65cd3c5b4e7e0"
  },
  {
    "url": "SQL/as_group.html",
    "revision": "8ab4066a140d26c6d2b1f1abb9b8c015"
  },
  {
    "url": "SQL/at_often.html",
    "revision": "d9c514f40e11f96b4d1e471fd82f07e1"
  },
  {
    "url": "SQL/index.html",
    "revision": "0f6bb8527cc465b9ae1bbfebca10489e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "cbcd6cc7d5b7b861ff52ad9b117ca32a"
  },
  {
    "url": "tag/index.html",
    "revision": "fb5a6b06f4bf1b2354823f2e12462eaa"
  },
  {
    "url": "tag/JSCode/index.html",
    "revision": "7490e5c3c87ed1d52742487d087bccb6"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "d2ea9138b6e215d496f80a70008cb556"
  },
  {
    "url": "tag/SQL/page/2/index.html",
    "revision": "a64cd4217c6f0a057ba60694922d7cd6"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "2cb3b98ba2afef5f99f26fae9275a6fd"
  },
  {
    "url": "timeline/index.html",
    "revision": "b989ab85067376131af5b80b8b8a9481"
  },
  {
    "url": "Vue/aa_introduce.html",
    "revision": "5f6825c7f63d8fc836dec9c0c55545de"
  },
  {
    "url": "Vue/ab.html",
    "revision": "377a58f5cbe7ead7512a661870901828"
  },
  {
    "url": "Vue/ac.html",
    "revision": "c1295d30fd2f8cfb964387249cd4e780"
  },
  {
    "url": "Vue/index.html",
    "revision": "c4918b343e6df18e87b90c2a318dc881"
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
