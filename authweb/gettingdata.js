//imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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


const call1 = document.getElementById("call1");
const call2 = document.getElementById("call2");
const call3 = document.getElementById("call3");
// const call4 = document.getElementById("daat");
const call5 = document.getElementById("delete");

const home = document.getElementById('home');


listofid.forEach(element => {
    document.getElementById(element).style.color = "black";
    
});

call1.addEventListener("click", putdata);
call2.addEventListener("click", putdata);
call3.addEventListener("click", putdata);
// call4.addEventListener("click", putdata);
call5.addEventListener("click", putdata);

 var list = [home , call1,call2,call3];

 


const myTable = document.getElementById('mytable');

home.addEventListener("click", function () {
    myTable.style.display = 'none';
});

call1.addEventListener("click", function(){
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        element.classList.remove("active");
     }
    call1.classList.add("active");

});
call2.addEventListener("click", function(){
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        element.classList.remove("active");
     }
    call2.classList.add("active");

});
call3.addEventListener("click", function(){
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        element.classList.remove("active");
     }
    call3.classList.add("active");

});
home.addEventListener("click", function(){
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        element.classList.remove("active");
     }
    home.classList.add("active");

});
