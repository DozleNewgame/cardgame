// Firebaseの設定情報
const firebaseConfig = {
    apiKey: "AIzaSyDFGw8AJ9_v_zk0p8iyxeep6rwQrMG2I",
    authDomain: "dozlecard-28e2d.firebaseapp.com",
    databaseURL: "https://dozlecard-28e2d-default-rtdb.firebaseio.com",
    projectId: "dozlecard-28e2d",
    storageBucket: "dozlecard-28e2d.appspot.com",
    messagingSenderId: "767591771764",
    appId: "1:767591771764:web:a4bb44566eabc34b06d021",
    measurementId: "G-HY8R46SGFM"
};

// Firebaseの初期化
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
