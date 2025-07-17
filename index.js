//Greeting based on time of day program

const name = "Sitha";
let currentHour = new Date().getHours();
let greeting;

//logic based on time
if ( currentHour < 12 ){
greeting = "Good morning";
}
else if ( currentHour < 18 ){
greeting = "Good afternoon";
}
else{
greeting = "Good evening";
}
console.log(`${greeting}, ${name}!`);
