
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
}

else if (i % 3 === 0) {
  square.classList.add("bg-success");
  square.innerHTML = fizz;
}

else if (i % 5 === 0) {
  square.classList.add("bg-danger");
  square.innerHTML = buzz;
}

else {
  square.classList.add("bg-warning");
}

}


