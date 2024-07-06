//Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

var firstName = prompt("Enter your First name : ");
var lastName = prompt("Enter your Last name : ");

var fullName = firstName + " " + lastName;

document.write("<b>Hello!</b> "+ fullName + " Good Afternoon.<hr>");



//Write a program to take a user input about his favorite mobile phone model.
var favMobile = prompt("Enter your favourite Mobile Phone Model : ");
document.write("<br>My <b>Favourite phone</b> is : "+ favMobile);
document.write("<br>Length of string : "+ favMobile.length);



//Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
var str = "Pakistani";

document.write("<hr>String : "+ str);
document.write("<br>Index of <b>'n'</b> is : "+ str.indexOf("n"));



//Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
var greet = "Hello World";

document.write("<hr>String : "+ greet);
document.write("<br>Last index of <b>'l'</b> is : "+ greet.lastIndexOf("l"));



//Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
document.write("<hr>String : "+ str);
document.write("<br>Character at index <b>'3'</b> is : "+ str.charAt(3));



//Repeat Q1 using string concat() method.
document.write("<br><hr>"+ firstName.concat(lastName));