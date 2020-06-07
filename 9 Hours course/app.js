// let muddi = {
//     name: 'mudassir',
//     age: '18',
//     favFood: 'air',

//     lol: function(){
//         console.log('khan sahib!');
//     }

//     }
    
// muddi.lol();


// let neo = new Date();   

// {
//     let myName = 'mudassir';
//     myName = myName.toUpperCase()
//     console.log(myName);
// }

// let myName = 'mudassir';
// myName = myName.toUpperCase();
// myName = myName.valueOf();
// myName = new String(myName)

// let yourName = new String('lolWorld');
// console.log(typeof(myName));
// console.log(typeof(yourName))


// console.log(Number.MAX_SAFE_INTEGER);

// let meo = 9007199254740090
// console.log(Number.isSafeInteger(meo))

// let x = 27445;
// console.log(Math.pow(-x,1500000) / 9900004450000004546486484564548056845489)

// let x = 5.59999  ;
// console.log(x.toFixed(2));

// let x = new Number(556);
// console.log(typeof(x))

// let x = 'mudassir';
// console.log(`khan ${x}`)


// let x = "sjdskljskladj sdjkldasjsdla sdasdassa \
// sjdskljskladj sdjkldasjsdla sdasdassa\
// sjdskljskladj sdjkldasjsdla sdasdassa";
// console.log(x)
// console.log(x.length    )

// let x = 'mudassir';
// console.log(x.concat(' khan'))


// let x = "hello world is going to be down and may be one world order is coming";
// let y = 'g';
// let z = 'coming';
// console.log(x.includes(y,40));
// console.log(x.indexOf(y, x.indexOf(y) + 1))

// console.log(x.lastIndexOf(y), x.length);




// let x = "hello world is going to be down and may be one world order is coming";
// let y = 'g';
// let z = 'coming';
// console.log(x.substring(3,8));
// console.log(x.substr(3,8));
// console.log(x.slice(3,8));
// console.log(x.toUpperCase());
// console.log(x.toLowerCase());
// let b = prompt("");
// let c = parseInt(b);
// console.log(c)
// let content = (x.repeat(c));
// console.log(content.split(''))
// console.log(x.replace(z))



// {
//     let position = {
//         x: 10,
//         y: 20,
//         values: function() {
//             console.log(`X: ${this.x}, Y: ${this.y}`);
//         }
//     }
//     let myPosition = position; 
//     console.log(position)
//     console.log(myPosition)

//     myPosition.x = 55;
// console.log(myPosition);
// console.log(position);

// position.values()
// }


// let name = prompt('');
// switch(name){
//     case 'mudassir':
//         console.log('hello bro');
//         break;
//     case 'muddi':
//         console.log(`hey ${name}`);
//         break;
//     default:
//         console.log(`helo ${name}`)
// }


// let x = prompt('');
// x === '10' ?  console.log('hello') : console.log('meow')


// {
//     let i = 0;
//     while(i <= 10) {
//         console.log(i);
//         i++;
//     }
// }


    // for(let i = 0; i < 1000 ; i++) {
    //     console.log(i)
    // }




// let password;
//     do{
//         password = prompt('enter your password here')
//     }
//     while(password.toLowerCase() !== "hello")

// for(let i = 10 ; i > 0 ; i--){
//     console.log(i)
// }


// let list = [1, 5 , 6 , 9 , 12 , 7 , 6 , 99 ];
// for(i = 0 ; i < list.length ; i++) {
// console.log(list[i])
// }

// let myString = "jaskjklasd asdjklasdjlf jasdjas;lfi s;oas;f fosfosdpo ffsosfapo ffpdspoad ";
// let charAt = 'f';
// for(let i = 0 ; i < myString.length ; i++){
//     if(myString[i] === charAt){
//         console.log(`${myString[i]} it is found in index ${i}`)
//         break;
//     }
    
// }


// let myString = "hello bro how are you , what's is going on";
// let charAt = '';
// for(let i = 0 ; i < myString.length ; i++){
//     if(myString[i] === "a" || myString[i] === "e" || myString[i] === "i" || myString[i] === "o" ||
//     myString[i] === "u"){
//        continue;
//     }
//     else{
//         console.log(`${myString[i]}`);
    
