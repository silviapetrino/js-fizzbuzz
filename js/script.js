
const myRow = document.getElementById("row");


for (let i = 1; i <= 100; i++) {

const square = document.createElement("div");
square.append (i);
myRow.append(square);
square.classList.add("square-sp");
const fizz = "fizz";
const buzz = "buzz";

if (i % 3 === 0 && i % 5 === 0) {
  square.classList.add("bg-primary");
  square.innerHTML = fizz + buzz;
  console.log("multipli di tre e cinque, casella n." + " " + i);
}

else if (i % 3 === 0) {
  square.classList.add("bg-success");
  square.innerHTML = fizz;
  console.log("multipli di tre, casella n." + " " + i);
}

else if (i % 5 === 0) {
  square.classList.add("bg-danger");
  square.innerHTML = buzz;
  console.log("multipli di cinque, casella n." + " " + i);
}

else {
  square.classList.add("bg-warning");
  console.log(i);
}

}


