const form = document.querySelector('#itemForm'),
itemInput = document.querySelector('#itemInput'),
itemList= document.querySelector('.item-list'),
feedback = document.querySelector('.feedback'),
addBtn = document.querySelector('#add-item'),
clearBtn = document.querySelector('#clear-list');
console.log(form, itemInput);

let todoItems = [];

//todo: get list
const getList = function (todoItems) {
    ItemList.innerHTML = "";
    todoItems.forEach((item,index)=>{
        itemList.insertAdjacentHTML('beforeend'
        );
        handleItem(item);
    });
};

//todo: handle item
const handleItem= function (itemName) {
    const items= itemList.querySelectorAll('.item');

items.forEach((item) => {
 if(item.querySelector('.item-name').textContent.trim().toLowerCase()===itemName.trim().toLowerCase()){
    //todo: completed event
   item.querySelector(".complete-item").addEventListener("click", function(){
    let itemIndex=item.querySelector('.item-index');
    let itemName=item.querySelector('.item-name');

   itemIndex.classList.toggle('completed');
   itemName.classList.toggle('completed'); 
   });
   //todo: edit event
   //todo: delete event 
 }
})
};
//todo: add item to the list
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const itemName=itemInput.value;
    if(itemName.length===0) {
        sendFeedback("Please enter valid value", 'red');
    }
    else {
        todoItems.push(itemName);
        setLocalStorage(todoItems);
        getList(todoItems);
        sendFeedback('Item added to the list','green');
    }

});
//todo: save and load to loacal storage
const setLocalStorage= function (todoItems){
    localStorage.setItem('todoItems',JSON.stringify(todoItems));
};
//todo: send feedback
function sendFeedback(text,ClassName) {
    feedback.classList.add('${className}');
    feedback.innerHTML = text;
    setTimeout(() => {
        feedback.classList.remove('${className}');
        feedback.innerHTML = "Write value for item name";
    },3000);
}
//todo: clear all items