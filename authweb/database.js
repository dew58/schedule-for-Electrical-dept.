// import thr firebase and firebase real time database
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";


// config the firebase project
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
const dbRef = ref(getDatabase());


// getting the department name from selection 

const loadingIcon = document.getElementById('loadingIcon');
function addClickEventToElementsWithClass(className, callback) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', callback);
    
  }
  loadingIcon.style.display = 'none';
}
addClickEventToElementsWithClass('container', async function calldata() {
  
  //getting the course from the selection and clear it if it have any options in it
  const selectElement = document.getElementById('courseSelect');
  selectElement.innerHTML = '';

  //getting the course name
  var value = window.dept;

  //getting the year 
  var theYear = window["yeart"];

  // getting the data from the database 
  get(child(dbRef, `${value}/`)).then((snapshot) => {
    if (snapshot.exists()) {

      // put the course of choosen year and dept in a courseNames var
      let chooses = snapshot.val()[theYear];
      const courseNames = Object.values(chooses.firstSemester.courses)
        .map(course => course.name);

      // Create and append the option elements in course names selection
      courseNames.forEach(courseName => {
        const optionElement = document.createElement('option');
        optionElement.textContent = courseName;
        selectElement.appendChild(optionElement);
      });
    } else {
      console.log("No data available");
    }

    loadingIcon.style.display = 'none';
  }).catch((error) => {
    console.error(data);

    console.error(error);
  });

  loadingIcon.style.display = 'none';
})



//getting the halls data and display it
get(child(dbRef, `places`)).then((snapshot) => {
  if (snapshot.exists()) {

    let chooses = snapshot.val();
    const placeNames = Object.values(chooses)
      .map(place => place.name);


    const selectplace = document.getElementById('placesof5');
    // Create and append the option elements
    placeNames.forEach(placeNames => {
      const optionElement = document.createElement('option');
      optionElement.textContent = placeNames;
      selectplace.appendChild(optionElement);
    });
    loadingIcon.style.display = 'none';

  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
}

);



addClickEventToElementsWithClass('cheeck', async function calldata() {
  //getting the course from the selection and clear it if it have any options in it
  const selectElement1 = document.getElementById('doctor');
  selectElement1.innerHTML = '';

  const selectElement2 = document.getElementById('eng');
  selectElement2.innerHTML = '';

  var selectedlec = document.querySelector('input[name="g"]:checked').value;

  if (selectedlec === 'section') {
    //getting the halls data and display it
    get(child(dbRef, `Eng name`)).then((snapshot) => {
      if (snapshot.exists()) {

        let chooses = snapshot.val();
        const placeNames = Object.values(chooses)
          .map(place => place.name);


        const selectplace = document.getElementById('eng');
        // Create and append the option elements
        placeNames.forEach(placeNames => {
          const optionElement = document.createElement('option');
          optionElement.textContent = placeNames;
          selectplace.appendChild(optionElement);
          loadingIcon.style.display = 'none';
        });

      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });



  } else if (selectedlec === 'lecture') {



    //getting the halls data and display it
    get(child(dbRef, `DR name`)).then((snapshot) => {
      if (snapshot.exists()) {

        let chooses = snapshot.val();
        const placeNames = Object.values(chooses)
          .map(place => place.name);


        const selectplace = document.getElementById('doctor');
        // Create and append the option elements
        placeNames.forEach(placeNames => {
          const optionElement = document.createElement('option');
          optionElement.textContent = placeNames;
          selectplace.appendChild(optionElement);
          loadingIcon.style.display = 'none';
        });

      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });



  }



})





