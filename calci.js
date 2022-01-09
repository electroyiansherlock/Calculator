let ans = "" ;
let val1  = 0;
let val2  = 0;
let total = 0 ;    // This will always be holding the previous result.
let last = "" ;
let sym = "" ;
let grandTotal = 0 ;       // this value will be resetted only after the reset button ie; (AC) is pressed.

let operation = -1 ;    // This will be hold " 1/2/3/4 for addition/subtraction/multiply/division" respectively.

document.getElementById('display').defaultValue = 0 ;

let lst = [] ;     // this is the list that we are maintaining which will be displayed when someone will check the operations.
let count =  0 ;      // This will be holding how much time the = button or ENTER key is pressed...

document.getElementById('zero').addEventListener('click', function(){
    ans += "0" ;
    document.querySelector('#display').textContent = ans ;
}) ;

document.getElementById('one').addEventListener('click', function(){
    ans += "1" ;
    document.querySelector('#display').textContent = ans ;
}) ;

document.getElementById('two').addEventListener('click', function(){
    ans += "2" ;
    document.querySelector('#display').textContent = ans ;
}) ;

document.getElementById('three').addEventListener('click', function(){
    ans += "3" ;
    document.querySelector('#display').textContent = ans ;
}) ;

document.getElementById('four').addEventListener('click', function(){
    ans += "4" ;
    document.querySelector('#display').textContent = ans ;
}) ;

document.getElementById('five').addEventListener('click', function(){
    ans += "5" ;
    document.querySelector('#display').textContent = ans ;
}) ;

document.getElementById('six').addEventListener('click', function(){
    ans += "6" ;
    document.querySelector('#display').textContent = ans ;
}) ;


document.getElementById('seven').addEventListener('click', function(){
    ans += "7" ;
    document.querySelector('#display').textContent = ans ;
}) ;

document.getElementById('eight').addEventListener('click', function(){
    ans += "8" ;
    document.querySelector('#display').textContent = ans ;
}) ;

document.getElementById('nine').addEventListener('click', function(){
    ans += "9" ;
    document.querySelector('#display').textContent = ans ;
}) ;

/*
    For maintaining the continuity of the operations, We have to check whether the total variable already has some
    value or not.
*/


document.getElementById('plus').addEventListener('click', function(){
    
    console.log(`The total is : ${total}`) ;

    if(total != 0)
    {
        val1 = total ;
    }

    else
    {
        val1 = Number(ans) ; 
        let temp = ans ;
        ans = "" ;
        temp += "+" ;

        document.getElementById('display').textContent = temp; 
    }

    operation = 1 ;
    

}) ;

document.getElementById('minus').addEventListener('click', function(){
    
    if(total != 0)
    {
        val1 = total ;
    }

    else
    {
        val1 = Number(ans) ;
        let temp = ans ;
        ans = "" ; 
        temp += "-" ;

        document.getElementById('display').textContent = temp; 
    }

    operation = 2 ;

}) ;


document.getElementById('multiply').addEventListener('click', function(){
    
    if(total != 0)
    {
        val1 = total ;
    }

    else
    {
        val1 = Number(ans) ; 
        let temp = ans ;
        temp += "*" ;
        ans = "" ;

        document.getElementById('display').textContent = temp; 
    }

    operation = 3 ;

}) ;

document.getElementById('divide').addEventListener('click', function(){
    
    if(total != 0)
    {
        val1 = total ;
    }

    else
    {
        val1 = Number(ans) ; 
        let temp = ans ;
        ans = "" ;
        temp += "/" ;
        
        document.getElementById('display').textContent = temp; 
    }

    operation = 4 

}) ;

document.getElementById('equal').addEventListener('click', function(){
    
    val2 = Number(ans) ;
    ans = "" ;

    console.log(`The value of val1 is : ${val1}`) ;
    console.log(`The value of val2 is : ${val2}`) ;
    console.log(`The total is : ${total}`) ;
    console.log(`The value of operation is : ${operation}`) ;

    if(operation === 1)
    total = val1 + val2 ;

    else if(operation === 2)
    total = val1 - val2 ;

    else if(operation === 3)
    total = val1 * val2 ;

    else
    total = val1/val2 ;

    grandTotal = total ;

    document.getElementById('display').textContent = grandTotal; 

   
    lst.push(val1) ;
    
    if(operation === 1)
    lst.push("+") ;

    if(operation === 2)
    lst.push("-") ;

    if(operation === 3)
    lst.push("*") ;

    if(operation === 4)
    lst.push("/") ;

    lst.push(val2) ;


   

}) ;

document.querySelector('#reset').addEventListener('click', function(){
    ans = "" ;
    total = 0 ;
    grandTotal = 0 ;
    val1 = 0 ;
    val2 = 0 ;
    document.querySelector('#display').textContent = 0 ;
    console.log(`Calculator is resetted...`) ;
}) ;

// document.querySelector('.sign').addEventListener('click', function(e){

//     // We will store the value in the string (ans) in the val1.

//     let val1 = Number(ans) ;
//     let temp = ans ;
//     ans = "" ;

//     if(e.key === '+')
//     {
//         ans += "+" ;
//         total += val1 ;
//     }
    

//     if(e.key === '-')
//     {
//         ans += "-" ;
//         total -= val1 ;
//     }


