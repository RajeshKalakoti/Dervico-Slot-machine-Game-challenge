//Initialing the array with the iamge names
let images = ['2xBAR', '3xBAR', '7', 'BAR', 'Cherry'];
let slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9;
let blink_text;

let paytableValue = 0;

function startSlotMachine() {
 let balance = document.getElementById("balance").value;
 let paytable = document.getElementById("paytable");
 //clear the blink effect
 clearInterval(blink_text);
 //clearing the borders
 document.getElementById("reel-top").style.border = "none";
 document.getElementById("reel-center").style.border = "none";
 document.getElementById("reel-bottom").style.border = "none";
 //if balance is valid(1 to 5000) 
 if ((1 <= balance) && (balance <= 5000)) {
  //Disabling the elemets
  document.getElementById("balance").disabled = true;
  document.getElementById("mode").disabled = true;
  document.getElementById("reel1-para1").disabled = true;
  document.getElementById("reel1-para2").disabled = true;
  document.getElementById("reel2-para1").disabled = true;
  document.getElementById("reel2-para2").disabled = true;
  document.getElementById("reel3-para1").disabled = true;
  document.getElementById("reel3-para2").disabled = true;
  document.getElementById("spin").disabled = true;
  //calling the function
  SlotMachine();
  //decreasing the balance by 1
  document.getElementById("balance").value = balance - 1;

 } else {
  //balance is invalid(not 1 to 5000)
  alert("Please enter a valid amount as balance(1-5000)");
 }


}





//will return a random number between 0 to 4
function randomIndex() {
 let index = Math.floor((Math.random() * 5));
 return index;
}

//will start the slot machine
function SlotMachine()


{
 //start spining the imagaes after every 50 ms using the setInterval()
 let startSpinColoumnOne = setInterval(spinColoumnOne, 50);
 let startSpinColoumnTwo = setInterval(spinColoumnTwo, 50);
 let startSpinColoumnThree = setInterval(spinColoumnThree, 50);



 //Stopping the spining of the imagaes after 2 seconds  using the clearInterval()
 setTimeout(function() {
  clearInterval(startSpinColoumnOne);

 }, 2000);
 //.5 seconds interval
 setTimeout(function() {

  clearInterval(startSpinColoumnTwo);

 }, 2500);
 //.5 seconds interval
 setTimeout(function() {

  clearInterval(startSpinColoumnThree);
  checkAndUpdateMode();
 }, 3000);
 //.5 seconds interval
 setTimeout(function() {
  calculatePaytable();
  enableElements();
 }, 3200);




}
//enabling the html elemanets
function enableElements() {
 document.getElementById("balance").disabled = false;
 document.getElementById("mode").disabled = false;
 document.getElementById("reel1-para1").disabled = false;
 document.getElementById("reel1-para2").disabled = false;
 document.getElementById("reel2-para1").disabled = false;
 document.getElementById("reel2-para2").disabled = false;
 document.getElementById("reel3-para1").disabled = false;
 document.getElementById("reel3-para2").disabled = false;
 document.getElementById("spin").disabled = false;

}

