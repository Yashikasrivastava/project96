//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyB0Dl4ixEzoFpKAHS1DPWGeXUpMcxnwuMc",
    authDomain: "inner-analyst-335003.firebaseapp.com",
    databaseURL: "https://inner-analyst-335003-default-rtdb.firebaseio.com",
    projectId: "inner-analyst-335003",
    storageBucket: "inner-analyst-335003.appspot.com",
    messagingSenderId: "901425493203",
    appId: "1:901425493203:web:6173d5a2437782aaa05026"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code
                      //End code
                }
          });
    });
}
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });

    document.getElementById("msg").value = "";
}