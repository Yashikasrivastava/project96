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
//ADD YOUR FIREBASE LINKS HERE
function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "addingroom name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id) >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerhtml += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}


