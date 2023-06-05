import { getApp, getApps, initializeApp } from 'firebase/app';

import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAuSNyCqHGEv4F3U7fUNsIURHC20SbzN2A',
  authDomain: 'fullstack-foodapp-8a7d6.firebaseapp.com',
  projectId: 'fullstack-foodapp-8a7d6',
  storageBucket: 'fullstack-foodapp-8a7d6.appspot.com',
  messagingSenderId: '886943729628',
  appId: '1:886943729628:web:069912743ebb3919287119',
  measurementId: 'G-DRLXWTDKFG',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const storage = getStorage(app);

export { app, storage };
