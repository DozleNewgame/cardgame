// Firebaseの設定情報
const firebaseConfig = {
    apiKey: "AIzaSyDFFgw8AyJ9_v_zk0p0iyxeep6rwQrmG2I",
    authDomain: "dozlecard-28e2d.firebaseapp.com",
    databaseURL: "https://dozlecard-28e2d-default-rtdb.firebaseio.com",
    projectId: "dozlecard-28e2d",
    storageBucket: "dozlecard-28e2d.firebasestorage.app",
    messagingSenderId: "678591771764",
    appId: "1:678591771764:web:a40b44566eabc34b060d21",
    measurementId: "G-HY8R4C5GFM"
};

// Firebaseの初期化
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
    console.log("Firebase initialized successfully");
} else {
    console.error("Firebase is not loaded");
}
