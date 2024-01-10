//Array initialisation
const numbers = [1,2,3,4,5];


        //doubling each value in an array
const doubledNumbers =numbers.map((item,arr,index)=>item*2);
console.log(doubledNumbers);

        //multiplying an item and an index
const multiply=numbers.map((item,index,arr)=>item*index)
console.log(multiply);
        //calculations on an object inside an array
const products = [
    {name:"laptop",price:1000,count:5},{name:"desktop",price:1500,count:2},{name:"printer",price:500,count:3}
] 

const totalProductsValue= products.map((item)=>[{name:item.name,totalValue:item.price*item.count}]);
console.log(totalProductsValue);

        // converting string to numbers
const str=["1","2","3","4","5"];
const numberz=str.map(item=>Number(item));
console.log(numberz);