function checkAndUpdateMode() {

 let mode = document.getElementById("mode").value;
 //if fixed mode is selected 
 if (mode == "fixed") {
  //getting the selected values 
  let symbol1 = images[document.getElementById("reel1-para1").value];
  let symbol2 = images[document.getElementById("reel2-para1").value];
  let symbol3 = images[document.getElementById("reel3-para1").value];

  let position1 = document.getElementById("reel1-para2").value;
  let position2 = document.getElementById("reel2-para2").value;
  let position3 = document.getElementById("reel3-para2").value;


  //updating the images according to the selected values
  if (position1 == "top") {
   slot1 = symbol1;
   document.getElementById('reel-top-slot1Img').src = 'images/' + slot1 + '.png';
  } else if (position1 == "center") {
   slot4 = symbol1;
   document.getElementById('reel-center-slot4Img').src = 'images/' + slot4 + '.png';
  } else if (position1 == "bottom") {
   slot7 = symbol1;
   document.getElementById('reel-bottom-slot7Img').src = 'images/' + slot7 + '.png';
  }




  if (position2 == "top") {
   slot2 = symbol2;
   document.getElementById('reel-top-slot2Img').src = 'images/' + slot2 + '.png';
  } else if (position2 == "center") {
   slot5 = symbol2;
   document.getElementById('reel-center-slot5Img').src = 'images/' + slot5 + '.png';
  } else if (position2 == "bottom") {
   slot8 = symbol2;
   document.getElementById('reel-bottom-slot8Img').src = 'images/' + slot8 + '.png';
  }




  if (position3 == "top") {
   slot3 = symbol3;
   document.getElementById('reel-top-slot3Img').src = 'images/' + slot3 + '.png';
  } else if (position3 == "center") {
   slot6 = symbol3;
   document.getElementById('reel-center-slot6Img').src = 'images/' + slot6 + '.png';
  } else if (position3 == "bottom") {
   slot9 = symbol3;
   document.getElementById('reel-bottom-slot9Img').src = 'images/' + slot9 + '.png';
  }

 }

}

function spinColoumnOne() {
 //getting the random images from the array
 slot1 = images[randomIndex()];
 slot4 = images[randomIndex()];
 slot7 = images[randomIndex()];


 //changing the images 
 document.getElementById('reel-top-slot1Img').src =
  'images/' + slot1 + '.png';
 document.getElementById('reel-center-slot4Img').src =
  'images/' + slot4 + '.png';
 document.getElementById('reel-bottom-slot7Img').src =
  'images/' + slot7 + '.png';

}

function spinColoumnTwo() {
 //getting the random images from the array
 slot2 = images[randomIndex()];
 slot5 = images[randomIndex()];
 slot8 = images[randomIndex()];

 //changing the images 
 document.getElementById('reel-top-slot2Img').src =
  'images/' + slot2 + '.png';
 document.getElementById('reel-center-slot5Img').src =
  'images/' + slot5 + '.png';
 document.getElementById('reel-bottom-slot8Img').src =
  'images/' + slot8 + '.png';

}

function spinColoumnThree() {
 //getting the random images from the array
 slot3 = images[randomIndex()];
 slot6 = images[randomIndex()];
 slot9 = images[randomIndex()];

 //changing the images 
 document.getElementById('reel-top-slot3Img').src =
  'images/' + slot3 + '.png';
 document.getElementById('reel-center-slot6Img').src =
  'images/' + slot6 + '.png';
 document.getElementById('reel-bottom-slot9Img').src =
  'images/' + slot9 + '.png';

}


function updateBalance(winPrice) {
 //updating the balance values with the winning amount
 let paytable = document.getElementById("paytable");
 let balance = parseInt(document.getElementById("balance").value); //converting the text to integer
 balance = balance + winPrice;
 paytable.innerHTML = winPrice;
 //updating the balance
 document.getElementById("balance").value = balance;



}

