//3 create count variable
let counter = 0 ;

//1 create variables
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");
const plusButton = document.getElementById("plus");
//4 create and update counter element
const counterElement = document.getElementById("counter");

//2 set up listening for events
   //minus button
minusButton.addEventListener("click", () => {
    //3.1 what is done
    counter -= 1;  
    //4.1 create and update counter element 
    counterElement.textContent = counter;
});

    //plus button
plusButton.addEventListener("click", () => {
        //3.1 what is done
    counter += 1;  
        //4.1 update counter element 
    counterElement.textContent = counter;
});
    //reset button
resetButton.addEventListener("click", () => {
    //3.1 what is done
counter = 0;  
    //4.1 update counter element 
counterElement.textContent = counter;
});



