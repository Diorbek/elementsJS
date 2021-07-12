'use strict';

// const box = document.getElementById('box');

// console.log(box);

// // const btns = document.getElementsByTagName('button')[1];
// const btns = document.getElementsByTagName('button');

// console.log(btns[1]);

// const circles = document.getElementsByClassName('circle'); 
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);


//**************************************************************************************** */


const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

    // console.dir(box);

    box.style.backgroundColor = 'blue';
    box.style.width = '500px';
    //kopgina stil beriw css elementga
    box.style.cssText = "background-color: blue; width = '500px";
    //tepada "cssText" yozib qogani oddiy css daqa ketoradi
    //box.style.cssText = `background-color: blue; width = ${num}px`;//peremennie qoyib yozsayam boladi


    // for (let i = 0; i < hearts.length; i++ ) {
    //     hearts[i].style.backgroundColor = 'blue';
    // }
    //tepade tsikl "hearts" peremenniedegi "length"ga teng miqdorda "blue"ga ozgartiradi rangini


    hearts.forEach(item => {
        item.style.backgroundColor = 'blue';
    });

    const div = document.createElement('div');
    //tepada stranitsada paydo bomedi
    //const text = document.createTextNode('I was here');
    //TextNode juda kam iwlatiladi

    div.classList.add('black');

    //document.body.append(div);
    //append oxiriga qowadi element
    //prepend bowiga qowadi element

    //document.querySelector('.wrapper').append(div);
    //tepade yozuv faqat bir matta iwlatilsa agar kop iwlatilsa permennie qiliw kere
    //masalan: wrapper = document.querySelector('wrapper');
    //keyin: wrapper.append(div);
    wrapper.append(div);
    //wrapper.prepend(div);

    // hearts[0].before(div);
    //hearts[0].after(div);

    //circles[0].remove();//ochiradi [] index ga qarab

    //hearts[0].replaceWith(circles[0]);//joyini almawtiriw uchun
    //eski formatlar
    //appendChild
    //wrapper.appendChild(div);
    //wrapper.insertBefore(div, hearts[1]);   
    // wrapper.removeChild(hearts[1]);
    //wrapper.replaceChild(circles[0], hearts[0]);


    div.innerHTML ="<h1>Salom world</h1>";

    //div.textContent = "Hello";//HTML teg qoybomedi

    div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');






    //0
    //btns[1].style.borderRadius = '100%';
    //tepadegi togri yozuv

    //1
    //circles.style.backgroundColor = 'red';
    // bu xato chunki bu psevdomassiv "circles" dan keyin []
    // boliwi wart
















// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// box.style.cssText = 'background-color: blue; width: 500px';

// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue';
// });

//const div = document.createElement('div');
//const text = document.createTextNode('I have been here');

//div.classList.add('black');

// document.body.append(div);

//wrapper.append(div);

//wrapper.prepend(div);

//hearts[0].before(div);
//hearts[0].after(div);
