//--------JavaScript Memory Management--------//
 

//প্রত্যেকটা JavaScript Engine দুইটা জিনিস থাকে  CALL STACK and HEAP //
/*
? Call Stack
! Primitive Data Type
* String, Number, Boolean, Underfined, Null, Symbol, Bigint
*/
let fullName = 'Alok Barman';

let result = fullName;

console.log(fullName); 
console.log(result);          //এখানে দুইটার মান একই হওয়ার কারণ fullName ভেরিয়েবলের যে মান সেটাকে result কপি করে নিয়ে এসেছে । এখানে যদি আমি  result মানকে পরিবর্তন করি তাহলে fullName মানের কোন পরিবর্তন হবে না ।

//Example //
let fullName1 = 'Alok Barman';

let result1 = fullName1;
result1 = 'Tomal';           //এখানে আমি result1 মান পরিবর্তন করেছি // এতে করে বোঝা যায় Call Stack কোন ডাটা সেভ করলে  মেন ডাটা কোন পরিবর্তন হবে না // 

console.log(fullName1);
console.log(result1);



/*
? Heap
! Non Primitive Data Type
* Object, Array
*/
let student = {
    name: 'Alok',
    age: 21
};


let teacher =student; 
teacher ={
    name: 'Kamal',     //এখানে আমরা উপরের মানকে সম্পূর্ণ পরিবর্তন করেছি //
    age: 35
};
console.log(student);
console.log(teacher);

  //Object//
let student1 ={
    name: 'Alok',
    age: 21
};

let teacher1 = student;
teacher1.name = 'Kamal';
teacher1.age = 45;

console.log(teacher1);
console.log(student);         //এখানে Heap এর মধ্যে যে ডাটা সেভ হোক না কেন সেটা হোক Object, Array  সে টোটাল তথ্যটাকে নির্দেশ করে বলে এটাই আমার মূল তথ্য । এবং পরে যে তথ্য গুলো নেয়া হয়েছিল  সে তথ্য গুলোকে একই দিকে নির্দেশ করে । বলে এই তথ্য গুলোকে ব্যবহার করতে পারো বা পরিবর্তন করে ব্যবহার করতে পার । ফলে একই ডাটা যে দুই জন কাজ করছে এতে করে মূল যে ফাইল সেটা পরিবর্তন হয়ে যায় । //

//Array//
let car = ['BMW', 'Lamborghini', 'Bugatti'];

let newCar =car;

console.log(car);
console.log(newCar);  



let car1 = ['BMW', 'Lamborghini', 'Bugatti'];

let newCar1 =car1;
newCar1[0] = 'Tesla';

console.log(car1);
console.log(newCar1);   //এখানে প্রথমে মান ছিল (3) ['BMW', 'Lamborghini', 'Bugatti'] তবে পরে  newCar1[0] = 'Tesla'; দেওয়ার কারণে মান হয়ে গেছে ['Tesla', 'Lamborghini', 'Bugatti'] এর কারণ নির্দেশ করে বলে দিচ্ছে newCar =car  ফলে car1 এবং newCar1 একই ['BMW', 'Lamborghini', 'Bugatti'] মান কে নির্দেশ করে দিচ্ছ । এতে করে যখন আমরা newCar1[0] লিখে BMW পরিবর্তন করে Tesla লিখে দিচ্ছি  তখন BMW পরিবর্তন করে  হয়ে যাচ্ছে Tesla //
