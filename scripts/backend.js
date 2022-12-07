// Datatypes in computer languages
var text = "Hello World"; //string (str)
var number = 42; //Integer (int)
var char = "@";
var degree = 10.2; //float
var isHungry = false //Boolean false or true
var students = [
    "Enzo",
    "Jenny",
    "Patricia",
    "Hannatu",
    "Ivan",
    "Jessica",
    "Lata"
]

console.log("Hello World");
// console.warn(text + " " + degree + " " + isHungry);
console.info(students[2]+ ", " + students[4])
//Frontend Commands
// alert("The Answer for Everything is number: " + number);

function AddTodo(){
    console.log("Started th Add Todo function")
    var fieldValue = document.querySelector(".myInput").value;
    if(fieldValue !== ""){
    console.log(fieldValue);
    var textNode = document.createTextNode(fieldValue);
    //variable newListItem, will create an empty ListItem aka. li everytime the function is triggerd
    var newListItem = document.createElement("li");
    newListItem.appendChild(textNode); //append the 2D Text that was converted into a textnode to the empty listitem
        
    // when the text has been extracted, converted into a 2D modul with textNode and packed into an emtpy ListItem, then we can assign that ListItem with its TextNode as a child of the unordered list in html.
    document.querySelector(".myUL").appendChild(newListItem);
    document.querySelector(".myInput").value = " "; 
    }
    else{
    alert("Cant Add Empty Todo")
    }
}
