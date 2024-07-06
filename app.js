var firstName = prompt("Enter your First name : ");
var lastName = prompt("Enter your Last name : ");

var fullName = firstName + " " + lastName;

document.write("<b>Hello!</b> "+ fullName + " Good Afternoon.<hr>");


var favMobile = prompt("Enter your favourite Mobile Phone Model : ");
document.write("<br>My <b>Favourite phone</b> is : "+ favMobile);
document.write("<br>Length of string : "+ favMobile.length);


var str = "Pakistani";

document.write("<hr>String : "+ str);
document.write("<br>Index of <b>'n'</b> is : "+ str.indexOf("n"));


var greet = "Hello World";

document.write("<hr>String : "+ greet);
document.write("<br>Last index of <b>'l'</b> is : "+ greet.lastIndexOf("l"));


document.write("<hr>String : "+ str);
document.write("<br>Character at index <b>'3'</b> is : "+ str.charAt(3));

//Repeat Q1 using string concat() method.
document.write("<br><hr>"+ firstName.concat(lastName));