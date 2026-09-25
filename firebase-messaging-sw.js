importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js');

importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js');

fetch('/firebase-config.json')
  .then((response) => response.json())
  .then((config) => {
    if (!config.apiKey || !config.projectId || !config.messagingSenderId || !config.appId) return;
    firebase.initializeApp(config);
    firebase.messaging();
  })
  .catch(() => undefined);