function calculatePaytable() {
 let paytable = document.getElementById("paytable");
 let winPrice = 0;
 let isPaytableChenge = 0;



 paytable.innerHTML = "0";

 //checking condition forchecking condition for 3 CHERRY symbols on top line 2000
 if ((slot3 == "Cherry") && ((slot1 == "Cherry") && (slot2 == "Cherry"))) {
  winPrice = parseInt(paytable.innerHTML) + 2000;
  updateBalance(winPrice);
  document.getElementById("reel-top").style.border = "2px solid #f50057";
  isPaytableChenge = 1;

 }
 //checking condition for3 CHERRY symbols on center line 1000
 if ((slot6 == "Cherry") && ((slot4 == "Cherry") && (slot5 == "Cherry"))) {
  winPrice = parseInt(paytable.innerHTML) + 1000;
  updateBalance(winPrice);
  document.getElementById("reel-center").style.border = "2px solid #f50057";
  isPaytableChenge = 1;
 }

 //checking condition for3 CHERRY symbols on bottom line 4000
 if ((slot9 == "Cherry") && ((slot7 == "Cherry") && (slot8 == "Cherry"))) {
  winPrice = parseInt(paytable.innerHTML) + 4000;
  updateBalance(winPrice);
  document.getElementById("reel-bottom").style.border = "2px solid #f50057";

  isPaytableChenge = 1;
 }
 //checking condition for3 7 symbols on any line 150
 let cond_7_1 = (slot3 == "7") && ((slot1 == "7") && (slot2 == "7"));
 let cond_7_2 = (slot6 == "7") && ((slot4 == "7") && (slot5 == "7"));
 let cond_7_3 = (slot9 == "7") && ((slot7 == "7") && (slot8 == "7"));
 if ((cond_7_1 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 150;
  updateBalance(winPrice);
  document.getElementById("reel-top").style.border = "2px solid #f50057";
  isPaytableChenge = 1;
 } else if ((cond_7_2 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 150;
  updateBalance(winPrice);
  document.getElementById("reel-center").style.border = "2px solid #f50057";
  isPaytableChenge = 1;
 } else if ((cond_7_3 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 150;
  updateBalance(winPrice);
  document.getElementById("reel-bottom").style.border = "2px solid #f50057";
  isPaytableChenge = 1;
 }



 //checking condition forAny combination of CHERRY and 7 on any line 75
 let cond_Cherry_7_1 = ((slot3 == "Cherry") || (slot3 == "7")) && (((slot1 == "Cherry") || (slot1 == "7")) && ((slot2 == "Cherry") || (slot2 == "7")));
 let cond_Cherry_7_2 = ((slot6 == "Cherry") || (slot6 == "7")) && (((slot4 == "Cherry") || (slot4 == "7")) && ((slot5 == "Cherry") || (slot5 == "7")));
 let cond_Cherry_7_3 = ((slot9 == "Cherry") || (slot9 == "7")) && (((slot7 == "Cherry") || (slot7 == "7")) && ((slot8 == "Cherry") || (slot8 == "7")));
 if ((cond_Cherry_7_1 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 75;
  updateBalance(winPrice);
  document.getElementById("reel-top").style.border = "2px solid #f50057";
  isPaytableChenge = 1;
 } else if ((cond_Cherry_7_2 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 75;
  updateBalance(winPrice);
  document.getElementById("reel-center").style.border = "2px solid #f50057";
  isPaytableChenge = 1;
 } else if ((cond_Cherry_7_3 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 75;
  updateBalance(winPrice);
  isPaytableChenge = 1;
  document.getElementById("reel-bottom").style.border = "2px solid #f50057";
 }

 //checking condition for3 3xBAR symbols on any line 50
 let cond_3_BAR_1 = (slot3 == "3xBAR") && ((slot1 == "3xBAR") && (slot2 == "3xBAR"));
 let cond_3_BAR_2 = (slot6 == "3xBAR") && ((slot4 == "3xBAR") && (slot5 == "3xBAR"));
 let cond_3_BAR_3 = (slot9 == "3xBAR") && ((slot7 == "3xBAR") && (slot8 == "3xBAR"));
 if ((cond_3_BAR_1 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 50;
  updateBalance(winPrice);
  document.getElementById("reel-top").style.border = "2px solid #f50057";
  isPaytableChenge = 1;
 } else if ((cond_3_BAR_2 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 50;
  updateBalance(winPrice);
  document.getElementById("reel-center").style.border = "2px solid #f50057";

  isPaytableChenge = 1;
 } else if ((cond_3_BAR_3 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 50;
  updateBalance(winPrice);
  document.getElementById("reel-bottom").style.border = "2px solid #f50057";

  isPaytableChenge = 1;
 }
 //checking condition for3 2xBAR symbols on any line 20
 let cond_2_BAR_1 = (slot3 == "2xBAR") && ((slot1 == "2xBAR") && (slot2 == "2xBAR"));
 let cond_2_BAR_2 = (slot6 == "2xBAR") && ((slot4 == "2xBAR") && (slot5 == "2xBAR"));
 let cond_2_BAR_3 = (slot9 == "2xBAR") && ((slot7 == "2xBAR") && (slot8 == "2xBAR"));
 if ((cond_2_BAR_1 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 20;
  updateBalance(winPrice);
  document.getElementById("reel-top").style.border = "2px solid #f50057";

  isPaytableChenge = 1;
 } else if ((cond_2_BAR_2 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 20;
  updateBalance(winPrice);
  document.getElementById("reel-center").style.border = "2px solid #f50057";

  isPaytableChenge = 1;
 } else if ((cond_2_BAR_3 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 20;
  updateBalance(winPrice);

  isPaytableChenge = 1;
  document.getElementById("reel-bottom").style.border = "2px solid #f50057";
 }

 //checking condition for3 BAR symbols on any line 10
 let cond_BAR_1 = (slot3 == "BAR") && ((slot1 == "BAR") && (slot2 == "BAR"));
 let cond_BAR_2 = (slot6 == "BAR") && ((slot4 == "BAR") && (slot5 == "BAR"));
 let cond_BAR_3 = (slot9 == "BAR") && ((slot7 == "BAR") && (slot8 == "BAR"));
 if ((cond_BAR_1 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 10;
  updateBalance(winPrice);
  document.getElementById("reel-top").style.border = "2px solid #f50057";

  isPaytableChenge = 1;
 } else if ((cond_BAR_2 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 10;
  updateBalance(winPrice);
  document.getElementById("reel-center").style.border = "2px solid #f50057";

  isPaytableChenge = 1;
 } else if ((cond_BAR_3 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 10;
  updateBalance(winPrice);
  document.getElementById("reel-bottom").style.border = "2px solid #f50057";

  isPaytableChenge = 1;
 }
 //checking condition forCombination of any BAR symbols on any line 5
 let cond_any_BAR_1 = (((slot3 == "BAR") || (slot3 == "2xBAR")) || (slot3 == "3xBAR")) && ((((slot1 == "BAR") || (slot1 == "2xBAR")) || (slot1 == "3xBAR")) && (((slot2 == "BAR") || (slot2 == "2xBAR")) || (slot2 == "3xBAR")));
 let cond_any_BAR_2 = (((slot6 == "BAR") || (slot6 == "2xBAR")) || (slot6 == "3xBAR")) && ((((slot4 == "BAR") || (slot4 == "2xBAR")) || (slot4 == "3xBAR")) && (((slot5 == "BAR") || (slot5 == "2xBAR")) || (slot5 == "3xBAR")));
 let cond_any_BAR_3 = (((slot9 == "BAR") || (slot9 == "2xBAR")) || (slot9 == "3xBAR")) && ((((slot7 == "BAR") || (slot7 == "2xBAR")) || (slot7 == "3xBAR")) && (((slot8 == "BAR") || (slot8 == "2xBAR")) || (slot8 == "3xBAR")));
 if ((cond_any_BAR_1 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 5;
  updateBalance(winPrice);
  document.getElementById("reel-top").style.border = "2px solid #f50057";

  isPaytableChenge = 1;
 } else if ((cond_any_BAR_2 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 5;
  updateBalance(winPrice);
  document.getElementById("reel-center").style.border = "2px solid #f50057";

  isPaytableChenge = 1;
 } else if ((cond_any_BAR_3 == true)) {
  winPrice = parseInt(paytable.innerHTML) + 5;
  updateBalance(winPrice);
  document.getElementById("reel-bottom").style.border = "2px solid #f50057";

  isPaytableChenge = 1;
 }
  

 if (isPaytableChenge == 1) {
  //blink the winning amount in every 1 seconds
  blink_text = setInterval(function() {

   paytable.style.display = (paytable.style.display == 'none' ? '' : 'none');
  }, 1000);
 }

}