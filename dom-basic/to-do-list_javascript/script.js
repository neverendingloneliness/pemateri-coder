document.title = 'to-do-list'

const btnSubmit = document.getElementById("submit-tugas")
const btnDelete = document.getElementById("delete-tugas")
let inputUser = document.getElementById("input-user")
let log = document.getElementById("log")

btnSubmit.addEventListener("click" , (e) => {

    if (inputUser.value.trim() === ""){
        alert("jangan kosong!")
        return
    }

    alert("tugas ditambahkan!")
    let list = document.createElement("li")
    list.textContent = inputUser.value

    let deleteButtonList = document.createElement("button")
    deleteButtonList.textContent = "❌"
    deleteButtonList.style.marginLeft = "20px"
    deleteButtonList.addEventListener("click", () => {
        log.removeChild(list)
    })

    list.appendChild(deleteButtonList)
    log.appendChild(list)
    e.preventDefault()
})

btnDelete.addEventListener("click" , (e) => {
    
    if (inputUser.value.trim() === ""){
        alert("tidak ada tugas !")
        return
    }
    
    log.innerText = ""
    alert("tugas telah dihapus!")
})

