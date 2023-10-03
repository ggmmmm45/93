// ADICIONE SUS LINKS FIREBASE AQUI
var firebaseConfig = {
        apiKey: "AIzaSyCYXiTh85QfTzkY0hkYZYjhODf8lVbtKgU",
        authDomain: "kwitterprofthays.firebaseapp.com",
        databaseURL: "https://kwitterprofthays-default-rtdb.firebaseio.com",
        projectId: "kwitterprofthays",
        storageBucket: "kwitterprofthays.appspot.com",
        messagingSenderId: "182007721289",
        appId: "1:182007721289:web:f20b13c099fe4e9a507e98"
      };
      
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      
      
      function addUser()
      {
        userName = document.getElementById("userName").value;
        firebase.database().ref("/").child(userName).update({
          purpose : "adding user"
        });
      }
      