/*  мінімум  */


function minim (number1, number2){
    
    if(number1 < number2){
        console.log(number1);
    }else{
        console.log(number2);
    }
}

//minim(0, 100);



let minim2 = (number1, number2) => {
    return ((number1 < number2) ? number1 : number2); 
    };

//console.log(minim2(2,4));

/* рекурсія на парність  */

function isEven (number){

    if(number < 0){
        return
    }       
      
    if(number === 0){
        return 'even';
    }else if (number === 1) {
        return 'odd';
    }else{
        return isEven(number - 2)
    }

}

//console.log(isEven(-1));

/*підрахунок конкретних букв*/

function countBs (str , letter){ 
    let caunt = 0;
 
   for(i=0; i <str.length ;i++ ){
      if(str[i] === letter){
        caunt ++;
      }
   }

   console.log(caunt);

}

//countBs('BBggggggB' , 'a');


/* сума діапазону  */


function range (numb1=1, numb2=10, n=1){
   
    let arr = [];  

    if(n<0){
        let k;
        for( k = numb1; k>=numb2; k){   
            arr.push(k);
            k+=n;             
        }
    }else{
        let k;
        for( k = numb1; k<=numb2; k){   
            arr.push(k);
            k+=n;             
        }
    }

  sum(arr);

}

//range(10, 1, -2);

function sum (arr){

console.log(arr)

let result = arr.reduce((sum,current) => sum + current , 0);

console.log(result);

}



/*масив в зворотньому напрямку*/

function reverseArray(arr){
    let newArr = arr.slice();   
    newArr.reverse();

    reverseArrayInPlace2(newArr)
}

//reverseArray([10,15]);


function reverseArrayInPlace(arr){
    let newArr=[];
    for(let i=0; i<arr.length; i++){
        newArr.unshift(arr[i]);       
    }
  
}

function reverseArrayInPlace2(arr){
    let arrLenght = arr.length;

    for(let i =0; i < arrLenght; i++){
    arr[arrLenght + i] =  arr[arrLenght -1 - i];    
    } 

    arr.splice(0, arrLenght);
    console.log(arr);

}

//reverseArrayInPlace2(['a', 'b', 'c']);


/*список*/

function arrayToList(arr){
//{value: 1, rest: {value:2, rest:{ value:3, rest: null}}}
    let counter = arr.length - 1;
    let list = null;

    function creatingList(){
    if(counter >=0){
       let rest = list;     
       list = {};
       list.value = arr[counter];
       list.rest = rest;      
       counter--;
       return creatingList();
    }  return list;
}

return creatingList();

}

//console.log(arrayToList([1,2,3]));

/*список2*/

function listToArray(list){

    let temp = list;
    let arr = [];
    
    function createArr(){
       const {value, rest} = temp;
       if(value) arr.push(value);
       if(rest){
           temp = rest;
           return createArr()
       }else{
           return arr;
       }
    }

    return createArr()
      
}

//console.log(listToArray({value: 1, rest: {value:2, rest:{ value:3, rest: null}}}))

/*список3 рекурсія*/

function nth(obj, index){
    
 let arr =[];
 let temp = obj;

function crateArr(){
  let {value, rest} = temp;
  if(value){
     arr.push(value)
  }
 
  if(rest){
      temp = rest;
      return crateArr();
  }else{
      return arr[index];
  }
 
}

return crateArr();

}


//console.log(nth(arrayToList([10,20,30]), 2));

