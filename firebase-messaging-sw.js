importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js');

importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js');

const getLanguage = () =>
  new Promise((resolve) => {
    try {
      const req = indexedDB.open('orchem-sw-store', 1);

      req.onsuccess = () => {
        try {
          const getReq = req.result
            .transaction('settings', 'readonly')
            .objectStore('settings')
            .get('language');
          getReq.onsuccess = () => resolve(getReq.result || 'en');
          getReq.onerror = () => resolve('en');
        } catch {
          resolve('en');
        }
      };
      req.onerror = () => resolve('en');
    } catch {
      resolve('en');
    }
  });

fetch('/firebase-config.json')
  .then((response) => response.json())
  .then((config) => {
    if (!config.apiKey || !config.projectId || !config.messagingSenderId || !config.appId) return;
    firebase.initializeApp(config);
    const messaging = firebase.messaging();

    messaging.onBackgroundMessage(async (payload) => {
      const lang = await getLanguage();
      const data = payload.data || {};
      const selected = lang === 'ar' ? 'Ar' : 'En';
      const other = lang === 'ar' ? 'En' : 'Ar';
      const title =
        data[`title${selected}`] ||
        data[`title${other}`] ||
        payload.notification?.title ||
        (lang === 'ar' ? 'إشعار جديد' : 'New notification');
      const body =
        data[`body${selected}`] || data[`body${other}`] || payload.notification?.body || '';

      if (!payload.notification) {
        return self.registration.showNotification(title, {
          body,
          data: { id: data.id, type: data.type },
        });
      }
    });
  })
  .catch(() => undefined);
