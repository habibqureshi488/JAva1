
// switch (userInput) {
//   case 1:
//   case 2:
//   case 4:
//   case 5:
//   case 6:
//   case 8:
//   case 9:
//     console.log("Better Luck Next Time");
//     break;
//   case 3:
//     console.log("Congratulations! You Win a Brand New Honda Bike");
//     break;
//   case 7:
//     console.log("Congratulations! You Win a Honda Civic Rs Turbo");
//     break;
//   case 10:
//     console.log("Congratulations! You Win a Sogo ka Generator Iron Juicer Blender");
//     break;
//   default:
//     console.log("Invalid input. Please enter a number between 1 and 10.");
//     break;
// }



// let randomNumber = Math.floor(Math.random() * 10) + 1;


// switch (randomNumber) {
//   case 1:
//   case 2:
//   case 4:
//   case 5:
//   case 6:
//   case 8:
//   case 9:
//     console.log("Better Luck Next Time");
//     break;
//   case 3:
//     console.log("Congratulations! You Win a Brand New Honda Bike");
//     break;
//   case 7:
//     console.log("Congratulations! You Win a Honda Civic Rs Turbo");
//     break;
//   case 10:
//     console.log("Congratulations! You Win a Sogo ka Generator Iron Juicer Blender");
//     break;
//   default:
//     console.log("I cannot determine the current time.");
//     break;
// }


// ********************* _____ ----------!!!`~`(((Chapter No 3)))`~`!!!---------- _____  *********************

// Advance Data type 
// 1. Object

// let student_Father_Name = "";
// let student_Class = "";
// let student_Address = "";
// let student_Email = "";
// let student_City = "";
// let student_Name = "";
// let student_School_Name = "";
// let student_PhoneNo = "";

// Arrays Practice at Home.......!




// let a = ["Milk" , "Bread" , "Apples"]
// let size = a.length;
// a[1]="Banana";
// console.log(a)

// let a = ["Milk" , "Bread" , "Apples"]
// a.splice(2,0,"orange");
// console.log(a)

// let a = ["Milk" , "Bread" , "Apples1" , "Apples"]
// a.splice(2,1,"orange");
// console.log(a)

// let a = ["Milk" , "Bread" , "Guava" , "Apples"]
// let size  = a.lenght;
// a.splice(2,0,"orange");
// a.splice(3,0,"Lehcee");
// a.splice(4,0,"Mango" ,"Kiwi" , "Peanut butter");
// console.log(a)


// array Mreginn

// let a = ["Milk" , "Bread" , "Oats"];
// let b = ["Orange" , "Bananas" , "Apples"];
// let c = a.concat(b);

// console.log(a)
// console.log(b)
// console.log(c)

// delete LAst Item in ARRay

// let a = ["Milk" , "Bread" , "Oats"];
// let b = ["Orange" , "Bananas" , "Apples"];
// let c = a.concat(b);

// console.log(a)
// console.log(b)
// console.log(c)
// c.pop();
// console.log(c);
// last console is important

// delete frist Item in ARRay

// let a = ["Milk" , "Bread" , "Oats"];
// let b = ["Orange" , "Bananas" , "Apples"];
// let c = a.concat(b);

// console.log(a)
// console.log(b)
// console.log(c)
// c.shift();
// console.log(c);

// add frist item in array 

// let a = ["Milk" , "Bread" , "Oats"];
// let b = ["Orange" , "Bananas" , "Apples"];
// let c = a.concat(b);

// console.log(a)
// console.log(b)
// console.log(c)
// c.unshift("Juice");
// console.log(c);


// line wise name calll in array (shorting Data)

// let a = ["Milk" , "Bread" , "Oats"];
// let b = ["Orange" , "Bananas" , "Apples"];
// let c = a.concat(b);
// console.log(c)
// c.sort();
// console.log(c)

// with number (shorting data)\

// let num =  [1,100,32,35,64,76,54,45,43,65,87,875,54,757,36,46,78,89]
// console.log(num);
// num.sort();
// console.log(num);

// line wise name calll in array (shorting Data) re-vers


// let a = ["Milk" , "Bread" , "Oats"];
// let b = ["Orange" , "Bananas" , "Apples"];
// let c = a.concat(b);
// console.log(c)
// c.reverse();
// console.log(c)


// practice

// let empty = []
// empty[0] = "Milk" 
// empty[1] = "Bread" 
// empty[2] = "Apple"
// empty.splice(1,0,"Banana","Eggs");
// empty.pop();
// // empty.short();
// empty.splice(2,0,"Carrot","Lettuce");
// let em = ["juices", "pop"]
// let final = empty.concat(em);
// final.pop();

// console.log(empty)
// console.log(em)
// final.sort();
// console.log(final)


// Index

// let num =  ["Orange" , "Bananas" , "Apples"]
// let index = num.indexOf(35)

// console.log(num)
// console.log(index)

// // Index last

// let num1 =  ["Orange" , "Bananas" , "Apples"]
// let index1 = num1.lastIndexOfindexOf(35)

// console.log(num1)
// console.log(index1)


// let company = {
//     companyName: "Healthy Candy",
//     activity: "food manufacturing",
//     address: {
//        street: "2nd street",
//        number: "123",
//        zipcode: "33116",
//        city: "Miami",
//        state: "Florida"
//     },
//     yearOfEstablishment: 2021
//  };
//  console.log(company.address.number)


// let company = {
//     companyName: "Healthy Candy",
//     activity: ["food manufacturing","food manufacturing","food manufacturing"],
//     address: {
//        street: "2nd street",
//        number: "123",
//        zipcode: "33116",
//        city: "Miami",
//        state: "Florida"
//     },
//     yearOfEstablishment: 2021
//  };
//  console.log(company.address.number)


let company = { companyName: "Healthy Candy",
activities: [ "food manufacturing",
"improving kids' health",
"manufacturing toys"],
address: [{
street: "2nd street",
number: "123",
zipcode: "33116",
city: "Miami",
state: "Florida"
},
{
street: "1st West avenue",
number: "5",
zipcode: "75001",
city: "Addison",
state: "Texas"
}],
yearOfEstablishment: 2021
};

console.log(company.address[0].city);
console.log(company.address[1].zipcode);
console.log(company.address[1].city);


// End Chapter 3


// let people = {
//     friends: []
//   };
  
  
//   let  friend1 = {
//     firstName: "Murtaza",
//     lastName: "Hussain",
//     id: 1
//   };
  
//   let friend2 = {
//     firstName: "Umer",
//     lastName: "Farroq",
//     id: 2
//   };
  
//  let friend3 = {
//     firstName: "M",
//     lastName: "ALi",
//     id: 3
//   };
  
 
//   people.friends.push(friend1);
//   people.friends.push(friend2);
//   people.friends.push(friend3);
  
//   console.log(people.friends[1]);
//   console.log(people.friends[0]);
//   console.log(people.friends[2]);
//   console.log(people);
  
// const myArr1 = [1,3,5,6,8,9,15];
// console.log(myArr1.indexOf(0));
// console.log(myArr1.indexOf(3));


const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2);
console.log(myArr2[2]);

const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]);