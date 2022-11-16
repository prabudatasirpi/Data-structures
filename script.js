//1.Declare a Integer Array
var arr=[1,2,3,4];
console.log(arr);
document.getElementById('demo').innerHTML = " Output: " + arr;

//2.Print sum of all elements in arrays

var arr = [1,2,3,4]
var sum = 0;
for (let i = 0; i < arr.length; i++) {
   sum += arr[i];
}
document.getElementById('demo1').innerHTML="Input : " + " " + arr + " Output: " + sum;

//3.Declare a Linked List with 5 to 10 data
var list = [
  { empolye: "Ajith", empolyeid: 20052, city: "chennai"},
  { empolye: "Bala", empolyeid: 20053, city: "Tirunelveli" },
  { empolye: "Chandru", empolyeid: 20054, city: "Salem"},
  { empolye: "Dinesh", empolyeid: 20055, city: "Madurai"},
  { empolye: "Ezhil", empolyeid: 20056, city: "Nellai"},
];
console.log(list);
for(i=0;i<list.length;i++){
    document.getElementById('demo3').innerHTML+= "Output :" + list[i].empolye + '<br>' +  list[i]. empolyeid + '<br>' +  list[i]. city + '<br>' + "" +'<br>';
}

//4.Reverse the list with Stack
function reverse(str) {
   let stack = [];
   for (let i = 0; i < str.length; i++) {
       stack.push(str[i]);
   }
   let reverseStr = '';
   while (stack.length > 0) {
       reverseStr += stack.pop();
   }
   return reverseStr;
}
document.getElementById('demo4').innerHTML= "Output: "+ typeof reverse("Welcome");


//5.Pass the even index elements into Queue
let a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
for(i=1;i<a.length;i++){
    if(i%2==0){
        document.getElementById('demo5').innerHTML += a[i] + '<br>';
    }
}

//6.Create a Map and Pass the odd index elements in Map

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },

];

// const kvArray.map(({ key, value }) =>{ (key) % 2 ? ( value ) :''});

const reformattedArray = []; 
kvArray.map(({ key, value }) => { key % 2 ? reformattedArray.push(value) : ''})

document.getElementById('demo6').innerHTML=reformattedArray;


//7.Print Map, stack, queue, Linked List
//Map
let john = { name: 'Xxxx' },
  lily = { name: 'Yyyy' },
  peter = { name: 'Zzzz' };
let userRoles = new Map([
  [john, 'admin'],
  [lily, 'editor'],
  [peter, 'subscriber'],
]);
for (const user of userRoles.keys()) {
  console.log(user.name);
  document.getElementById('demo7').innerHTML +=  user.name + '<br>';
}

//Stack
let data= [];
let currentsize = data.length;
let max=5;
function push(newVal){
  data[currentsize]=newVal;
}
push(20);
console.log(data);
document.getElementById('stack').innerHTML=data;

//Queue
 const queue = []
 const pushed = queue.push(1, 2)
 console.log(queue)
 const shifted = queue.shift()
console.log(queue, pushed, shifted)
document.getElementById('queue').innerHTML += queue,pushed,shifted;

//Linkedlist
var list = [
  { name: 'Jhon', id: 8365 },
];
for(i=0;i<list.length;i++){
  console.log(list[i].name,list[i].id);
    document.getElementById('list').innerHTML+=list[i].name +'<br>';
}


//8.Check the expression is valid or not using Stack

function areBracketsBalanced(expr)
{
	let stack = [];
	for(let i = 0; i < expr.length; i++)
	{
		let x = expr[i];

		if (x == '(' || x == '[' || x == '{')
		{
			stack.push(x);
			continue;
		}
		if (stack.length == 0)
			return false;
			
		let check;
		switch (x){
		case ')':
			check = stack.pop();
			if (check == '{' || check == '[')
				return false;
			break;

		case '}':
			check = stack.pop();
			if (check == '(' || check == '[')
				return false;
			break;

		case ']':
			check = stack.pop();
			if (check == '(' || check == '{')
				return false;
			break;
		}
	}
	return (stack.length == 0);
}
let expr = "([{}])";
if (areBracketsBalanced(expr))
  document.getElementById('demo8').innerHTML= "Balanced";
else
  document.getElementById('demo8').innerHTML= "Not Balanced";
  console.log(areBracketsBalanced(expr));