function scuberGreetingForFeet(ride){
  // Write your code here!
  let Charge
  if (ride <= 400) {
    Charge = 'This one is on me!';
}
else if(ride >= 2501){
  Charge ='No can do.';
}
  else if(ride > 2000){
    Charge ='I will gladly take your thirty bucks.';
  }
  
return Charge
}
function ternaryCheckCity(city){
  // Write your code here!
  //let city = "NYC";
  let destination = (city === "NYC") ? "Ok, sounds good.":  "No go.";
  return destination;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  //let tip ;
  let comment;

switch (tip) {
  case "generous":
    comment = "Thank you so much.";
    break;
  case "not as generous":
    comment = "Thank you.";
    break;
  default:
    comment = "Bye.";
}

 return comment;
}