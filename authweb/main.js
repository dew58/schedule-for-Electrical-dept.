// the imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

//the users ids  <<<<<<gona make it in database >>>>>>>>>








const prof = [
  "9SeH3xORwzUvnApRLrQd6KZaqdR2",
  "dyBGVp9f76OmSUcggIeBQiyknfg2",
];





//see if the element is in the array or not
function chik(arr, obj) {
  for (let i = 0; i < arr.length; i++) {
    if (obj === arr[i]) {
      return true;
    } else {
      return false;
    }
  }
}

//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCA931qONRJ2to-indCNMcyw3-Y64VXkE8",
  authDomain: "callender-af770.firebaseapp.com",
  projectId: "callender-af770",
  storageBucket: "callender-af770.appspot.com",
  messagingSenderId: "837224899044",
  appId: "1:837224899044:web:d7d3fcb725ab568cfca7f1",
  databaseURL: "https://callender-af770-default-rtdb.firebaseio.com/",
};
// initialize the firebase and the database
const app = initializeApp(firebaseConfig);

//initialisation of firebase and auth
// const app = initializeApp(firebaseConfig);
const auth = getAuth();

const emailpassauth = document.getElementById("log-in");
emailpassauth.addEventListener("click", function () {

  //getting email and password from the form
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      const id = user.uid;

      //save the id in local 
      localStorage.setItem('userid', id);

      if (chik(prof, id) === true) {
        window.location.href = "homeprof.html";

      } else if (chik(eng, id) === true) {
        window.location.href = "homeeng.html";

      } else if (chik(student, id) === true) {
        window.location.href = "homestudent.html";
      }


    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });

})

var out = document.getElementById("singout");
out.addEventListener('click', function () {
  history.back();
  signOut(auth).then(() => {
    console.log('Sign-out successful.');
    window.location.href = "index.html";
  }).catch((error) => {
    // An error happened.
    console.log(error);
  });
})
