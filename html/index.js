 let x = "10";
console.log(x);

let y ="using dom manipulation";
console.log([2]);
console.log(y.lastIndexOf("i"));
console.log(typeof Number(x));
console.log(x.endsWith(0));
console.log(y.substring(0,5));
console.log(y.split("s"));
console.log(y.replace("xn"," "));
let heading = document.getElementById("myheading");
heading.innerText = "use my dom";
heading.style.backgroundColor = "red";
heading.style.color="white";
//switch case
sum = 10;
multi = 20;
switch (sum){
case 10:
console.log(10);
break;
}
//for statement pract
for(let i=0;i<10;++i){
console.log(Math.random());
}
//while statement pract
 let z= 0;
 while(z<10){
    console.log("hii");
    console.log("bye");
z++;
 }
//funxtion partice -
 function myfunction(a,b,c){
    let name = "irfan"
    console.log(`hi my name is ${name}`);
  console.log(`i have three friends,${a},${b},${c}`)

 }
 myfunction(true,false,true);


 //function to print sum of array:
 function array(arr=[]){
  let total = 0 ;
  for (i=0;i<arr.length;++i){
    total = total+arr[i];

  }
  return total;
 }
 arrfinal=array([1,2,2,3,30]);
 console.log(arrfinal);