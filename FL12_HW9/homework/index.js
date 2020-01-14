
function convert(numbers){
    let newArr = [];
    let a;

     for(let i = 0; i < numbers.length; i++){
    
        if ( typeof numbers[i] == "number"){
             a = String(numbers[i]);
        }  if (typeof numbers[i] == "string"){
            a = Number(numbers[i]);
          }
          newArr.push(a);
    }
    return newArr; 
}
convert([2134, 1345, 34, "5", "4", "44"]);


function executeforEach(a, cp){
    for (let el of a){
        cp(el);
    }
}
executeforEach([1,2,3], function(el){
    console.log(el*2);
});


function mapArray(array){
    let newArray = [];
    let b;

    for(let i = 0; i < array.length; i++){
    
        if ( typeof array[i] == "number"){
             b = Number(array[i]);
        }  if (typeof array[i] == "string"){
            b = Number(array[i]);
          }
          newArray.push(b+3);
    }
    console.log(newArray);
}
mapArray([2 ,"5" ,8]);


function filterArray(filter_arr){
    let rez;
    rez = filter_arr.filter(x => x % 2 === 0);
    console.log(rez);
}
filterArray([2,5,8]);


function flipOver(str) {
        return str.split("").reverse().join("");
    }
    flipOver("hey world");    


function makeListFromRange([firstNum, lastNum]) {
    let arr = [];
    for(let i = firstNum; i <= lastNum; i++){
        arr.push(i);
    }
    console.log(arr);
}
makeListFromRange([2, 7]);


 
function getArrayOfKeys(array, keyOfObject) {
    let result = [];
    const ZERO = 0;
    for (let i = ZERO; i < array.length; i++) {
        result.push(array[i][keyOfObject]);
    }
    return result;
}
getArrayOfKeys([
    { name: "tommy", age: 36 },
    { name: "lee", age: 28 }
], "name");


function substitute(arr122){
    arr122 = arr122.map((x) => {
        if(x<30){
            return x="*";
        } else return x;
    });
    console.log(arr122);
}
substitute([58, 14, 48, 2, 31, 29]);


function date(date, num){
    let mill = 24*60*60*1000*(num-1);
    let a;
    let arr_1;
    let rezult;
    a = new Date(date-mill);
    a = a.toUTCString();
    arr_1 = a.split(" ");
    rezult = arr_1.slice(1, -2);
    rezult = rezult.join("");

    console.log(num+", "+"("+rezult+")");
}
date(new Date(2019, 0 ,2), 1);
date(new Date(2019, 0, 2), 2);
date(new Date(2019, 0, 2),365);

