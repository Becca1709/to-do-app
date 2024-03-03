//DOM elements 
const listForm = document.getElementById('todolist');
const listContainer= document.querySelector(".list");
const listInput= listForm["newtask"];

// this function GETS the items saved in localstorage and puts them back as an array?
const newList= JSON.parse(localStorage.getItem("savedData"))|| [];

//this one adds an extra element to an array??.
const addNewTask= (newtask) => {
    newList.push({
        newtask, 
    })
    localStorage.setItem('savedData', JSON.stringify(newList));
    return {newtask}; //returns the input?
};
 //here data is saved and given the key.
;

const createNewList = ({newtask}) => {
if(newtask===" "){
   alert("write task first");
} else{
    //creates DOM elements
    const listParent= document.createElement("ul");
    const listItem= document.createElement("li"); 
    const checkBox= document.createElement('input');
    checkBox.type="checkbox";
    checkBox.className="checkbox";
    listItem.appendChild(checkBox);// adds the checkboxs as a children on the <li>
    const deleteBtn =document.createElement('input'); //creates the delete btn
    deleteBtn.className= "deletebtn"; //gives a class to the btn to style it in css
    deleteBtn.type = "button"; // what type of input
   ;// text inside the btn
    
//adds elements in list item element
   const textList= document.createTextNode("you need to "+ newtask +" ")
   listItem.appendChild(textList);
   listItem.appendChild(deleteBtn);
//function that strikes or unstrikes when checking the box
    checkBox.onclick= function(e) {
        if(e.target.checked) {
            listItem.style.textDecoration='line-through'
        } else {
            listItem.style.textDecoration = ''
        } // if the box is checked then strike else don't.
     }
    
     //appened to the DOM tree
    listContainer.appendChild(listParent);
    listParent.appendChild(listItem);

    //function to delete the info in the click to the delete btn
    deleteBtn.onclick = e => {
        localStorage.clear('savedData');
        listParent.remove()
     
        }
    }
}

//new list is the  function that gets the info. this add the elements in the array every time the create new list is used?
newList.forEach(createNewList);
listForm.onsubmit = function (e) {
    e.preventDefault();
    const newListItem = addNewTask(listInput.value,); //this one takes the value inside the input text and execute the addNewTask function?
    createNewList(newListItem);// execute the create new list function and adds the value from the previous function
    listInput.value = " "; } 
     // the input value is defined as an empty string?
       /*if () { 
        alert("Add new Task");}
     else {
        e.preventDefault();
    const newListItem = addNewTask(listInput.value,); //this one takes the value inside the input text and execute the addNewTask function?
    createNewList(newListItem);// execute the create new list function and adds the value from the previous function
    listInput.value = " "; // the input value is defined as an empty string?*/

