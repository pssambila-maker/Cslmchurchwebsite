const fs = require('fs');
const content = `VITE_FIREBASE_API_KEY=AIzaSyC4yDdpJenaxagUDirG7nGxCNmiq8DsoXk
VITE_FIREBASE_AUTH_DOMAIN=cslm-church.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=cslm-church
VITE_FIREBASE_STORAGE_BUCKET=cslm-church.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=579451967772
VITE_FIREBASE_APP_ID=1:579451967772:web:7dd3e08dee729b02d9`;

fs.writeFileSync('.env', content, 'utf8');
console.log('.env file written with UTF-8 encoding');
