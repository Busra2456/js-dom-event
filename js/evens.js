console.log('evens.js');


// <!-- ********* MODUL 25-2 ********** -->

// option 1: add onclick function ON THA HTML

// {/* <button onclick="console.log(7)">click me</button> */}

// option 2: add onclick function

function anatherButton(){
      document.body.style.backgroundColor ='red';
} 

// option 3: add onclick function

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick =  busra

function busra(){
      document.body.style.backgroundColor = 'blue'
}

// option 4: add onclick function

const purpleButton =document.getElementById('make-purple') 
purpleButton.onclick = function purple
(){
 document.body.style.backgroundColor='purple'
}



// <!-- ********* MODUL 25-2 ********** -->

// option 5: add onclick function

const makePinkButton = document.getElementById('make-pink');

          
makePinkButton.addEventListener('click',makePink);

function makePink(){
      document.body.style.backgroundColor ='pink';
}

// option 6: add onclick function

const makeGreenButton= document.getElementById('make-green');
makeGreenButton.addEventListener('click',function GreenButton(){
      document.body.style.backgroundColor = 'green';
}) 

// option 7: add onclick function
// important: we will use this sometimes
document.getElementById('make-goldenrod').addEventListener ( 'click',function (){ document.body.style.backgroundColor ='goldenrod';});



// <!-- ********* MODU-25-2 ********** -->
//  <!-- **** Final Dom Event Handlers **** -->