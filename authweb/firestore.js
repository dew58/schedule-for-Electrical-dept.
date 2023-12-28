//imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, setDoc, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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


// Initialize Cloud Firestore and get a reference to the service
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);





const listofid = [
  'sun_8_1', 'sun_10_1', 'sun_12_1', 'sun_2_1', 'sun_3_1', 'mon_8_1', 'mon_10_1', 'mon_12_1', 'mon_2_1', 'mon_3_1', 'tue_8_1', 'tue_10_1', 'tue_12_1', 'tue_2_1', 'tue_3_1', 'wed_8_1', 'wed_10_1', 'wed_12_1', 'wed_2_1', 'wed_3_1', 'thu_8_1', 'thu_10_1', 'thu_12_1', 'thu_2_1', 'thu_3_1',
  'sun_8_2', 'sun_10_2', 'sun_12_2', 'sun_2_2', 'sun_3_2', 'mon_8_2', 'mon_10_2', 'mon_12_2', 'mon_2_2', 'mon_3_2', 'tue_8_2', 'tue_10_2', 'tue_12_2', 'tue_2_2', 'tue_3_2', 'wed_8_2', 'wed_10_2', 'wed_12_2', 'wed_2_2', 'wed_3_2', 'thu_8_2', 'thu_10_2', 'thu_12_2', 'thu_2_2', 'thu_3_2',
  'sun_8_3', 'sun_10_3', 'sun_12_3', 'sun_2_3', 'sun_3_3', 'mon_8_3', 'mon_10_3', 'mon_12_3', 'mon_2_3', 'mon_3_3', 'tue_8_3', 'tue_10_3', 'tue_12_3', 'tue_2_3', 'tue_3_3', 'wed_8_3', 'wed_10_3', 'wed_12_3', 'wed_2_3', 'wed_3_3', 'thu_8_3', 'thu_10_3', 'thu_12_3', 'thu_2_3', 'thu_3_3',
  'sun_8_4', 'sun_10_4', 'sun_12_4', 'sun_2_4', 'sun_3_4', 'mon_8_4', 'mon_10_4', 'mon_12_4', 'mon_2_4', 'mon_3_4', 'tue_8_4', 'tue_10_4', 'tue_12_4', 'tue_2_4', 'tue_3_4', 'wed_8_4', 'wed_10_4', 'wed_12_4', 'wed_2_4', 'wed_3_4', 'thu_8_4', 'thu_10_4', 'thu_12_4', 'thu_2_4', 'thu_3_4']




