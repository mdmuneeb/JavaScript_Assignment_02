
            // Question 1
// function outer() {
//     let num1 = +prompt("Enter any number");
//     return function () {
//         let num2 = 5;
//         return num1 + num2
//     }
// }
// let number = outer();
// console.log(number())


                // Question 2

// function recursive(array,value) {
//     if (array.length === 0) {
//         return false;
//     } else if (array[0] === value) {
//         return true;
//     } else {
//         return recursive(array.slice(1),value)
//     }
// };

// console.log(recursive([1,2,3,4,5],5))



                    // Question 3
// function add() {
//     sentence = prompt("Enter the paragraph")
//     let para1 = document.createElement("p")
//     let para2 = document.querySelector("p")
//     para2.innertext = sentence   
// }
// let add1 = add()
// console.log(add1)



                    //  Questoin 4
// function addNew(newItem) {
//     let item = document.querySelector("ul");
//     let itemnew = document.createElement("li");
//     itemnew.innerText = newItem;
//     item.append(itemnew);
// };
// let add = addNew("Apple");
// console.log(add);


                    // Question 5
// function color(ref,backcolor){
//     let select = document.querySelector("#"+ref);
//     select.style.backgroundColor = backcolor;
    
// };

// console.log(color("myPara","lightBlue"));




                        //  Question 6
// let list = []

// function provideInformation(UserInput, obj){
//     let id = {
//         name : "abc",
//         fatherName : "def",
//         cnic : 213564897123,
//         address : 213546
//     };
//     list.push(id);
//     console.log(list);
//     let obj = JSON.stringify(list);
//     localStorage.setItem("UserInput",obj)
// };

// console.log(provideInformation("UserInput",stringify))


//                         // Question 7
// function gettingInformatoin(UserInput) {
//     let prevRecord = localStorage.getItem(UserInput);
//     let list = prevRecord ? JSON.parse(prevRecord): [];
//     return list
// };
// console.log(gettingInformatoin("UserInput"))


                            //  Question 8
// function storingObject(){
//     Object = {
//         name : "Muneeb",
//         fatherName : "abc",
//         address : "abc",
//     };
//     newObject = {};
//     for (let key in Object) {
//         localStorage.setItem(key , Object[key]);
//     };
//     for (let key in localStorage) {
//         newObject[key] =localStorage.getItem(key);
//     };
//     console.log(newObject)
// };

// storingObject()