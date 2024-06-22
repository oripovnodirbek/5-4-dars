const red = document.querySelector('#red')
const green = document.querySelector('#green')
const blue = document.querySelector('#blue')
const bloc = document.querySelector('.section_bloc')
const body = document.querySelector('body')


red.addEventListener('click', function() {
    body.style.backgroundColor = 'red';
    bloc.style.backgroundColor = 'blue'
});
green.addEventListener('click', function() {
    body.style.backgroundColor = 'green';
    bloc.style.backgroundColor = 'red'
});
blue.addEventListener('click', function() {
    body.style.backgroundColor = 'blue';
    bloc.style.backgroundColor = 'green'
});


                //     MASALALAR YECHISH
//  1
// function masala1(students) {
//     let sum = 0;
//     let qoshish = '';
//     students.forEach(student => {
//       let result = student.grades.reduce((sum, grade) => sum + grade, 0);
//       let short = result / student.grades.length;

//       if (short > sum) {
//         sum = short;
//         qoshish = student.name;
//       }
//     });
//     return qoshish;
// }
// const students = [
//     { name: 'Ali', age: 20, grades: [80, 85, 90] },
//     { name: 'Vali', age: 22, grades: [88, 94, 72] },
//     { name: 'Anvar', age: 21, grades: [92, 90, 85] }
// ];
// console.log(masala1(students));
  

//  2 
// const products = [
//     {name: 'Kompyuter', narx: 1000, mavjut: true},
//     {name: 'telefon', narx: 700, mavjut: false},
//     {name: 'planshet', narx: 500, mavjut: true},
//     {name: 'monitor', narx: 300, mavjut: true},
// ];
// function masala2(products) {
//     let sum = 0;
//     let result = '';
//     products.forEach(element => {
//         if(element.mavjut && element.narx > sum) {
//             sum = element.narx;
//             result = element.name;
//         }
//     });
//     return result;
// }
// console.log(masala2(products))


//   3 masalani ishlay olmadim lekin albatta organib olaman.

