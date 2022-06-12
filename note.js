console.log("notes app");
// showNotes();

let notesObj = [];

showNotes();
function addNotes() {
    notesObj.push(notes.value);

    //  document.getElementById("btnAdd").innerHTML="";
    notes.value = "";//to set value in text area

    showNotes();
}

function showNotes()
{
    if(notesObj == null)
    {
       document.getElementById("show").innerHTML="add notes";
    }
    else
    {
    let html = '';
    for (let i = 0; i < notesObj.length; i++) {
        console.log(notesObj[i]);
        // document.getElementById("")
        html += `<div class="card">
           <h4 >Note ${i+1}</h4>
           <textarea class="text">${notesObj[i]}</textarea>
           <button id="btnD" onclick="deletefun(${i})">Delete</button>
            </div>`;

    }

    
    show.innerHTML=html;
    }
}

function deletefun(index)
{
    console.log("index "+index);
  notesObj.splice(index,1);

  showNotes();
}