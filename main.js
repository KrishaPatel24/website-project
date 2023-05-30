// Quiz

//Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
  let score = 0;
  //Question 1
  let qtn1 = document.getElementById("qtn1-in").value.toLowerCase();
  if (qtn1 === "stella") {
    document.getElementById("answer1").innerHTML = `
    <p>Correct!</p>`;
    score = score + 1;
  } else {
    document.getElementById("answer1").innerHTML = `
    <p>Incorrect!! Try again</p>`;
  }

  //Question 2
  let qtn2 = document.getElementById("qtn2-in").value.toLowerCase();
  if (qtn2 === "six" || qtn2 === "6") {
    document.getElementById("answer2").innerHTML = `
    <p>Correct!</p>`;
    score = score + 1;
  } else {
    document.getElementById("answer2").innerHTML = `
    <p>Incorrect!! Try again</p>`;
  }
  //Question 3
  let qtn3 = document.getElementById("qtn3-in").value.toLowerCase();
  if (qtn3 === "morphix") {
    document.getElementById("answer3").innerHTML = `
    <p>Correct!</p>`;
    score = score + 1;
  } else {
    document.getElementById("answer3").innerHTML = `
    <p>Incorrect!! Try again</p>`;
  }
  //Question 4
  let qtn4 = document.getElementById("qtn4-in").value.toLowerCase();
  if (qtn4 === "bloom") {
    document.getElementById("answer4").innerHTML = `
    <p>Correct!</p>`;
    score = score + 1;
  } else {
    document.getElementById("answer4").innerHTML = `
    <p>Incorrect!! Try again</p>`;
  }
  //Question 5
  let qtn5 = document.getElementById("qtn5-in").value.toLowerCase();
  if (qtn5 === "flora") {
    document.getElementById("answer5").innerHTML = `
    <p>Correct!</p>`;
    score = score + 1;
  } else {
    document.getElementById("answer5").innerHTML = `
    <p>Incorrect!! Try again</p>`;
  }
  //Process
  let output = score;
  let percentage = (score / "5") * "100";

  //Output
  document.getElementById("output").innerHTML = score;
  document.getElementById("output2").innerHTML = percentage;
}
