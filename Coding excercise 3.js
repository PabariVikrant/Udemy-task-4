function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
var ageInDaysLeft = 365*(90-age);
var ageInWeeksLeft = 52*(90-age);
var ageInMonthsLeft = 12*(90-age);
console.log("You have " + ageInDaysLeft + " days, " + ageInWeeksLeft + " weeks, and " + ageInMonthsLeft + " months left.");
/*************Don't change the code below**********/
}
lifeInWeeks(27)