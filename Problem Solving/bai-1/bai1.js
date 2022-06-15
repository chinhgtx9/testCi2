var arrA = [1,2,"a",4,7];
var arrB = [1,3,'b',1,2,'a'];
var arrC=[];
var arr = arrA.concat(arrB);
 for(var i = 0; i < arrA.length; i++){
    for(var j = 0; j < arrB.length; j++){
        if(arrA[i] == arrB[j]){
            arrC.push(arrA[i]);
        }
    }
 }

 for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arrC.length;j++){
        if(arr[i] == arrC[j]){
            arr.splice(i,1);
        }
    }
 }
 console.log(arr);