var number = 1;
var month = 0;
var beforenumber = 0;

while (month < 12){
  var b = number;
  number = number+beforenumber;
  beforenumber = b;
  month++;
  console.log("month:" + month);
  console.log("number:" + number);
  console.log("beforenumber:" + beforenumber);
  console.log();
	
}