//     }
// }


    // for(let i = 0; i <=24 ; i++) {
    //     for(let k = 0; k <=60 ; k++) {
    //         for(let l=0; l <=60; l++){
    //             console.log(`Hours ${i} Minutes${k} Seconds${l}`)
    //         }
    //     }
    // }


// console.log(`${myString[i]} it is found in index ${i}`)



// let d = document.getElementById('val');
// for(let i=0; i< 10; i++) {
//     for(let k=i; k >= 0 ; k--) {
//         d.append(k + '');

//     }
//     var br = document.createElement('br');
//     d.appendChild(br);
// }


// let k = [0,1,2,3,4]
// console.log(k.length);
// console.log(k[4])


// let grade = [12 , 'b' , function() {alert('hello ')}]

// grade[2]();

// let grade = [];
// grade[0] = function(){
//     let a = 15;
//     let b = 25;
//     alert(`${a} + ${b} = ${a + b}`);
// }

// grade[0]()

// let k = [];
// k[0] = 1;
// k[1] = 2;
// k[2] = 3;
// k.length = 2500;

// for(let i = 0 ; i < k.length ; i++) {
//     console.log(k[i])
// }

// let k = [];
// k[0] = 1;
// k[1] = 2;
// k[2] = 3;
// k.length = 250;
// k[300] = 115
// console.log(k.length)


// let k = [1,5,5,4,9,3,6,7,1,2];
// k.length = 25
// for(i = 0 ; i < k.length ; i++) {
// if(k[i] !== undefined){
// console.log(k[i])
// }}


// let k = [1,5,6,3,7,8,2,1,5];

// let found = false;
// let search = 3;

// for(let i = 0; i < k.length; i++) {
// if(k[i] === search) {
//     found = true;
// console.log(`${k[i]} this is the value ${i} & the length of the array is ${k.length}`);
// break;
// }

// }


// let k = [1,5,6,3,77,88,22,1,5];

// let largest = k[0];
// for(var i = 0; i < k.length; i++) {
//     if(k[i] > largest) {
     
//     largest = k[i];
        
// }

// }

//     console.log(largest)


// let k = [1,5,6,3,77,88,22,1,5];
// k.length = 30;
// k[34] = 30;
// let count = 0;
// let total = 0 ;

// for(let i = 0; i < k.length ; i++) {
//     if(k[i] !== undefined) {
//         count++;
//         total += k[i];
//     }
// }
//  let avg = total / count;
//  console.log(avg)


// let k = [];
// while(true) {
// let l = prompt('');
// if(l === 'q') {
//     break;
// }
// k.push(l);
// let b = parseInt(k)
// console.log(b )
// }


// let x = [1,2,3,4,5,6,7,8,9];
// let y = x.splice()

// x.reverse()
// x.fill(5, 0 , x.length)
// console.log(x)


// let x = [1,2,3,4,5,6,7,8,9];     
// x.length = 30   
// for(let i = 0 ; i < x.length ; i++) {
//    if(x[i] !== undefined) console.log(x[i]);

// }

// x.forEach(function(item , i ,array) {
//     console.log(item,i , array)
// })


// let myDate = new Date(2020 , 0);
// console.log(myDate)

// let start  = Date.now()
// let x = 0
// for(let i = 0 ; i < 5000000; i++) {
//     x = x + 1 ;
// }
// let end = Date.now()

// let total = end - start ;
// console.log('time took ' + total)
// console.log(x)


// function pow(x , y) {
//     let total = 1;
//     for(let i = 0 ; i < y ; i++) {
//         total *= x;
//     }
//     return total;
// }

// console.log(pow(4 , 3))

// let x = document.getElementsByTagName('div');
// console.log(x.childNodes)

// let x = document.getElementsByTagName('h1')[0];
// let y = document.getElementsByTagName('div');

// console.log(x)

// x.onmouseover = function() {
// console.log('ej');
// y.childNodes[0].nodeValue = 'k'
// }
