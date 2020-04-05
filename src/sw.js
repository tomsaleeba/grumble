import * as idb from 'idb'
import * as upupSw from 'upup/src/upup.sw.js'

import * as store from './store.js'

self.addEventListener('sync', function(event) {
  if (event.tag === 'outbox') {
    event.waitUntil(pruneQueue())
  }
})
