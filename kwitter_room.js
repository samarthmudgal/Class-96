//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDdM1fJSPx0mHdQN-yWnvzngXRsyDo2ckk",
    authDomain: "classtest-81e1c.firebaseapp.com",
    databaseURL: "https://classtest-81e1c-default-rtdb.firebaseio.com",
    projectId: "classtest-81e1c",
    storageBucket: "classtest-81e1c.appspot.com",
    messagingSenderId: "128197218352",
    appId: "1:128197218352:web:41e766b81ced5aa73d1df5"};
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
       Room_names = childKey;
//Start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name'  id="+Room_names+"onclick='redirectToRoomName(this.id)' >g"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

//End code
    } });  }); }
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout()
{
    localStorage.removeIyem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding  room  name"
      });

      localStorage.setItem("room_name",room_name);

      window.location = "index.html";
}

