
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Hrishi_Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Hrishi_Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23637, hash: '4202ceb309bd3d370d59c9b91bdf6d961ca3460afe46e7ee54687c99739fa997', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17211, hash: '55aa64b1a7a434f9fd33f6b8dff010a006a48b4403167512beebd4f0ae0af2bc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 58724, hash: 'de2c73ebf823aac45878ad83160856af86ab53c2d73d0d30446087f2ca288203', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
