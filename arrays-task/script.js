//1 create an array

var arr = [1,2,3,4,5]
console.log(arr)

//2 access an element

var arr1 = ["first", 2 , "third", false , 9.0]
console.log(arr1[2])

//3 change an element

var arr2 = ["value1", "value2","value3",false,true]
console.log(arr2)
arr2[1]=2
console.log(arr2)

//4 find length of array

var arr3 = [12,45,78,90,23,54,76]
console.log(arr3.length)

//5 add an element into array using push()

var arr4 = [false,true,"array",[2,3,4],8.9]
arr4.push(1)
console.log(arr4)

//6 remove element from array using pop()

var arr5 = [1,2,3,4,5]
arr5.pop()
console.log(arr5)

//7 loop an array

 var arr6 = [1,2,34,56,78]
for(i=0;i<arr6.length;i++){
    console.log(arr6[i])
}
//or
for( value of arr6){
    console.log(value)
}
//or
for( i in arr6){
    console.log(arr6[i])
}
//or
var i = 0
while(i<arr6.length){
    console.log(arr6[i])
    i++
}

//8 check an element exist in array or not

var element = 65
var c = 0
function checkValue(arr7){
    for(i of arr7){
        if( i == element){
            c++
        }
    }
    if(c>0){
        return "exist"
    }
    return 'not exist'
}
console.log(checkValue([23,45,67,87]))

//9  copy array into new array

var arr8 = [1,2,3,45]
var copy_arr = arr8.slice(0,arr8.length)
console.log(copy_arr)

//10 convert an array into string using .join()

var arr9 = [23,56,78,43,67]
console.log(arr9.join())