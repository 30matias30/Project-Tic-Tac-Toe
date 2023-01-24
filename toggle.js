var toggle = document.getElementById('toggle-container');
var body = document.querySelector('*');
var logo = document.querySelector('.volcan');
var toggleLogo = document.querySelector('.toggle');

toggle.onclick = function() {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    logo.classList.toggle('active');
    toggleLogo.classList.toggle('active');
}


let playerToggle = document.getElementById('toggle-players');
let playerTurn = document.querySelector('#toggle-players');



// playerToggle.onclick = function() {

//     if(playerToggle = turn) {
//         let turn = 'x-active';
//         console.log("X"); 
//         playerTurn.classList.remove('x-active');       
//         playerTurn.classList.add('o-active');
//         turn = 'o-active';
//         console.log(turn);
        
        
//     } else {
//         console.log('o');
//         playerTurn.classList.remove('o-active');
//         playerTurn.classList.add('x-active');
//         turn = 'x-active';
//     }
// }