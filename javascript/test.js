//var first_name = "chris"; two forward slashes mean single line comment
//var last_name = "hess";

/*           
Block Comment



*/
var greeting = "hello!";
var first_name = "chris";
var last_name = "hess";
var message1 = "don't forget to pick up these items"
var message2 = "also, make sure to gather wood, for dooms day prepping";
var favoriteQuote = "\"Four Score...\"";


/*console.log(greeting);
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(favoriteQuote);
console.log(goodbye);*/

//console.log(greeting + " " + first_name + " " + last_name + " " + message1 + " " + message2 + " " + favoriteQuote);

//my quote... the parts in asterisks are the variables that will change...

//My fellow *Americans*, ask not what your *country* can do for *you* - ask what *you* can do for your *country*.

var static_words1 = "My fellow ";
var statis_words2 = ", ask not what your ";
var static_words3 = " can do for ";
var static_words4 = " - ask what ";
var static_words5 = " can do for your ";

//create a variable that is used as a reference to your form button
//we use the unique ID attribute to do this

var button = document.getElementById("submit");

//then we add the ability to have a mouse click fire off a function when clicked on
button.addEventListener("click", onclick, false);

function onclick(evt)
{
  evt.preventDefault(evt); // the line stops the form from submitting by preventing its default action
  
  //Forms
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  console.log(static_words1 + element1 + statis_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5);
  
}