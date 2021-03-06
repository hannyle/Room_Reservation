//Add new room
const addBtn = document.getElementById("add-room");
const addModal = document.getElementById("add");

addBtn.addEventListener("click", ()=>{
        addModal.style.display = "block"; 
        let inputRoom = document.getElementById("new-room");
        let saveRoom = document.getElementById("add-form");
        saveRoom.addEventListener("submit", (e)=>{
            e.preventDefault();
            let row = table.insertRow();
            let cell1 = row.insertCell(0);
            cell1.classList.add("free-room");
            let cell2 = row.insertCell(1);
            cell2.classList.add("edit-room");
            editBtnArr.push(cell2);               
            let cell3 = row.insertCell(2);
            cell1.innerHTML = inputRoom.value;
            cell2.innerHTML = "<td class='edit-room' data-modal='edit-modal-1'><button>Edit</button></td>";
            cell3.innerHTML = "<td class='remove-room'><button>Delete</button></td>"; 
            addModal.style.display = "none";          
        });  
});
//close add new room modal
const closeAdd = document.getElementById("close-add");
closeAdd.addEventListener("click", ()=>{
    addModal.style.display = "none";
});

//Reserve room
let rooms = document.getElementsByClassName("free-room");
const roomArr = Array.from(rooms);
let resev = [];
for(let t = 0; t<roomArr.length; t++){
    resev[t] = false;
}


for(let i= 0; i<roomArr.length; i++){
    let thisRoom = roomArr[i];
    thisRoom.addEventListener("click", ()=>{
        let reserveModal = document.getElementById(thisRoom.dataset.book);     
        reserveModal.style.display = "block";
        let inputName = document.querySelector("input[data-person=" + thisRoom.dataset.book + "]");  
        let savePerson = document.querySelector("form[data-bookSave=" + thisRoom.dataset.book + "]");       
        savePerson.addEventListener("submit", (e)=>{
            e.preventDefault();
            let roomStatus = thisRoom.firstElementChild;
            roomStatus.innerHTML =" -Reserved- " + inputName.value;
            thisRoom.style.color ="gray";
            thisRoom.style.fontWeight = "normal";
            thisRoom.style.fontStyle = "italic";
            reserveModal.style.display = "none"; 
            savePerson.lastElementChild.value = "Unreserve"; 
            resev[i] = true;        
        });
    });
}

//Unreserve room
for(let m=0; m<roomArr.length; m++){
    let thisRoom = roomArr[m];
    thisRoom.addEventListener("click", ()=>{
        let roomStatus = thisRoom.firstElementChild.innerHTML;
        if(roomStatus.includes("Reserved")){
            let savePerson = document.querySelector("form[data-bookSave=" + thisRoom.dataset.book + "]");
            savePerson.addEventListener("submit", (e)=>{
                e.preventDefault();
                savePerson.lastElementChild.value = "Reserve";
                let roomStatus = thisRoom.firstElementChild;
                roomStatus.innerHTML ="";
                thisRoom.style.color ="black";
                thisRoom.style.fontWeight = "bold";
                thisRoom.style.fontStyle = "normal";
                resev[m] = false;
            });   
        }
    });    
}

//close room-reserve modal
let closeReserve = document.getElementsByClassName("close-reserve");

for(let r=0; r<closeReserve.length; r++){
    let thisClose = closeReserve[r];
    thisClose.addEventListener("click", ()=>{
        let reserveModal = document.getElementById(thisClose.dataset.book);
        reserveModal.style.display = "none";
    });
}

//Edit rooms
let editBtns = document.getElementsByClassName("edit-room");
const editBtnArr = Array.from(editBtns);
for(let i= 0; i<editBtnArr.length; i++){
    let thisBtn = editBtnArr[i];
    thisBtn.addEventListener("click", ()=>{
        let editModal = document.getElementById(thisBtn.dataset.modal);  
        //console.log(editModal);     
        editModal.style.display = "block";
        let input = document.querySelector("input[data-id=" + thisBtn.dataset.modal + "]"); 
        let room = document.querySelector("td[data-room=" + thisBtn.dataset.modal + "]");     
        let saveEdit = document.querySelector("form[data-save=" + thisBtn.dataset.modal + "]");
        saveEdit.addEventListener("submit", (e)=>{
            e.preventDefault();
            room.innerHTML = input.value; 
            editModal.style.display = "none";          
        });
    });
}
//close edit modals
let closeSign = document.getElementsByClassName("close");
for(let j=0; j<closeSign.length; j++){
    let thisClose = closeSign[j];
    thisClose.addEventListener("click", ()=>{
        let editModal = document.getElementById(thisClose.dataset.modal);        
        editModal.style.display = "none";
    });
}

//Delete room
const table = document.getElementById("myTable");
let deleteBtns = document.getElementsByClassName("remove-room");
for(let n=0; n<deleteBtns.length; n++){
    let delBtn = deleteBtns[n];
    let checkReserve = delBtn.parentNode.firstElementChild.firstElementChild.innerHTML.includes("Reserved");
    console.log(checkReserve);   
    delBtn.addEventListener("click", (e)=>{
        let rowIndex = e.target.parentNode.parentNode.rowIndex;              
        if(resev[n] == false){
            table.deleteRow(rowIndex);                
        }            
    });       
}



