document.write("<br>");
var nam = "Q1: ";
document.write(nam  + "Ans");
document.write("<br>");

//Addition
document.write("<br>");
var a = 3;
var b = 5;
c = 3 + 5;
document.write(c);
document.write("<hr>");


  // question2
document.write("<br>");
var nam = "Q2: ";
document.write(nam  + "Ans");

//Subtraction
document.write("<br><br>");
var a = 3;
var b = 5;
c = 3 - 5;
document.write(c);

// Multiplication
document.write("<br>");
var a = 3;
var b = 5;
c = 3 * 5;
document.write(c);

// Division
document.write("<br>");
var a = 3;
var b = 5;
c = 3 / 5;
document.write(c);

// Modulus (Remainder)
document.write("<br>");
var a = 3;
var b = 5;
c = 3 % 5;
document.write(c);
document.write("<hr>");

   //question3
document.write("<br>");
var nam = "Q3: ";
document.write(nam  + "Ans");
document.write("<br>");
  
   //a
document.write("<br>");   
var value = "Hello";
document.write("a: " + value);
document.write("<br>");

   //b
var value = "Value after variable declaration is: ";
var x;
document.write("b: " + value + x);
document.write("<br>");

  //c
var number = 101;
document.write("c: " + number);
document.write("<br>");
   
   //d
var value = "Initialize Value: ";
var a = 5;
document.write("d: " + value + a);
document.write("<br>");
   
   //e
var a = 10; 
var b = 3; 
a++;
document.write("e: " );
document.write( a+b);

   //f
var a = "Value after increment is: ";
var b = 6;
document.write("f: " + a + b);
document.write("<br>");

   //h
var a = "Value after addition is: ";
var b = 13;
document.write("h: " + a + b);
document.write("<br>");

   //i
var a = 10; 
var b = 3; 
a--;
document.write("i: " );
document.write( a-b);
document.write("<br>");

   //j
var a = "Value after decrement is: ";
var b = 12;
document.write("h: " + a + b);
document.write("<br>");

   //k   //i
var x = 6;
var y = 3;
z = "The reminder is: ";
var div = Math.trunc(x/y);
var reminder = x%y;
document.write("k: " + div)
document.write("<br>");
document.write("i: " + z + reminder); 
document.write("<br>");
document.write("<hr>");

   //question 4
document.write("<br>");
var nam = "Q4: ";
document.write(nam  + "Ans");
document.write("<br><br>");

var ticket_price = 600;
var cost = 5;
var line = "Total cost to buy 5 tickets to a movie is: ";
total_price = 5*600;
document.write(line + total_price + "PKR");
document.write("<hr>");

   //question 5
document.write("<br>");
var nam = "Q5: ";
document.write(nam  + "Ans");
document.write("<br><br>");

var a = "Table of 5";
document.write(a);
document.write("<br>");
function table(number){
   for(var i=1;i<=10;i++){
      var res = i*number;
      document.write("<div>");
      document.write(`${number} x ${i} = ${res}`);
      document.write("</div>");
   }
}

table(5);
document.write("<hr>");

   //question 6
document.write("<br>");
var nam = "Q6: ";
document.write(nam  + "Ans");
document.write("<br><br>");

const cToF = function (celcius) {
   const cTemp = celcius;
   const ToFahr = cTemp * (9 / 5) + 32;
   const msg = `${cTemp}\xB0C is ${ToFahr} \xB0F `;
   return msg;
}
document.write(cToF(25));
document.write("<br>");

const fToC = function (fahrenheit) {
   const fTemp = fahrenheit;
   const fToCel = (fTemp -32) * (5 / 9) ;
   const msg = `${fTemp}\xB0F is ${fToCel} \xB0C `;
   return msg;
}
document.write(fToC(70));
document.write("<hr>");

   //question 7
document.write("<br>");
var nam = "Q7: ";
document.write(nam  + "Ans");
document.write("<br>");

document.write("<h1>Shopping Cart</h1>")
// document.write("<br>");
var price1 = 650;
var item = "Price of item 1"
var price2 = 100;
var item2 = "Price of item 2"
var quantity = 3;
var item3 = "Quantity of item 1"
var quantity2 = 7;
var item4 = "Quantity of item 2"
var charges = 100;
var item5 = "Shipping charges"
document.write(item + " is " + price1);
document.write("<br>");
document.write(item2 + " is " + price2);
document.write("<br>");
document.write(item3 + " is " + quantity);
document.write("<br>");
document.write(item4 + " is " + quantity2);
document.write("<br>");
document.write(item5 + " is " + charges);
document.write("<br><br>");
var price3 = 2750;
var total = "Total cost of your order is ";
document.write(total + price3);
document.write("<hr>");

   //question 8
document.write("<br>");
var nam = "Q8: ";
document.write(nam  + "Ans");
document.write("<br>");

document.write("<h1>Marks Sheet</h1>")
// document.write("<br>");
var marks = 980;
var obtained = "Total marks: ";
var marks2 = 804;
var obtained2 = "Marks obtained: ";
per = (804 * 100) /980;
document.write(obtained + marks) ;
document.write("<br>");
document.write(obtained2 + marks2) ;
document.write("<br>");
document.write("Percentage: " + per + "%") ;
document.write("<hr>");

   //question 9
document.write("<br>");
var nam = "Q9: ";
document.write(nam  + "Ans");
document.write("<br>");

document.write("<h1>Currency in PKR</h1>")
// document.write("<br>");
var dollar = 10;
var saudi = 25;
var result = dollar * 104.80 + saudi *28;
document.write("Total currency in PKR: " + result);
document.write("<hr>");

   //question 10
document.write("<br>");
var nam = "Q10: ";
document.write(nam  + "Ans");
document.write("<br><br>");

var add = 5;
var mul = 10;
var result = (5*10)/2;
document.write(result);
document.write("<hr>");

   //question 11
document.write("<br>");
var nam = "Q11: ";
document.write(nam  + "Ans");
document.write("<br>");

document.write("<h1>Age Calculator</h1>")
var current_year = 2023;
var birth_year = 2005;
var age = current_year - birth_year;
document.write("Current Year: " + current_year + "<br>");
document.write("Birth Year: " + birth_year + "<br>");
document.write("Your Age is: " + age + "<br>");
document.write("<hr>");

   //question 12
document.write("<br>");
var nam = "Q12: ";
document.write(nam  + "Ans");
document.write("<br>");

document.write("<h1>The Geometritizer</h1>");
var radius = 20;
var circumferrence = 2 * 3.142 * radius;
var area = 3.142 * (radius * radius);
document.write("The Radius of circle is: " + radius + "<br>");
document.write("The Circumferrence is: " + circumferrence + "<br>");
document.write("The Area is: " + area + "<hr>");

   //question 13
document.write("<br>");
var nam = "Q13: ";
document.write(nam  + "Ans");
document.write("<br>");

document.write("<h1>The Lifetime Supply Calculator </h1>");
var favourite_snack = "Chocolate Chips";
var current_age = 15;
var maximum_age = 65;
var snacks_per_day = 3;
// var snacks_per_year = 365 * snacks_per_day;
var total_snacks_for_lifetime = (maximum_age - current_age) * snacks_per_day;
document.write("Favourite Snack: " + favourite_snack + "<br>");
document.write("Current Age: " + current_age + "<br>");
document.write("Maximum Age: " + maximum_age + "<br>");
document.write("Snack Per Day: " + snacks_per_day + "<br>");
document.write("You will need " + total_snacks_for_lifetime + " to last you until the ripe old age of " + maximum_age + "<hr>");