const addevent = document.getElementById("daat");
addevent.addEventListener("click", async function () {




  //getting course name 
  const getda = document.getElementById("courseSelect");
  var value = getda.options[getda.selectedIndex].value;

  //getting the department
  const department = window.dept;
  //getting the place
  const place = document.getElementById("placesof5");
  var places = place.options[place.selectedIndex].value;

  try {
    const instructor1 = document.getElementById("doctor");
    var inst1 = instructor1.options[instructor1.selectedIndex].value;
  } catch (err) {
    const instructor2 = document.getElementById("eng");
    var inst1 = instructor2.options[instructor2.selectedIndex].value;
  }

  var id = inst1;

  //getting the year
  var theYear = window["yeart"];

  //getting the day
  var day = window.dayt;

  //getting the time
  var time = window.timet;

  // getting the data from firestor


  const colRef11 = collection(db, `communication/uMdGIaZWySMFaC11soOc/one/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef12 = collection(db, `communication/uMdGIaZWySMFaC11soOc/two/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef13 = collection(db, `communication/uMdGIaZWySMFaC11soOc/three/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef14 = collection(db, `communication/uMdGIaZWySMFaC11soOc/four/uMdGIaZWySMFaC11soOc/${day}`);

  const colRef21 = collection(db, `computer/uMdGIaZWySMFaC11soOc/one/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef22 = collection(db, `computer/uMdGIaZWySMFaC11soOc/two/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef23 = collection(db, `computer/uMdGIaZWySMFaC11soOc/three/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef24 = collection(db, `computer/uMdGIaZWySMFaC11soOc/four/uMdGIaZWySMFaC11soOc/${day}`);


  const colRef31 = collection(db, `electrical/uMdGIaZWySMFaC11soOc/one/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef32 = collection(db, `electrical/uMdGIaZWySMFaC11soOc/two/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef33 = collection(db, `electrical/uMdGIaZWySMFaC11soOc/three/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef34 = collection(db, `electrical/uMdGIaZWySMFaC11soOc/four/uMdGIaZWySMFaC11soOc/${day}`);


  // Get all the documents from the collection
  const querySnapshot11 = await getDocs(colRef11);
  const querySnapshot12 = await getDocs(colRef12);
  const querySnapshot13 = await getDocs(colRef13);
  const querySnapshot14 = await getDocs(colRef14);


  const querySnapshot21 = await getDocs(colRef21);
  const querySnapshot22 = await getDocs(colRef22);
  const querySnapshot23 = await getDocs(colRef23);
  const querySnapshot24 = await getDocs(colRef24);

  const querySnapshot31 = await getDocs(colRef31);
  const querySnapshot32 = await getDocs(colRef32);
  const querySnapshot33 = await getDocs(colRef33);
  const querySnapshot34 = await getDocs(colRef34);





  //first conditiionn
  // Create an empty array to store the places
  const daytimepls = [];


  // Loop through the documents to get the places
  querySnapshot11.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot12.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot13.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot14.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });

  querySnapshot21.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot22.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot23.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot24.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });



  querySnapshot31.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot32.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot33.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot34.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  console.log(daytimepls);

  ///secondd conditionnn
  const daytimeid = [];

  querySnapshot11.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot12.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot13.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot14.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });


  querySnapshot21.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot22.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot23.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot24.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });


  querySnapshot31.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot32.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot33.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot34.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });

  console.log(daytimeid);


  //third conditiionn
  const daytimeyeardept = [];
  querySnapshot11.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'communication'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot12.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'communication'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot13.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'communication'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot14.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'communication'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });


  querySnapshot21.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'computer'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot22.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'computer'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot23.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'computer'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot24.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'computer'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });


  querySnapshot31.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'electrical'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot32.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'electrical'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot33.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'electrical'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot34.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'electrical'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });


  console.log(daytimeyeardept);


  // forth condition
  var noo = "12:30to2tuesday";


  var first = day + time + places;
  var second = day + time + id;
  var third = day + time + theYear + department;
  var forth = time + day;

  // Get all the documents from the collection
  // const querySnapshot = await getDocs(colRef);


  var idtd = ' ';
  idtd = getid(day, time, theYear);

  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var departat = [];

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    if (checkbox.checked) {
      departat.push(checkbox.value);
    }
  }


  console.log(departat);

  if (departat.length === 0) {


    console.log(daytimepls.includes(first));
    if (!(daytimepls.includes(first)) && (!(daytimeid.includes(second))) && (!(daytimeyeardept.includes(third))) && !(noo === forth)) {
      try {
        const docRef = await setDoc(doc(db, `${department}/uMdGIaZWySMFaC11soOc/${theYear}/uMdGIaZWySMFaC11soOc/${day}`, `${idtd}`), {
          docnam: id,
          course: value,
          place: places,
          clock: time,
          day: day,
          year: theYear
        });
        putdata();
        console.log("Document written with ID: ", docRef.id);

      } catch (e) {
        console.error("Error adding document: ", e);
      }


    } else {
      alert("this allredy added ");

    }


  } else if (departat.length === 1) {

    var dep2 = departat[0];

    if ((chik(daytimepls, first) === false) && (chik(daytimeid, second) === false) && (chik(daytimeyeardept, third) === false) && (noo !== forth)) {
      try {
        var docRef = await setDoc(doc(db, `${department}/uMdGIaZWySMFaC11soOc/${theYear}/uMdGIaZWySMFaC11soOc/${day}`, `${idtd}`), {
          docnam: id,
          course: value,
          place: places,
          clock: time,
          day: day,
          year: theYear
        });

        var docRef = await setDoc(doc(db, `${dep2}/uMdGIaZWySMFaC11soOc/${theYear}/uMdGIaZWySMFaC11soOc/${day}`, `${idtd}`), {
          docnam: id,
          course: value,
          place: places,
          clock: time,
          day: day,
          year: theYear
        });
        putdata();
        console.log("Document written with ID: ", docRef.id);

      } catch (e) {
        console.error("Error adding document: ", e);
      }


    } else {
      alert("this allredy added ");

    }


  } else if (departat.length === 2) {

    var deep2 = departat[0];
    var deep3 = departat[1];


    if ((chik(daytimepls, first) === false) && (chik(daytimeid, second) === false) && (chik(daytimeyeardept, third) === false) && (noo !== forth)) {
      try {
        var docRef = await setDoc(doc(db, `${department}/uMdGIaZWySMFaC11soOc/${theYear}/uMdGIaZWySMFaC11soOc/${day}`, `${idtd}`), {
          docnam: id,
          course: value,
          place: places,
          clock: time,
          day: day,
          year: theYear
        });

        var docRef = await setDoc(doc(db, `${deep2}/uMdGIaZWySMFaC11soOc/${theYear}/uMdGIaZWySMFaC11soOc/${day}`, `${idtd}`), {
          docnam: id,
          course: value,
          place: places,
          clock: time,
          day: day,
          year: theYear
        });

        var docRef = await setDoc(doc(db, `${deep3}/uMdGIaZWySMFaC11soOc/${theYear}/uMdGIaZWySMFaC11soOc/${day}`, `${idtd}`), {
          docnam: id,
          course: value,
          place: places,
          clock: time,
          day: day,
          year: theYear
        });
        putdata();
        console.log("Document written with ID: ", docRef.id);

      } catch (e) {
        console.error("Error adding document: ", e);
      }


    } else {
      alert("this allredy added ");

    }



  }




})

async function putdata() {
  for (let index = 0; index < listofid.length; index++) {
    const element = listofid[index];
    const selectElement = document.getElementById(element);
    selectElement.innerHTML = '';

  }

  //getting the department
  const department = `${window.dept}`;
  console.log(department);

  var day = [`sunday`, `monday`, `tuesday`, `wednesday`, `thursday`];

  var dataa = [];


  for (let i = 0; i < day.length; i++) {
    const element = day[i];

    // exicting places
    const colRef1 = collection(db, `${department}/uMdGIaZWySMFaC11soOc/one/uMdGIaZWySMFaC11soOc/${element}`);
    const colRef2 = collection(db, `${department}/uMdGIaZWySMFaC11soOc/two/uMdGIaZWySMFaC11soOc/${element}`);
    const colRef3 = collection(db, `${department}/uMdGIaZWySMFaC11soOc/three/uMdGIaZWySMFaC11soOc/${element}`);
    const colRef4 = collection(db, `${department}/uMdGIaZWySMFaC11soOc/for/uMdGIaZWySMFaC11soOc/${element}`);
    // Get all the documents from the collection
    const querySnapshot1 = await getDocs(colRef1);
    const querySnapshot2 = await getDocs(colRef2);
    const querySnapshot3 = await getDocs(colRef3);
    const querySnapshot4 = await getDocs(colRef4);

    querySnapshot1.forEach((doc) => {
      const data = doc.data(); // Get the data of the document
      // const event = data.place;
      dataa.push(data); // Get the place field of the data
    });
    querySnapshot2.forEach((doc) => {
      const data = doc.data(); // Get the data of the document
      // const event = data.place;
      dataa.push(data); // Get the place field of the data
    });
    querySnapshot3.forEach((doc) => {
      const data = doc.data(); // Get the data of the document
      // const event = data.place;
      dataa.push(data); // Get the place field of the data
    });
    querySnapshot4.forEach((doc) => {
      const data = doc.data(); // Get the data of the document
      // const event = data.place;
      dataa.push(data); // Get the place field of the data
    });



  }
  console.log(dataa);
  var idtd = '';
  for (let i = 0; i < dataa.length; i++) {
    const element = dataa[i];
    switch (element.day) {
      case 'sunday':
        idtd = 'sun';
        break;
      case 'monday':
        idtd = 'mon';
        break;
      case 'tuesday':
        idtd = 'tue';
        break;
      case 'wednesday':
        idtd = 'wed';
        break;
      case 'thursday':
        idtd = 'thu';
        break;
      default:
        break;
    }

    switch (element.clock) {
      case '8:30to10:15':
        idtd = idtd + '_8';
        break;
      case '10:15to12:30':
        idtd = idtd + '_10';
        break;
      case '12:30to2':
        idtd = idtd + '_12';
        break;
      case '2to3:30':
        idtd = idtd + '_2';
        break;
      case '3:30to5':
        idtd = idtd + '_3';
        break;
      default:
        break;
    }

    switch (element.year) {
      case 'one':
        idtd = idtd + '_1';
        break;
      case 'two':
        idtd = idtd + '_2';
        break;
      case 'three':
        idtd = idtd + '_3';
        break;
      case 'four':
        idtd = idtd + '_4';
        break;

      default:
        break;
    }

    console.log(idtd);
    // Create a new div element
    const divElement = document.createElement('div');
    divElement.setAttribute('id', idtd);
    divElement.setAttribute('class', 'my-div');
    divElement.textContent =  `"${element.course} ${element.docnam}  ${element.place}"`;
    const tdElement = document.getElementById(idtd); // Replace 'tdId' with the actual ID of your table cell
    // const tdElement = document.getElementById('my-td');
    // Step 6: Append the <div> element to the <td> element
    tdElement.appendChild(divElement);
  }
  const myTable = document.getElementById('mytable');
  myTable.style.display = 'table';
}
const deleteevent = document.getElementById("delete");
deleteevent.addEventListener("click", async function () {


  //getting the time
  var time = window.timet;

  //getting the year
  var theYear = window["yeart"];

  //getting the day
  var day = window.dayt;
  var department = window.dept;

  var idtd = '';
  idtd = getid(day, time, theYear);




  await deleteDoc(doc(db, `${department}/uMdGIaZWySMFaC11soOc/${theYear}/uMdGIaZWySMFaC11soOc/${day}`, `${idtd}`));

  console.log("deleted");

})



// update data 


const updatee = document.getElementById("update");
updatee.addEventListener("click", async function () {


  //getting course name 
  const getda = document.getElementById("courseSelect");
  var value = getda.options[getda.selectedIndex].value;

  //getting the department
  const department = window.dept;
  //getting the place
  const place = document.getElementById("placesof5");
  var places = place.options[place.selectedIndex].value;

  try {
    const instructor1 = document.getElementById("doctor");
    var inst1 = instructor1.options[instructor1.selectedIndex].value;
  } catch (err) {
    const instructor2 = document.getElementById("eng");
    var inst1 = instructor2.options[instructor2.selectedIndex].value;
  }

  var id = inst1;

  //getting the year
  var theYear = window["yeart"];

  //getting the day
  var day = window.dayt;

  //getting the time
  var time = window.timet;

  // getting the data from firestor






  const colRef11 = collection(db, `communication/uMdGIaZWySMFaC11soOc/one/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef12 = collection(db, `communication/uMdGIaZWySMFaC11soOc/two/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef13 = collection(db, `communication/uMdGIaZWySMFaC11soOc/three/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef14 = collection(db, `communication/uMdGIaZWySMFaC11soOc/four/uMdGIaZWySMFaC11soOc/${day}`);

  const colRef21 = collection(db, `computer/uMdGIaZWySMFaC11soOc/one/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef22 = collection(db, `computer/uMdGIaZWySMFaC11soOc/two/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef23 = collection(db, `computer/uMdGIaZWySMFaC11soOc/three/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef24 = collection(db, `computer/uMdGIaZWySMFaC11soOc/four/uMdGIaZWySMFaC11soOc/${day}`);


  const colRef31 = collection(db, `electrical/uMdGIaZWySMFaC11soOc/one/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef32 = collection(db, `electrical/uMdGIaZWySMFaC11soOc/two/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef33 = collection(db, `electrical/uMdGIaZWySMFaC11soOc/three/uMdGIaZWySMFaC11soOc/${day}`);
  const colRef34 = collection(db, `electrical/uMdGIaZWySMFaC11soOc/four/uMdGIaZWySMFaC11soOc/${day}`);


  // Get all the documents from the collection
  const querySnapshot11 = await getDocs(colRef11);
  const querySnapshot12 = await getDocs(colRef12);
  const querySnapshot13 = await getDocs(colRef13);
  const querySnapshot14 = await getDocs(colRef14);


  const querySnapshot21 = await getDocs(colRef21);
  const querySnapshot22 = await getDocs(colRef22);
  const querySnapshot23 = await getDocs(colRef23);
  const querySnapshot24 = await getDocs(colRef24);

  const querySnapshot31 = await getDocs(colRef31);
  const querySnapshot32 = await getDocs(colRef32);
  const querySnapshot33 = await getDocs(colRef33);
  const querySnapshot34 = await getDocs(colRef34);





  //first conditiionn
  // Create an empty array to store the places
  const daytimepls = [];


  // Loop through the documents to get the places
  querySnapshot11.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot12.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot13.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot14.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });

  querySnapshot21.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot22.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot23.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot24.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });



  querySnapshot31.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot32.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot33.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  querySnapshot34.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.place; // Get the place field of the data
    daytimepls.push(event); // Add the place to the array
  });
  console.log(daytimepls);

  ///secondd conditionnn
  const daytimeid = [];

  querySnapshot11.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot12.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot13.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot14.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });


  querySnapshot21.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot22.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot23.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot24.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });


  querySnapshot31.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot32.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot33.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });
  querySnapshot34.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.docnam; // Get the place field of the data
    daytimeid.push(event); // Add the place to the array
  });

  console.log(daytimeid);


  //third conditiionn
  const daytimeyeardept = [];
  querySnapshot11.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'communication'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot12.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'communication'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot13.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'communication'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot14.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'communication'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });


  querySnapshot21.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'computer'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot22.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'computer'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot23.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'computer'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot24.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'computer'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });


  querySnapshot31.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'electrical'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot32.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'electrical'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot33.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'electrical'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });
  querySnapshot34.forEach((doc) => {
    const data = doc.data(); // Get the data of the document
    const event = day + data.clock + data.year + 'electrical'; // Get the place field of the data
    daytimeyeardept.push(event); // Add the place to the array
  });


  console.log(daytimeyeardept);


  // forth condition
  const noo = "12:30to2tuesday";


  const first = day + time + places;
  const second = day + time + id;
  const third = day + time + theYear + department;
  const forth = time + day;

  // Get all the documents from the collection
  // const querySnapshot = await getDocs(colRef);


  var idtd = ' ';
  idtd = getid(day, time, theYear);


  if ((chik(daytimepls, first) === false) && (chik(daytimeid, second) === false) && (chik(daytimeyeardept, third) === false) && (noo !== forth)) {


    const washingtonRef = doc(db, `${department}/uMdGIaZWySMFaC11soOc/${theYear}/uMdGIaZWySMFaC11soOc/${day}`, `${idtd}`);

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      docnam: id,
      course: value,
      place: places,
      clock: time,
      day: day,
      year: theYear
    });

    putdata();
    console.log("Document written with ID: ", docRef.id);

  } else {
    alert("this arlraedy added")

  }
}


)


function getid(day, time, theYear) {
  var idtd = "";
  switch (day) {
    case 'sunday':
      idtd = 'sun';
      break;
    case 'monday':
      idtd = 'mon';
      break;
    case 'tuesday':
      idtd = 'tue';
      break;
    case 'wednesday':
      idtd = 'wed';
      break;
    case 'thursday':
      idtd = 'thu';
      break;
    default:
      break;
  }

  switch (time) {
    case '8:30to10:15':
      idtd = idtd + '_8';
      break;
    case '10:15to12:30':
      idtd = idtd + '_10';
      break;
    case '12:30to2':
      idtd = idtd + '_12';
      break;
    case '2to3:30':
      idtd = idtd + '_2';
      break;
    case '3:30to5':
      idtd = idtd + '_3';
      break;
    default:
      break;
  }

  switch (theYear) {
    case 'one':
      idtd = idtd + '_1';
      break;
    case 'two':
      idtd = idtd + '_2';
      break;
    case 'three':
      idtd = idtd + '_3';
      break;
    case 'four':
      idtd = idtd + '_4';
      break;

    default:
      break;
  }
  return idtd

}
//see if the element is in the array or not
function chik(arr, obj) {
  console.log("im in the chikk functionnn");
  if (arr.length === 0) {
    return false;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (obj === arr[i]) {
        console.log("iiiiiiiiiii found  eeeeeeeelmeeeeeeent ")
        return true;
      } else {
        return false;
      }
    }

  }

}

