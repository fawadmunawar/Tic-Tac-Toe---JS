

let PlayerX = 'O';
let PlayerY = 'X';

let currenPlayer = PlayerX;
let counter = 0;


let tile1 = document.getElementById("one");
let tile2 = document.getElementById("two");
let tile3 = document.getElementById("three");
let tile4 = document.getElementById("four");
let tile5 = document.getElementById("five");
let tile6 = document.getElementById("six");
let tile7 = document.getElementById("seven");
let tile8 = document.getElementById("eight");
let tile9 = document.getElementById("nine");


tile1.addEventListener("click" , () =>{
    if(counter != 1) {
        if(tile1.innerHTML == ''){
        tile1.innerHTML = currenPlayer;
        checkWinner();
        }
    }
})
tile2.addEventListener("click" , () =>{
    if(counter != 1) {
        if(tile2.innerHTML == ''){
        tile2.innerHTML = currenPlayer;
        checkWinner();
        }
    }
})
tile3.addEventListener("click" , () =>{
    if(counter != 1) {
        if(tile3.innerHTML == ''){
        tile3.innerHTML = currenPlayer;
        checkWinner();
        }
    }
})
tile4.addEventListener("click" , () =>{
    if(counter != 1) {
        if(tile4.innerHTML == ''){
        tile4.innerHTML = currenPlayer;
        checkWinner();
        }
    }
})
tile5.addEventListener("click" , () =>{
    if(counter != 1) {
        if(tile5.innerHTML == ''){
        tile5.innerHTML = currenPlayer;
        checkWinner();
        }
    }
})
tile6.addEventListener("click" , () =>{
    if(counter != 1) {
        if(tile6.innerHTML == ''){
        tile6.innerHTML = currenPlayer;
        checkWinner();
        }
    }
})
tile7.addEventListener("click" , () =>{
    if(counter != 1) {
        if(tile7.innerHTML == ''){
        tile7.innerHTML = currenPlayer;
        checkWinner();
        }
    }
})
tile8.addEventListener("click" , () =>{
    if(counter != 1) {
        if(tile8.innerHTML == ''){
        tile8.innerHTML = currenPlayer;
        checkWinner();
        }
    }
})
tile9.addEventListener("click" , () =>{
    if(counter != 1) {
        if(tile9.innerHTML == ''){
        tile9.innerHTML = currenPlayer;
        checkWinner();
        }
    }
})



function checkWinner() {

    //Change Move
    if(currenPlayer == PlayerX) {
        currenPlayer = PlayerY;
    }
        else {
            currenPlayer = PlayerX;
        }

    //Horizontal Check

    if(tile1.innerHTML == tile2.innerHTML && tile1.innerHTML == tile3.innerHTML && tile1.innerHTML != '') {
        tile1.style.color = "red";
        tile2.style.color = "red";
        tile3.style.color = "red";
        counter++;
        
    }


    else if(tile4.innerHTML == tile5.innerHTML && tile4.innerHTML == tile6.innerHTML && tile4.innerHTML != '') {
        tile4.style.color = "red";
        tile5.style.color = "red";
        tile6.style.color = "red";
        counter++;
        
    }


    else if(tile7.innerHTML == tile8.innerHTML && tile7.innerHTML == tile9.innerHTML && tile7.innerHTML != '') {
        tile7.style.color = "red";
        tile8.style.color = "red";
        tile9.style.color = "red";
        counter++;
        
    }

    //Vertical Check

    else if(tile1.innerHTML == tile4.innerHTML && tile1.innerHTML == tile7.innerHTML && tile1.innerHTML != '') {
        tile1.style.color = "red";
        tile4.style.color = "red";
        tile7.style.color = "red";
        counter++;
        
    }


    else if(tile2.innerHTML == tile5.innerHTML && tile2.innerHTML == tile8.innerHTML && tile2.innerHTML != '') {
        tile2.style.color = "red";
        tile5.style.color = "red";
        tile8.style.color = "red";
        counter++;
        
    }


    else if(tile3.innerHTML == tile6.innerHTML && tile3.innerHTML == tile9.innerHTML && tile3.innerHTML != '') {
        tile3.style.color = "red";
        tile6.style.color = "red";
        tile9.style.color = "red";
        counter++;
        
    }

    //Diagonal Check

    else if(tile1.innerHTML == tile5.innerHTML && tile1.innerHTML == tile9.innerHTML && tile1.innerHTML != '') {
        tile1.style.color = "red";
        tile5.style.color = "red";
        tile9.style.color = "red";
        counter++;
        
    }

    //Anti Diagonal

    else if(tile3.innerHTML == tile5.innerHTML && tile3.innerHTML == tile7.innerHTML && tile3.innerHTML != '') {
        tile3.style.color = "red";
        tile5.style.color = "red";
        tile7.style.color = "red";
        counter++;
        
    }
    
}