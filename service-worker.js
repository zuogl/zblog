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
    "revision": "702ccb79da9071db36503dbb7501dc7e"
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
    "url": "assets/js/1.38b0d07c.js",
    "revision": "433a499564021110be38b7283c7d2332"
  },
  {
    "url": "assets/js/10.3e72e8aa.js",
    "revision": "93c9ccb63b5bd51654eb134ae8ed6e33"
  },
  {
    "url": "assets/js/11.a70e94be.js",
    "revision": "8001c28a5631fb624d5df5a37efb822e"
  },
  {
    "url": "assets/js/12.ee77b4e3.js",
    "revision": "3dd7bb235a90dc22a2cd934515f60a8a"
  },
  {
    "url": "assets/js/13.0f5c24d0.js",
    "revision": "42dd63779a55a0298835e70f0c43fc2a"
  },
  {
    "url": "assets/js/14.06e6d77c.js",
    "revision": "ee98d308c2db44146817230dba2f49ab"
  },
  {
    "url": "assets/js/15.3accc5ef.js",
    "revision": "85681083d468802526060d8d3c372baa"
  },
  {
    "url": "assets/js/16.ff45a28f.js",
    "revision": "f5c03412196e3ad5c1fb59ed8766ca08"
  },
  {
    "url": "assets/js/17.08339c35.js",
    "revision": "54fe80facd8e9c029acd9c730721fe14"
  },
  {
    "url": "assets/js/18.99263bb4.js",
    "revision": "8977b36ad21fd6191149c574cfc8c4d2"
  },
  {
    "url": "assets/js/19.26a7790b.js",
    "revision": "e9f090cf44554fa2c396adf059ffc551"
  },
  {
    "url": "assets/js/20.17ea535e.js",
    "revision": "5f2bde37485841eeac6b213af478c854"
  },
  {
    "url": "assets/js/21.814d335e.js",
    "revision": "d670ac7e778e4566a493ac19fce6b015"
  },
  {
    "url": "assets/js/22.e7e9d749.js",
    "revision": "9f02ade0d29e7b721c637d8fd967517e"
  },
  {
    "url": "assets/js/23.150a05a5.js",
    "revision": "9cca6b411e7a90c6392c96fa94efdd92"
  },
  {
    "url": "assets/js/24.1eb3e0c6.js",
    "revision": "eca3876bd8b1b3a74fe5ce1d72c22665"
  },
  {
    "url": "assets/js/25.63e14462.js",
    "revision": "6734e838625ceeaaf5a335661e3568ca"
  },
  {
    "url": "assets/js/26.dfe32589.js",
    "revision": "ee542ab19a80f78a76219389c62578df"
  },
  {
    "url": "assets/js/27.4fe73bec.js",
    "revision": "24e60ec5a83915efd65a4284caf943b6"
  },
  {
    "url": "assets/js/28.f4624904.js",
    "revision": "eed8ddd40582f9b56ae6d226c7855c80"
  },
  {
    "url": "assets/js/29.3ca143e1.js",
    "revision": "ed0e442a9b4836d67adb5d6bb4fe43dc"
  },
  {
    "url": "assets/js/3.2eaef344.js",
    "revision": "af2bdda5ffa501149351e97e533383e5"
  },
  {
    "url": "assets/js/30.d4822497.js",
    "revision": "6fa1fce7785f68b29de238ec44613eaf"
  },
  {
    "url": "assets/js/31.e1d00551.js",
    "revision": "f4959ffa71043ae3aa53dddd5ed11288"
  },
  {
    "url": "assets/js/32.e7de53ee.js",
    "revision": "6b636353bcfb3b807120e3e0906e8334"
  },
  {
    "url": "assets/js/33.5abb25b1.js",
    "revision": "d32f158457cf11264f7424fa090fc38b"
  },
  {
    "url": "assets/js/34.985f351f.js",
    "revision": "7b7bfd2b6a312529f77dcdea9a4ef579"
  },
  {
    "url": "assets/js/35.d227c971.js",
    "revision": "8df1a8d8f172bd988c82743b09548d73"
  },
  {
    "url": "assets/js/36.14473904.js",
    "revision": "c616356a4123da73debe6e42fcdebd7f"
  },
  {
    "url": "assets/js/37.ede2376f.js",
    "revision": "721558a1afc5734bcc29b9102dc97ee9"
  },
  {
    "url": "assets/js/38.d79d3201.js",
    "revision": "dd9047357a4616187824029f41382ee1"
  },
  {
    "url": "assets/js/39.79368464.js",
    "revision": "693321f5236bbb67bdd933fd2937243c"
  },
  {
    "url": "assets/js/4.c2bd2285.js",
    "revision": "756d13efecb15ecfe8bc1bb3cb8be679"
  },
  {
    "url": "assets/js/5.070af313.js",
    "revision": "054eefa3211b5829df646f60c0da2ce0"
  },
  {
    "url": "assets/js/6.d3c4d4ae.js",
    "revision": "b940b89231996c1c77f594d2be8eee7a"
  },
  {
    "url": "assets/js/7.a0986896.js",
    "revision": "3797522efd36dbb1431ab3428ead36ab"
  },
  {
    "url": "assets/js/8.9e47b4fd.js",
    "revision": "237a93b8078184276a030d40724de60c"
  },
  {
    "url": "assets/js/9.6848fdb1.js",
    "revision": "5fbef81c136a2a064da36ffcb28c3c14"
  },
  {
    "url": "assets/js/app.765507d3.js",
    "revision": "6c7c362c3b2bef869069475224f15608"
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
    "revision": "848f99a5e4603a8aed6b8a7ff7bd8753"
  },
  {
    "url": "Bug/html.html",
    "revision": "ae7b3fe57e3ade310d32e8c782372122"
  },
  {
    "url": "Bug/index.html",
    "revision": "f502282de0da90725e4ebbdca96a7b00"
  },
  {
    "url": "categories/index.html",
    "revision": "1e51b282ab390502d3ed7f8ab49d3663"
  },
  {
    "url": "dog.jpg",
    "revision": "d3fc3601376d8749b1fa849444ee6158"
  },
  {
    "url": "GIT/index.html",
    "revision": "242ffa9844fbd64f9632aa07a3153f49"
  },
  {
    "url": "index.html",
    "revision": "4127b081f57c44a3865bd9bc63077ef4"
  },
  {
    "url": "Others/index.html",
    "revision": "e646ee6d8df5f9279271f4f57b733851"
  },
  {
    "url": "SQL/aa_introduce.html",
    "revision": "aeb82b497eea2427365b3c290f00df43"
  },
  {
    "url": "SQL/ab_select.html",
    "revision": "4028aaa39e15a5f51a4e5fb6b8dd1846"
  },
  {
    "url": "SQL/ac_distinct.html",
    "revision": "8ff907ae1dcdc7541b219c349e74b46b"
  },
  {
    "url": "SQL/ad_where.html",
    "revision": "75c1c8cf6c24ddc68484945f586244d7"
  },
  {
    "url": "SQL/ae_insert_into.html",
    "revision": "98d1f48398d6b1c887a7077cfa614fda"
  },
  {
    "url": "SQL/af_update.html",
    "revision": "22e320407d24bf630b1ad0a5ae0583fe"
  },
  {
    "url": "SQL/ag_delete.html",
    "revision": "33af7bd75c76d98dbb4b1736be9cbb43"
  },
  {
    "url": "SQL/ah_and_or_not.html",
    "revision": "4d46047f33da3d960b5c9cedc6250ef7"
  },
  {
    "url": "SQL/ai_in.html",
    "revision": "a0c23e7f55919c99b23031e583b06a08"
  },
  {
    "url": "SQL/aj_bewteen_and.html",
    "revision": "e96f718ee8e0a46c8031a32a43af8570"
  },
  {
    "url": "SQL/al_like.html",
    "revision": "b407c6287c4fbc0b9a1d0c5972aab324"
  },
  {
    "url": "SQL/am_order_by.html",
    "revision": "22cc0c289e0ccb7fbd5e38aac486df85"
  },
  {
    "url": "SQL/an_limit.html",
    "revision": "a3d5ff427edcc929b178b90769a5574e"
  },
  {
    "url": "SQL/ao_avg.html",
    "revision": "fcb674d99789b61c9955716416e55bb2"
  },
  {
    "url": "SQL/ap_time.html",
    "revision": "54701ca6f1026cf52f73bffe04e2a057"
  },
  {
    "url": "SQL/aq_notnull.html",
    "revision": "b397d6b831616c2e85a3c93493b8c046"
  },
  {
    "url": "SQL/ar_join.html",
    "revision": "e4f0f308220af94c38727fce2d55c457"
  },
  {
    "url": "SQL/as_group.html",
    "revision": "e62c36e9b6c57f90021d953f407fb8f4"
  },
  {
    "url": "SQL/at_often.html",
    "revision": "35e2ac4f9536109a5204647362a2b827"
  },
  {
    "url": "SQL/index.html",
    "revision": "94925e386b9b8d3629a7cb5d7510da47"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8d114521a32baeac004d5d5032f5c764"
  },
  {
    "url": "tag/index.html",
    "revision": "aa79c9f4e1c70cfc618bf7a11b9a9134"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "94d314e61609849864d3259fdfb3fae0"
  },
  {
    "url": "tag/SQL/page/2/index.html",
    "revision": "e9abc1e9c81049d888ca04405a52cbd3"
  },
  {
    "url": "timeline/index.html",
    "revision": "a2f18b9f27fe7b0bd4e054ac5bf20602"
  },
  {
    "url": "Vue/aa_introduce.html",
    "revision": "882913e0cb1f692c48da391a760c45cb"
  },
  {
    "url": "Vue/index.html",
    "revision": "98d4682bfaf654b24e512b7d25225ac6"
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
