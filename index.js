

const totalCount=document.getElementById("totalCount");
const interviewCount=document.getElementById("interviewCount");
const rejectedCount=document.getElementById("rejectedCount");



const jobCard=document.querySelectorAll(".job-card");


// totalCount
totalCount.innerText=jobCard.length;


jobCard.forEach(card=>{

    const interviewBtn=card.querySelector(".interviewBtn");
    const delBtn=card.querySelector(".fa-trash-can");
    const rejectedBtn=card.querySelector(".rejectedBtn")
    

        interviewBtn.addEventListener("click", function () {
            let current = parseInt(interviewCount.innerText);
            interviewCount.innerText = current + 1;
        });

        // Rejected button
        rejectedBtn.addEventListener("click", function () {
            let current = parseInt(rejectedCount.innerText);
            rejectedCount.innerText = current + 1;
        });

        // Delete button
        delBtn.addEventListener("click", function () {
            card.remove();
                    let total = parseInt(totalCount.innerText);
            totalCount.innerText = total - 1;
        });

        


  




})
