/*  Scenario 1: Online Food Delivery
Question:
You are simulating an online food ordering system like UberEats or Zomato. The process
includes:
1. Order received (1 second)
2. Preparing food (3 seconds)
3. Packing food (2 seconds)
4. Assigning a delivery person (2 seconds)
5. Delivering food (4 seconds)
Each step should be a function returning a Promise, resolving with a message like
"Order received" , "Food prepared" , etc.
Write code using Promise chaining to execute these steps in order.
*/

// console.log("Online Food Delivery.....");

// function orderReceived(){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             resolve("Order Received successfully")
//             //reject("Order Received Failed")
//         },1000);
//     });
// }
// function preparingFood(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Prepared food successfully")
//             //reject("Preparing Food Failed")
//         },3000);
//     });
// }
// function packingFood(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("packing food successfully")
//             //reject("Packing Food Failed")
//         },2000);
//     });
// }
// function assigningaDeliveryperson(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Assigning a delivery person Successfully")
//             //reject("Assigning a delivery person Failed")
//         },2000);
//     });
// }
// function deliveringFood(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Delivering Food Successfully")
//             //reject("Delivering Food Failed")
//         },4000);
//     });
// }
// orderReceived()
//         .then(res => { console.log(res); return preparingFood()})
//         .then(res => { console.log(res); return packingFood()})
//         .then(res => {console.log(res); return assigningaDeliveryperson()})
//         .then(res => {console.log(res); return deliveringFood()})
//         .then(res => {console.log(res); })
//         .catch(err => {console.error(err); })
                                                 
/*
Scenario 2: Movie Ticket Booking
Question:
You are simulating a movie ticket booking system like BookMyShow. The booking process
includes:
1. Selecting seats (2 seconds)
2. Processing payment (3 seconds)
3. Generating ticket (1 second)
4. Sending confirmation email (2 seconds)
Each step should be a function returning a Promise.
Write code using Promise chaining to ensure these steps happen in the correct
sequence.
*/

// console.log(" Movie Ticket Booking.....")

// function selectingSeats(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("selecting Seats Successfully")
//             //reject("selecting seats Failed")
//         },2000);
//     });
// }
// function ProcessingPayment(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("processing payment successfuuly")
//             //reject("processing payment Failed")
//         },3000);
//     });
// }
// function generatingTicket(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>(
//             resolve("Generating Ticket Successfully")
//             //reject("Generating Ticket Failed")
//         ),1000);
//     });
// }
// function sendingEmail(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("sending confirmation email successfully")
//             //reject("sending confirmation email Failed")
//         },2000)
//     })
// }
// selectingSeats()
//             .then(res => { console.log(res); return ProcessingPayment()})
//             .then(res => { console.log(res); return generatingTicket()})
//             .then(res => {console.log(res); return sendingEmail()})
//             .then(res => {console.log(res); })
//             .catch(err => { console.error(err); })

/*
Scenario 3: Car Service Center
Question:
You are simulating a car servicing system. The servicing process includes:
1. Car check-in (1 second)
2. Oil change (2 seconds)
3. Engine check (3 seconds)
4. Car wash (2 seconds)
5. Final quality check (2 seconds)
Each step should return a Promise that resolves with a status message like "Car
check-in complete" , "Oil changed" , etc.
Write a function using Promise chaining to ensure all steps happen sequentially.
*/

// console.log(" Car Service Center......")

// function carCheckin(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             resolve("Check-in completed");
//             //reject("Check-in Failed");
//         },1000);
//     });
// }
// function oilChange(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Oil Change completed");
//             //reject("oil changed Failed");
//         } , 2000);
//     });
// }
// function engineCheck(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Engine check Completed")
//             //reject("Engine Check Failed")
//         } ,3000);
//     });
// }
// function carWash(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Car wash completed")
//             //reject("Car wash Failed")
//         } ,2000)
//     });
// }
// function finalQualityCheck(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Final quality check completed")
//             //reject("Final quality check Failed")
//         } ,2000);
//     });
// }
// carCheckin()
//     .then(res => {console.log(res); return oilChange(); })
//     .then(res => {console.log(res); return engineCheck(); })
//     .then(res => {console.log(res); return carWash(); })
//     .then(res => {console.log(res); return finalQualityCheck(); })
//     .then(res => {console.log(res); })
//     .catch(err => {console.error(err); })

/*
Scenario 4: Laptop Repair Service
Question:
A laptop repair center follows these steps to fix a laptop:
1. Diagnosing issue (3 seconds)
2. Replacing faulty parts (4 seconds)
3. Updating software (2 seconds)
4. Final testing (2 seconds)
5. Returning to customer (1 second)
Each step should be a function returning a Promise.
Write code using Promise chaining to execute these steps in order.

*/

// console.log("Laptop Repair Service......")

// function diagnosingIssue(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve("Diagnosing issue completed"),3000);
//     });
// }
// function replacingParts(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve("Replacing faulty parts completed"),4000);
//     });
// }
// function updatingSoft(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve("Updating software completed"),2000);
//     });
// }
// function finalTesting(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve("Final testing completed") ,2000);
//     });
// }
// function returnToCustomer(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve("Return To customer Completed"),1000);
//     });
// }
// diagnosingIssue()
//         .then(res => { console.log(res); return replacingParts(); })
//         .then(res => { console.log(res); return updatingSoft(); })
//         .then(res => { console.log(res); return finalTesting(); })
//         .then(res => { console.log(res); return returnToCustomer(); })
//         .then(res => { console.log(res); })

/*
Scenario 5: Online Course Enrollment
Question:
A student is enrolling in an online course. The process includes:
1. Checking course availability (1 second)
2. Processing payment (3 seconds)
3. Generating enrollment ID (1 second)
4. Sending course materials (2 seconds)
5. Granting access to live classes (2 seconds)
Each step should return a Promise resolving with a message.
Write code using Promise chaining to execute these steps in sequence.
*/

// console.log("Online Course Enrollment..")

// function checkCourse(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve("Checking course availability completed"),1000);
//     });
// }
// function paymentProcessing(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve("Processing payment completed"),3000);
//     });
// }
// function generateId(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve("Generating enrollment ID completed"),1000);
//     });
// }
// function sendMaterials(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve("Sending course materials completed"),2000)
//     });
// }
// function accessToClasses(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve("Granting access to live classes completed"),2000)
//     });
// }

// checkCourse()
//         .then(res => { console.log(res); return paymentProcessing(); })
//         .then(res => { console.log(res); return generateId(); })
//         .then(res => { console.log(res); return sendMaterials(); })
//         .then(res => { console.log(res); return accessToClasses(); })
//         .then(res => { console.log(res); })