//     if(e.key === '*')
//     {
//         ans += "*" ;
//         total *= val1 ;
//     }


//     if(e.key === '/')
//     {
//         ans += "/" ;
//         total /= val1 ;
//     }

//     document.querySelector('#display').textContent = total ;

// });

// document.querySelector('#equal').addEventListener('click', function(){
//     ans = "" ;
//     document.querySelector('#display').textContent = total ;
// })



window.addEventListener('keydown', onKeyDown, true);
// window.addEventListener('keyup', onKeyUp, true);


/*

Keycodes : 0   -->  96 
            +  --> 107
            -  --> 109
            *  --> 106
            /  --> 111
            .  --> 110
            Enter --> 13
            tab --> 9
            shift --> 16
            a --> 65
            alt --> 18

*/

function onKeyDown(evt) {
  
  let keycode = evt.keyCode ;

    if(keycode === 96)      // Means 0 is pressed.
    {
        ans += "0" ;
        document.querySelector('#display').textContent = ans ;
    }

    else if(keycode === 97)     // Means 1 is pressed and 97 is the keycode of the 1 button.
    {
        ans += "1" ;
        document.querySelector('#display').textContent = ans ;
    }

    else if(keycode === 98)
    {
        ans += "2" ;
        document.querySelector('#display').textContent = ans ;
    }

    else if(keycode === 99)
    {
        ans += "3" ;
        document.querySelector('#display').textContent = ans ;
    }

    else if(keycode === 100)
    {
        ans += "4" ;
        document.querySelector('#display').textContent = ans ;
    }

    else if(keycode === 101)
    {
        ans += "5" ;
        document.querySelector('#display').textContent = ans ;
    }

    else if(keycode === 102)
    {
        ans += "6" ;
        document.querySelector('#display').textContent = ans ;
    }

    else if(keycode === 103)
    {
        ans += "7" ;
        document.querySelector('#display').textContent = ans ;
    }

    else if(keycode === 104)
    {
        ans += "8" ;
        document.querySelector('#display').textContent = ans ;
    }

    else if(keycode === 105)
    {
        ans += "9" ;
        document.querySelector('#display').textContent = ans ;
    }

    else if(keycode === 106)       // Means multiplication (*) needs to be done.
    {   
        if(total !== 0)
        val1 = total ;

        else
        {
            val1 = Number(ans) ;
            let temp = ans ;
            ans = "" ;
            temp += "*" ;
            document.getElementById('display').textContent = temp ;
        }

        operation = 3 ;
    }   

    else if(keycode === 107)      // Addition ka keycode (+)
    {
        if(total !== 0)
        val1 = total ;

        else
        {
            val1 = Number(ans) ;
            let temp = ans ;
            ans = "" ;
            temp += "+" ;
            document.getElementById('display').textContent = temp ;
        }

        operation = 1 ;

    }

    else if(keycode === 109)     // Subtraction (-)
    {
        if(total !== 0)
        val1 = total ;

        else
        {
            val1 = Number(ans) ;
            let temp = ans ;
            ans = "" ;
            temp += "-" ;
            document.getElementById('display').textContent = temp ;
        }

        operation = 2 ;
    }

    else if(keycode === 111)    // division (/)
    {
        if(total !== 0)
        val1 = total ;

        else
        {
            val1 = Number(ans);
            let temp = ans ;
            ans = "" ;
            temp += "/" ;
            document.getElementById('display').textContent = temp ;
        }

        operation =  4;
    }

    else if(keycode === 13)    // Means "enter" is pressed which is equal to the "=" operation of clicking.
    {
        val2 = Number(ans) ;
        ans = "" ;

        console.log(`The value of val1 is : ${val1}`) ;
        console.log(`The value of val2 is : ${val2}`) ;
        console.log(`The value of total is : ${total}`) ;
        console.log(`The value of operation is : ${operation}`) ;

        if(operation === 1)
        total = val1 + val2 ;

        else if(operation === 2)
        total = val1-val2 ;

        else if(operation === 3)
        total = val1 * val2 ;

        else if(operation === 4)
        total = val1/val2 ;

        grandTotal = total ;

        document.getElementById('display').textContent = grandTotal ;

        lst.push(val1) ;
    
        if(operation === 1)
        lst.push("+") ;

        if(operation === 2)
        lst.push("-") ;

        if(operation === 3)
        lst.push("*") ;

        if(operation === 4)
        lst.push("/") ;

        lst.push(val2) ;

    }

    else if(keycode === 36)   // Means "HOME" key is pressed to reset the calculator...
    {
        ans = "" ;
        total = 0 ;
        val1 = 0 ;
        val2 = 0 ;
        grandTotal = 0 ;

        console.log(`The calcultor is resetted using HOME key (keyboard event from the keyCode...)`) ;
        document.getElementById('display').textContent = 0 ;
    }

    else{
        console.log(`The keycode for the key pressed is : ${evt.keyCode}`) ;
    }

} ;

document.getElementById('check').addEventListener('click', function(){

    let dis = "" ;
    dis += lst[count] ;
    count++ ;

    dis += "          " ;

    dis += lst[count] ;
    count++ ;

    document.getElementById('display').textContent = dis ;

}) ;
