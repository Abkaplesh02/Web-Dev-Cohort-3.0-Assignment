// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

const arr=[ {
name:"Abhishek",
age:24,
gender:"Male"
},{
    name:"Ramesh",
    age:32,
    gender:"Male"
},{
    name:"Naina",
    age:28,
    gender:"Female"
}];

console.log(arr);

const output=arr.filter(function (i){
    if(i.age>18 && i.gender==="Male"){
        return i.name;
    }
})

console.log(output);
