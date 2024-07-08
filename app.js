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




//Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var city = "Hyderabad";
document.write("<br><hr>City : "+ city);
document.write("<br>After replacement : "+ city.replace("Hyder" , "Islam"));



//Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("<br><hr>" + message);
document.write("<br>" + message.replaceAll("and", "&"));



//Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var strings = "472";
var no = Number(strings);

document.write("<br><hr>Value : " + strings);
document.write("<br>Type : "+ typeof strings);

document.write("<br>Value : " + no);
document.write("<br>Type : "+ typeof no);



//Write a program that takes user input. Convert and show the input in capital letters.

var upperC = prompt("Enter your favourite fruit.");

document.write("<br><hr>Upper Case : " + upperC.toUpperCase());

