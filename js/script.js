
for (let i = 1; i <= 100; i++) {
  
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("tutti e due " + i);

  } else if (i % 3 === 0) {
    console.log("tre " + i);
  }

  else if (i % 5 === 0) {
  console.log("cinque " + i);
  }

}
