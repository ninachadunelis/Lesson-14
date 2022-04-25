// method 1

// let array1 =[30,20,50,39,40];
// array1.push('javascript','python');
// array1.unshift('html','css');
// console.log(array1);

// let result1=array1.length;
// console.log(result1);

// let result2=array1.pop();
// console.log(result2);

// let result3=array1.shift();
// console.log(result3);
// console.log(array1);

// 2
// let array2=['orange','banana','pear'];
// array2.length;
// console.log(array2);

// let resultarray2=array2.length;
// console.log(resultarray2);

// array2.push('apple', 'ananas');
// console.log(array2);

// array2.unshift('watermelon');
// console.log(array2);

// let resultarray3=array2.length;
// console.log(resultarray3);

// let resultarray4=array2.length;
// console.log(resultarray4);
// array2.splice(2,0 ,'mango');
// console.log(array2);

// array2.shift();
// console.log(array2);
// array2.pop();
// console.log(array2);

// let resultarray5=array2.length;
// console.log(resultarray5);

// 3
// let array3 = [12, 25, 3, 6, 8, 14, 7, 23];
// let resultarray6=array3.map(function (x) {
//     return x /3;
// })
// console.log(resultarray6);

//4

// let array4 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// let resultarray7=array4.filter(value => typeof value == 'number');
// console.log(resultarray7);

// 5
// let languages = ['html', 'css', 'javascript', 'python', 'php'];
// let resultlanguages=languages.filter(x => x.length >3);
// console.log(resultlanguages);

//6 method

let array5= ['academy', 'of', 'digital', 'industries'].reduce(function(accumulator,currentValue){
       return accumulator+' '+currentValue;
},
''
)
console.log(array5);

//method 7

// let array6 = [12, 'google', 32, null, 'yahoo', 25];

// let resultarray8=array6.map(function(item){
//     if( typeof item == 'number'){
//         return item *2;
//     }else if(typeof item == 'string'){
//         return item.toUpperCase();
//     }else{
//          array6.push();
//     }
// }
// )
// console.log(resultarray8);

//method 8

// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// let resultwords=words.filter(x => x.includes('m') || x.includes('M'));
// console.log(resultwords);