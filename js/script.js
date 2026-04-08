const list = document.querySelector("#list-levels")
const row = document.querySelector(".row")

alert("this is not a serious project, just something I made for both fun and for improving keep that in mind!")

for(i = 1; i <= 11; i++) {
    const listLevelDetails = document.querySelector(`#list-level-details-${i}`)

    document.getElementById(`${i}`).addEventListener("click", () => {
        if(listLevelDetails.classList.contains("show")) {
            listLevelDetails.classList.remove("show")
        } else {
            listLevelDetails.classList.add("show")
        }
    })
}

console.log("Hello Bro")