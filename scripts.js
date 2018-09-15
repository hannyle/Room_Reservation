let roomList = document.querySelectorAll(".free-room");
let reserveModal = document.getElementById("reserve");
let closeSign = document.querySelector(".close");
let roomTable = document.getElementById("myTable");
let roomTitle = document.getElementById("room-title");

roomList.forEach(room => {    
    room.addEventListener("click", ()=>{
        reserveModal.style.display = "block";
        let roomRow = room.rowIndex;
        console.log(myTable.rows[roomRow].cells[0]);        
    });
});

closeSign.addEventListener("click", ()=>{
        reserveModal.style.display = "none";
    });


window.addEventListener("click", (event)=>{
    if (event.target == reserveModal) {
        reserveModal.style.display = "none";
    }
});