
const myRow = document.getElementById("row");

for (let i = 1; i <= 100; i++) {

const div = document.createElement("div");
div.append (i);
myRow.append(div);
div.classList.add("square");
}




// if (i % 3 === 0 && i % 5 === 0) {
    
//   console.log("square " + i);


// } else if (i % 3 === 0) {
//   console.log("tre " + i);


// } else if (i % 5 === 0) {
//   console.log("cinque " + i);


// } else {
//   console.log(i);
// }