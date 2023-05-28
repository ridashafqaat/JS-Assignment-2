  //Question 1
document.write("<br>");
var nam = "Q1: ";
document.write(nam  + "Ans");
document.write("<br><br>");

var a = 10;
document.write("Result:" + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>");
++a;
document.write("The value of ++a is: 11" + "<br>" + "Now the value of a is: " + a + "<br><br>");
a++;
document.write("The value of a++ is: 11" + "<br>" + "Now the value of a is: " + a + "<br><br>");
--a;
document.write("The value of --a is: 11" + "<br>" + "Now the value of a is: " + a + "<br><br>");
a--;
document.write("The value of a-- is: 11" + "<br>" + "Now the value of a is: " + a + "<br><hr>");

  //Question 2
document.write("<br>");
var nam = "Q2: ";
document.write(nam  + "Ans");
document.write("<br><br>");

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write(" a is: " + a );
document.write("<br>")
document.write(" b is: " + b );
document.write("<br>")
document.write(" Result is: " + result );
document.write("<hr>")

  //Question 3
user_name = prompt("Enter your name");
alert("Welcome " + user_name);

  //Question 4
document.write("<br>");
var nam = "Q4: ";
document.write(nam  + "Ans");
document.write("<br><br>");
  
var table_number = prompt("Enter Table Number");
if (table_number === "") {
    var table_number = 5;
}
for (i = 1; i <= 10; i++) {
    document.write(table_number + "x " + i + "= " + table_number * i + "<br>");
}
document.write("<hr>")

  //Question 6
document.write("<br>");
var nam = "Q6: ";
document.write(nam  + "Ans");
document.write("<br><br>");

var subject1 = prompt("Enter Subject 1");
var subject2 = prompt("Enter Subject 2");
var subject3 = prompt("Enter Subject 3");
var marks_subject1 = parseInt(prompt("Enter marks of subject 1"));
var marks_subject2 = parseInt(prompt("Enter marks of subject 2"));
var marks_subject3 = parseInt(prompt("Enter marks of subject 3"));
var subject1_percentage = (marks_subject1 / 100) * 100;
var subject2_percentage = (marks_subject2 / 100) * 100;
var subject3_percentage = (marks_subject3 / 100) * 100;
var total_marks = marks_subject1 + marks_subject2 + marks_subject3;
var total_percentage = (subject1_percentage + subject2_percentage + subject3_percentage) / 3;
document.write("<b>Subject    Total_Marks    Obtained_Marks     Percentage</b>" + "<br>");
document.write(subject1 + "  " + " 100 " + " " + marks_subject1 + " " + subject1_percentage  + "<br>");
document.write(subject2 + "  " + " 100 " + " " + marks_subject2 + " " + subject2_percentage  + "<br>");
document.write(subject3 + "  " + " 100 " + " " + marks_subject3 + " " + subject3_percentage  + "<br>");
document.write(" " + "300" + " " + total_marks + " " + total_percentage + "<hr>");



